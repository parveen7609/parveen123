// Admin dashboard logic: session check, gallery CRUD using localStorage
(function(){
  const STORAGE_KEY = "site_gallery_v1";
  const formEls = {
    file: document.getElementById('img-file'),
    url: document.getElementById('img-url'),
    title: document.getElementById('img-title'),
    caption: document.getElementById('img-caption'),
    price: document.getElementById('img-price'),
    btnAdd: document.getElementById('btn-add'),
    btnClear: document.getElementById('btn-clear'),
    live: document.getElementById('live-preview'),
    gallery: document.getElementById('gallery')
  };

  // Auth check
  if (!sessionStorage.getItem('adminAuthenticated')){
    window.location.href = '/admin-login.html';
  }

  // Load gallery
  function loadGallery(){
    const json = localStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  }
  function saveGallery(arr){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  }

  function renderGallery(){
    const arr = loadGallery();
    formEls.gallery.innerHTML = '';
    arr.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'card-img';
      card.innerHTML = `
        <img src="${item.src}" alt="${item.title||''}" />
        <div class="meta">
          <strong>${escapeHtml(item.title||'')}</strong>
          <div>₹ ${item.price || '0.00'}</div>
          <div style="font-size:13px;color:#475569">${escapeHtml(item.caption||'')}</div>
          <div class="actions">
            <button class="btn primary btn-edit" data-idx="${idx}">Edit</button>
            <button class="btn ghost btn-delete" data-idx="${idx}">Delete</button>
          </div>
        </div>`;
      formEls.gallery.appendChild(card);
    });
    // attach handlers
    document.querySelectorAll('.btn-delete').forEach(b=>b.addEventListener('click', onDelete));
    document.querySelectorAll('.btn-edit').forEach(b=>b.addEventListener('click', onEdit));
  }

  function escapeHtml(s){ return String(s).replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m]; }); }

  function onDelete(e){
    const idx = Number(e.currentTarget.dataset.idx);
    const arr = loadGallery();
    arr.splice(idx,1);
    saveGallery(arr);
    renderGallery();
  }

  function onEdit(e){
    const idx = Number(e.currentTarget.dataset.idx);
    const arr = loadGallery();
    const item = arr[idx];
    // populate form
    document.getElementById('img-url').value = '';
    document.getElementById('img-title').value = item.title || '';
    document.getElementById('img-caption').value = item.caption || '';
    document.getElementById('img-price').value = item.price || '';
    // store editing index on add button
    formEls.btnAdd.dataset.editIdx = idx;
    // preview
    formEls.live.innerHTML = `<div style="display:flex;gap:8px;align-items:center"><img src="${item.src}" style="max-height:120px;border-radius:6px"/><div><strong>${escapeHtml(item.title||'')}</strong><div>₹ ${item.price||'0.00'}</div><div style="font-size:13px;color:#475569">${escapeHtml(item.caption||'')}</div></div></div>`;
  }

  function clearForm(){
    document.getElementById('img-file').value = '';
    document.getElementById('img-url').value = '';
    document.getElementById('img-title').value = '';
    document.getElementById('img-caption').value = '';
    document.getElementById('img-price').value = '';
    delete formEls.btnAdd.dataset.editIdx;
    formEls.live.innerHTML = '';
  }

  // live preview on URL or file select
  document.getElementById('img-url').addEventListener('input', function(){
    const v = this.value.trim();
    if (!v){ formEls.live.innerHTML = ''; return; }
    formEls.live.innerHTML = `<img src="${v}" style="max-height:140px;border-radius:6px"/>`;
  });
  document.getElementById('img-file').addEventListener('change', function(){
    const f = this.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = function(ev){
      formEls.live.innerHTML = `<img src="${ev.target.result}" style="max-height:140px;border-radius:6px"/>`;
      // store temp data uri for add
      formEls.btnAdd.dataset.fileData = ev.target.result;
    };
    reader.readAsDataURL(f);
  });

  formEls.btnClear.addEventListener('click', function(){ clearForm(); });

  formEls.btnAdd.addEventListener('click', function(){
    const url = document.getElementById('img-url').value.trim();
    const title = document.getElementById('img-title').value.trim();
    const caption = document.getElementById('img-caption').value.trim();
    const price = document.getElementById('img-price').value.trim();
    const dataUri = formEls.btnAdd.dataset.fileData;
    const src = dataUri || url;
    if (!src){ alert('Provide an image file or URL'); return; }
    const arr = loadGallery();
    const editIdx = formEls.btnAdd.dataset.editIdx;
    const item = { src, title, caption, price };
    if (editIdx !== undefined){
      arr[Number(editIdx)] = item;
      delete formEls.btnAdd.dataset.editIdx;
    } else {
      arr.push(item);
    }
    saveGallery(arr);
    clearForm();
    renderGallery();
  });

  // logout
  document.getElementById('btn-logout').addEventListener('click', function(){
    sessionStorage.removeItem('adminAuthenticated');
    window.location.href = '/admin-login.html';
  });

  // initial render
  renderGallery();
})();