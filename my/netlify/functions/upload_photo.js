const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SECRET = process.env.JWT_SECRET || 'supersecret_demo_key_change_me';
const uploadsDir = path.join(__dirname, '..', '..', 'uploads');
const galleryPath = path.join(__dirname, '..', '..', 'data', 'gallery.json');

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

function readGallery(){
  try{
    const raw = fs.readFileSync(galleryPath,'utf8');
    return JSON.parse(raw || '[]');
  }catch(e){
    return [];
  }
}
function writeGallery(arr){
  fs.writeFileSync(galleryPath, JSON.stringify(arr, null, 2), 'utf8');
}

exports.handler = async function(event, context){
  const auth = (event.headers && (event.headers.authorization || event.headers.Authorization)) || '';
  const token = auth.replace('Bearer ','').trim();
  const user = verifyToken(token);
  if(!user) return { statusCode: 401, body: 'Unauthorized' };

  if(event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
  try{
    const body = JSON.parse(event.body || '{}');
    const { filename, content } = body;
    if(!filename || !content) return { statusCode: 400, body: 'Missing data' };
    // create uploads dir
    if(!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
    // safe filename
    const safe = Date.now() + '_' + filename.replace(/[^a-zA-Z0-9._-]/g,'_');
    const filePath = path.join(uploadsDir, safe);
    const buffer = Buffer.from(content, 'base64');
    fs.writeFileSync(filePath, buffer);
    // add to gallery.json
    const gallery = readGallery();
    const item = { id: gallery.length ? Math.max(...gallery.map(g=>g.id))+1 : 1, filename: safe, url: '/uploads/' + safe, uploadedBy: user, uploadedAt: new Date().toISOString() };
    gallery.push(item);
    writeGallery(gallery);
    return { statusCode: 201, body: JSON.stringify(item) };
  }catch(e){
    return { statusCode: 500, body: 'Upload failed: ' + (e.message || e) };
  }
};