const crypto = require('crypto');

const ADMIN_ID = process.env.ADMIN_ID || 'Parveen';
const ADMIN_PW = process.env.ADMIN_PW || 'Parveen@7609';
const SECRET = process.env.JWT_SECRET || 'supersecret_demo_key_change_me';

function createToken(id){
  const ts = Date.now();
  const payload = id + '|' + ts;
  const hmac = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  const token = Buffer.from(payload + '|' + hmac).toString('base64');
  return token;
}

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

exports.handler = async function(event, context) {
  if(event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
  try {
    const body = JSON.parse(event.body || '{}');
    const { id, password } = body;
    if(id === ADMIN_ID && password === ADMIN_PW){
      const token = createToken(id);
      return { statusCode: 200, body: JSON.stringify({ token }) };
    } else {
      return { statusCode: 401, body: 'Invalid credentials' };
    }
  } catch(err) {
    return { statusCode: 400, body: 'Bad Request' };
  }
};
