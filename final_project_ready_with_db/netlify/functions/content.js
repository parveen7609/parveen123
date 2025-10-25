const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SECRET = process.env.JWT_SECRET || 'supersecret_demo_key_change_me';
const dataPath = path.join(__dirname, '..', '..', 'data', 'content.json');

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
    return JSON.parse(raw || '{}');
  }catch(e){
    return {};
  }
}
function writeData(obj){
  fs.writeFileSync(dataPath, JSON.stringify(obj, null, 2), 'utf8');
}

exports.handler = async function(event, context){
  const method = event.httpMethod;
  if(method === 'GET'){
    const data = readData();
    return { statusCode: 200, body: JSON.stringify(data) };
  }
  const auth = (event.headers && (event.headers.authorization || event.headers.Authorization)) || '';
  const token = auth.replace('Bearer ','').trim();
  const user = verifyToken(token);
  if(!user) return { statusCode: 401, body: 'Unauthorized' };

  if(method === 'PUT'){
    const body = JSON.parse(event.body || '{}');
    const data = readData();
    const newData = Object.assign(data, body);
    writeData(newData);
    return { statusCode: 200, body: JSON.stringify(newData) };
  }
  return { statusCode: 405, body: 'Method Not Allowed' };
};
