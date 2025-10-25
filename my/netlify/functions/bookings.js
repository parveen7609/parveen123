const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SECRET = process.env.JWT_SECRET || 'supersecret_demo_key_change_me';
const dataPath = path.join(__dirname, '..', '..', 'data', 'bookings.json');

function verifyToken(token){
  try{
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    const parts = decoded.split('|');
    if(parts.length !== 3) return false;
    const id = parts[0], ts = parts[1], hmac = parts[2];
    const payload = id + '|' + ts;
    const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
    if(expected === hmac && (Date.now() - parseInt(ts,10)) < 24*3600*1000) return id;
    return false;
  }catch(e){
    return false;
  }
}

function readData(){
  try{
    const raw = fs.readFileSync(dataPath,'utf8');
    return JSON.parse(raw || '[]');
  }catch(e){
    return [];
  }
}
function writeData(arr){
  fs.writeFileSync(dataPath, JSON.stringify(arr, null, 2), 'utf8');
}

exports.handler = async function(event, context){
  const auth = (event.headers && (event.headers.authorization || event.headers.Authorization)) || '';
  const token = auth.replace('Bearer ','').trim();
  const user = verifyToken(token);
  if(!user) return { statusCode: 401, body: 'Unauthorized' };

  const method = event.httpMethod;
  if(method === 'GET'){
    const data = readData();
    return { statusCode: 200, body: JSON.stringify(data) };
  } else if(method === 'POST'){
    const body = JSON.parse(event.body || '{}');
    const data = readData();
    const nextId = data.length ? Math.max(...data.map(b=>b.id))+1 : 1;
    const newItem = Object.assign({id: nextId}, body);
    data.push(newItem);
    writeData(data);
    return { statusCode: 201, body: JSON.stringify(newItem) };
  } else if(method === 'PUT'){
    const body = JSON.parse(event.body || '{}');
    const data = readData();
    const idx = data.findIndex(b=>b.id === body.id);
    if(idx === -1) return { statusCode: 404, body: 'Not found' };
    data[idx] = Object.assign(data[idx], body);
    writeData(data);
    return { statusCode: 200, body: JSON.stringify(data[idx]) };
  } else if(method === 'DELETE'){
    const q = event.queryStringParameters || {};
    const id = parseInt(q.id || '0',10);
    const data = readData();
    const idx = data.findIndex(b=>b.id === id);
    if(idx === -1) return { statusCode: 404, body: 'Not found' };
    const removed = data.splice(idx,1)[0];
    writeData(data);
    return { statusCode: 200, body: JSON.stringify(removed) };
  } else {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
};
