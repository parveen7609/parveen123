# Netlify Secure Admin Setup

This project is now configured for a secure admin login using Netlify Functions.

## 🔧 Setup Steps

1. In your Netlify Dashboard → Site Settings → Environment Variables:
   - `ADMIN_ID` = your admin username
   - `ADMIN_PASSWORD` = your admin password

2. Deploy your site (Netlify auto-detects the function in `netlify/functions/login.js`).

3. Visit `/admin-login.html` and log in using the credentials you configured.

## ✅ Notes

- No credentials are stored client-side.
- If login succeeds, a session flag is stored in `sessionStorage`.
- For production security, consider server-side sessions or Netlify Identity.
