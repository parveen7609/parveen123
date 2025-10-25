// Secure client-side login using Netlify Function
(function(){
  async function handleLogin(e){
    e.preventDefault();
    const id = document.getElementById('admin-id').value.trim();
    const pwd = document.getElementById('admin-password').value;
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ id, password: pwd })
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem('adminAuthenticated', 'true');
        window.location.href = '/admin.html';
      } else {
        document.getElementById('login-error').style.display = 'block';
      }
    } catch (err) {
      console.error(err);
      document.getElementById('login-error').textContent = 'Server error.';
      document.getElementById('login-error').style.display = 'block';
    }
  }

  document.getElementById('admin-login-form').addEventListener('submit', handleLogin);
})();