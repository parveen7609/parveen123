# ROURKELA MEHNDI & TATTOO JAIPURI STYLE 🎨

A professional, responsive website for a premium Mehndi and Tattoo studio located in Rourkela. This website showcases services, allows customers to book appointments via WhatsApp, and includes a complete admin panel for managing content.

## 🌟 Live Website

**Production URL**: To be deployed on Netlify

**Business Contact**: 
- Phone: 9777614017
- Location: 1st floor, Forum Galleria Mall, Civil Town Ship Rd, Rourkela
- Hours: Tuesday-Monday, 10 AM - 10 PM

---

## ✨ Features Implemented

### 🏠 **Home Page**
- ✅ Stunning hero banner with elegant design
- ✅ Beautiful introduction about the studio
- ✅ Quick service highlights with pricing
- ✅ Customer testimonials section
- ✅ Call-to-action buttons for booking
- ✅ Responsive mobile design

### 💅 **Services Page**
- ✅ Complete Mehndi services (8 services):
  - Bridal Mehndi (₹3,000-₹8,000)
  - Arabic Mehndi (₹800-₹1,500)
  - Rajasthani/Jaipuri Mehndi (₹1,200-₹2,500)
  - Traditional Indian Mehndi (₹600-₹1,200)
  - Indo-Arabic Fusion (₹1,000-₹2,000)
  - Simple Mehndi (₹300-₹600)
  - Kids Mehndi (₹200-₹400)
  - Engagement/Party Mehndi (₹1,500-₹3,000)

- ✅ Complete Tattoo services (10 services):
  - Custom Tattoo Design (₹500-₹2,000/sq inch)
  - Small Tattoo (₹1,000-₹3,000)
  - Medium Tattoo (₹3,000-₹8,000)
  - Large Tattoo (₹8,000-₹25,000+)
  - Temporary Tattoo (₹300-₹800)
  - Cover-up Tattoo (₹5,000-₹15,000)
  - Color Tattoo (Starting ₹2,000)
  - Black & Grey Tattoo (Starting ₹1,500)
  - Minimalist Tattoo (₹800-₹2,500)
  - Name/Text Tattoo (₹800-₹2,000)

### 🖼️ **Gallery Page**
- ✅ Beautiful grid layout with category filters
- ✅ Categories: Bridal, Arabic, Jaipuri, Tattoo, Custom
- ✅ Lightbox viewer with keyboard navigation
- ✅ Previous/Next image navigation
- ✅ Responsive design

### 📅 **Booking Page**
- ✅ Interactive booking form with validation
- ✅ Service selection dropdown (all services)
- ✅ Date picker (minimum date: tomorrow)
- ✅ Time slot selection (10 AM - 9 PM)
- ✅ Customer information (name, phone, email)
- ✅ Special requests/notes field
- ✅ **WhatsApp Integration**: Booking details sent directly via WhatsApp to 9777614017
- ✅ Booking data saved in localStorage
- ✅ Business hours and policy information

### 📞 **Contact Page**
- ✅ Studio address with detailed location
- ✅ Google Maps embed
- ✅ WhatsApp button (9777614017)
- ✅ Call button (click-to-call)
- ✅ Business hours (Tuesday-Monday, 10 AM - 10 PM)
- ✅ Contact form with Netlify Forms integration
- ✅ Social media links (WhatsApp, Instagram, Facebook)

### 🔧 **Admin Panel** (`/admin.html`)
- ✅ **Bookings Management**:
  - View all bookings with status
  - Confirm, complete, cancel bookings
  - Delete bookings
  - WhatsApp contact customers directly
  - Export bookings to CSV
  - Statistics dashboard

- ✅ **Services Management**:
  - Edit service names, prices, descriptions
  - Add new services
  - Delete services
  - Changes saved in localStorage

- ✅ **Gallery Management**:
  - Edit image titles and descriptions
  - Add new gallery items
  - Delete images
  - Change categories

- ✅ **Settings**:
  - Business information
  - Business hours
  - Social media links
  - Data export (JSON)
  - Clear all data option

### 🎨 **Design & UX**
- ✅ Elegant color scheme (Gold #D4AF37, Maroon #800020, Black #1a1a1a)
- ✅ Professional typography (Playfair Display + Poppins)
- ✅ Smooth animations and transitions
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Floating WhatsApp and Call buttons on all pages
- ✅ Fast loading with optimized assets

### 💰 **Google AdSense Integration**
- ✅ AdSense code integrated (pub-3890542505628720)
- ✅ ads.txt file included
- ✅ Strategic ad placements (header, between sections)

---

## 🚀 Deployment to Netlify

### **Method 1: Drag and Drop (Easiest)**

1. **Prepare Your Files**:
   - Download/export all project files
   - Make sure you have all HTML, CSS, JS, and config files

2. **Go to Netlify**:
   - Visit [https://app.netlify.com](https://app.netlify.com)
   - Sign up or log in

3. **Deploy**:
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your entire project folder
   - Wait for deployment (usually 1-2 minutes)
   - Your site will be live with a random Netlify URL

4. **Custom Domain** (Optional):
   - Go to Site Settings → Domain Management
   - Add your custom domain
   - Follow Netlify's DNS configuration instructions

### **Method 2: GitHub Integration (Recommended)**

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [https://app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.`
   - Click "Deploy site"

3. **Automatic Deploys**:
   - Every push to GitHub will auto-deploy to Netlify

### **Method 3: Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

---

## 📂 Project Structure

```
├── index.html              # Home page
├── services.html           # Services listing
├── gallery.html            # Gallery with lightbox
├── booking.html            # Booking form
├── contact.html            # Contact page
├── admin.html              # Admin panel
├── css/
│   ├── style.css          # Main styles
│   ├── services.css       # Services page styles
│   ├── gallery.css        # Gallery styles
│   ├── booking.css        # Booking page styles
│   ├── contact.css        # Contact page styles
│   └── admin.css          # Admin panel styles
├── js/
│   ├── main.js            # Core functionality
│   ├── services.js        # Services management
│   ├── gallery.js         # Gallery & lightbox
│   ├── booking.js         # Booking system
│   └── admin.js           # Admin panel logic
├── netlify.toml           # Netlify configuration
├── _redirects             # Netlify redirects
├── ads.txt                # Google AdSense
└── README.md              # This file
```

---

## 🎯 How to Use the Admin Panel

1. **Access**: Go to `yourdomain.com/admin.html`

2. **Manage Bookings**:
   - View all customer bookings
   - Confirm pending bookings
   - Mark bookings as completed
   - Cancel or delete bookings
   - Contact customers via WhatsApp
   - Export bookings as CSV

3. **Edit Services**:
   - Click edit icon on any service
   - Update name, price, or description
   - Changes save automatically
   - Add new services with "Add Service" button

4. **Manage Gallery**:
   - Edit image titles and descriptions
   - Add new gallery items
   - Delete images
   - Change categories

5. **Update Settings**:
   - Edit business information
   - Update business hours
   - Change social media links
   - Export all data as JSON backup
   - Clear all data (use with caution!)

---

## 📱 WhatsApp Booking Flow

1. **Customer fills booking form** on `/booking.html`
2. **Customer clicks "Confirm Booking via WhatsApp"**
3. **WhatsApp opens** with pre-filled message containing:
   - Customer name and contact
   - Selected service
   - Preferred date and time
   - Special requests
4. **Message sends to 9777614017** (business WhatsApp)
5. **Owner receives notification** instantly
6. **Owner can respond** and confirm booking via WhatsApp

**Message Format**:
```
🎨 NEW BOOKING REQUEST
━━━━━━━━━━━━━━━━━━

👤 Customer Details:
• Name: [Customer Name]
• Phone: [Phone Number]
• Email: [Email]

💅 Service Details:
• Service: [Selected Service]
• Date: [Selected Date]
• Time: [Selected Time]

📝 Special Requests:
[Customer Notes]

━━━━━━━━━━━━━━━━━━
⏰ Booking received at: [Timestamp]
```

---

## 🔄 Data Management

### **Data Storage**
All data is stored in **browser localStorage**:
- **Bookings**: `localStorage.getItem('bookings')`
- **Services**: `localStorage.getItem('services')`
- **Gallery**: `localStorage.getItem('gallery')`

### **Backup Your Data**
1. Go to Admin Panel → Settings
2. Click "Export All Data"
3. Save the JSON file securely
4. Keep multiple backups

### **Restore Data**
To restore data, you'll need to manually import the JSON file by:
1. Opening browser console (F12)
2. Running: `localStorage.setItem('bookings', JSON.stringify(data))`

### **Clear Data**
⚠️ **Warning**: This permanently deletes all data!
- Admin Panel → Settings → Clear All Data
- Use only if you want to reset everything

---

## 🎨 Customization Guide

### **Change Colors**
Edit `css/style.css`:
```css
:root {
    --gold: #D4AF37;        /* Change to your gold color */
    --maroon: #800020;      /* Change to your primary color */
    --black: #1a1a1a;       /* Change to your dark color */
}
```

### **Update Business Information**
Edit each HTML file and update:
- Business name
- Phone number: `9777614017`
- Address
- Business hours
- Social media links

### **Add Real Images**
Replace placeholder gradients with real images:
1. Add images to an `images/` folder
2. Update image sources in HTML
3. Or use image URLs from your hosting

### **Modify Services**
Use the Admin Panel or edit `js/services.js`:
- Add/remove services
- Change prices
- Update descriptions

---

## 📊 Analytics & AdSense

### **Google AdSense**
- Publisher ID: `pub-3890542505628720`
- ads.txt file included
- Ad units placed strategically
- **Note**: Replace ad slot IDs with your actual slot IDs from AdSense dashboard

### **Add Google Analytics** (Optional)
Add this before `</head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

---

## 🐛 Troubleshooting

### **WhatsApp Not Opening**
- Check phone number format: `919777614017` (country code + number)
- Ensure WhatsApp is installed (on mobile)
- WhatsApp Web will open on desktop

### **Bookings Not Saving**
- Check browser localStorage is enabled
- Clear browser cache and try again
- Check browser console for errors (F12)

### **Admin Panel Not Loading Data**
- Open browser console (F12)
- Check for JavaScript errors
- Verify localStorage has data
- Try refreshing the page

### **Forms Not Submitting**
- Check form validation
- Ensure all required fields are filled
- Check browser console for errors

---

## 🔒 Security Notes

1. **Admin Panel**: Currently accessible to anyone with URL
   - **Production**: Add password protection via Netlify
   - **Alternative**: Move to separate subdomain with authentication

2. **Data Privacy**: Customer data stored in browser localStorage
   - Consider migrating to backend database for production
   - Regularly backup data

3. **WhatsApp**: Booking details sent via public URL
   - Consider using WhatsApp Business API for production

---

## 📈 Future Enhancements

### **Not Yet Implemented** (Future Development)
- [ ] Payment deposit integration (Razorpay/PhonePe)
- [ ] Auto-reminder SMS/email system
- [ ] Backend database for data persistence
- [ ] Admin authentication/login system
- [ ] Customer review submission form
- [ ] Blog/articles section
- [ ] Online portfolio with before/after photos
- [ ] Booking calendar view
- [ ] Email notifications
- [ ] Multi-language support (Hindi + English)

### **Recommended Next Steps**
1. Deploy to Netlify and test all features
2. Add real images to gallery
3. Test booking flow thoroughly
4. Set up Google Analytics
5. Configure Google AdSense properly
6. Add password protection to admin panel
7. Consider backend integration for data persistence
8. Implement payment gateway
9. Set up automated reminders

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox/Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Playfair Display + Poppins
- **Font Awesome 6**: Icons
- **LocalStorage API**: Data persistence
- **WhatsApp Business API**: Booking notifications
- **Netlify**: Hosting and deployment
- **Google AdSense**: Monetization

---

## 📞 Support & Contact

**Business**: ROURKELA MEHNDI & TATTOO JAIPURI STYLE
- **Phone**: 9777614017
- **Location**: 1st floor, Forum Galleria Mall, Civil Town Ship Rd, Rourkela
- **Hours**: Tuesday-Monday, 10 AM - 10 PM

**Technical Issues**: 
- Check browser console for errors (F12)
- Ensure localStorage is enabled
- Clear browser cache
- Try different browser

---

## 📄 License

This website is proprietary software created for ROURKELA MEHNDI & TATTOO JAIPURI STYLE.

---

## ✅ Deployment Checklist

Before going live, verify:

- [ ] All pages load correctly
- [ ] WhatsApp booking works (test with real phone)
- [ ] Call button works (test on mobile)
- [ ] All forms validate properly
- [ ] Gallery lightbox functions
- [ ] Admin panel accessible
- [ ] Responsive on all devices (mobile, tablet, desktop)
- [ ] Google Maps embed loads
- [ ] AdSense ads display (after approval)
- [ ] Contact form submits (Netlify Forms)
- [ ] Business information is correct
- [ ] Phone numbers are correct
- [ ] Social media links work
- [ ] No console errors
- [ ] Fast loading speed

---

## 🎉 Website is Ready!

Your professional website is complete and ready to deploy! Follow the deployment instructions above to make it live on Netlify.

**Good luck with your business! 🎨✨**