// ===== SERVICES DATA =====
const servicesData = {
    mehndi: [
        {
            id: 1,
            name: 'Bridal Mehndi',
            category: 'mehndi',
            description: 'Complete bridal mehndi design for hands and feet with intricate traditional patterns. Perfect for your special wedding day with long-lasting natural color.',
            price: '₹3,000 - ₹8,000',
            features: ['Full hand & feet design', 'Intricate patterns', 'Natural henna', 'Dark rich color', '4-6 hours duration'],
            icon: 'fa-ring'
        },
        {
            id: 2,
            name: 'Arabic Mehndi',
            category: 'mehndi',
            description: 'Bold and beautiful Arabic mehndi designs with flowing patterns and modern appeal. Perfect for parties and special occasions.',
            price: '₹800 - ₹1,500',
            features: ['Both hands design', 'Bold patterns', 'Quick application', 'Modern style', '1-2 hours duration'],
            icon: 'fa-hand-sparkles'
        },
        {
            id: 3,
            name: 'Rajasthani/Jaipuri Mehndi',
            category: 'mehndi',
            description: 'Traditional Rajasthani and Jaipuri style mehndi with authentic cultural patterns. Signature style of our studio.',
            price: '₹1,200 - ₹2,500',
            features: ['Traditional patterns', 'Cultural designs', 'Authentic Jaipuri style', 'Full coverage', '2-3 hours duration'],
            icon: 'fa-crown'
        },
        {
            id: 4,
            name: 'Traditional Indian Mehndi',
            category: 'mehndi',
            description: 'Classic Indian mehndi designs with traditional motifs and patterns. Ideal for festivals and celebrations.',
            price: '₹600 - ₹1,200',
            features: ['Traditional motifs', 'Cultural significance', 'Detailed work', 'Natural henna', '1-2 hours duration'],
            icon: 'fa-om'
        },
        {
            id: 5,
            name: 'Indo-Arabic Fusion',
            category: 'mehndi',
            description: 'Perfect blend of Indian and Arabic styles combining intricate and bold patterns for a unique look.',
            price: '₹1,000 - ₹2,000',
            features: ['Fusion design', 'Best of both styles', 'Unique patterns', 'Customizable', '2-3 hours duration'],
            icon: 'fa-star'
        },
        {
            id: 6,
            name: 'Simple Mehndi Design',
            category: 'mehndi',
            description: 'Elegant and simple mehndi designs perfect for casual occasions and quick application.',
            price: '₹300 - ₹600',
            features: ['Simple patterns', 'Quick application', 'Elegant look', 'Budget-friendly', '30-60 minutes'],
            icon: 'fa-hand-peace'
        },
        {
            id: 7,
            name: 'Kids Mehndi',
            category: 'mehndi',
            description: 'Fun and safe mehndi designs specially created for children with cartoon characters and simple patterns.',
            price: '₹200 - ₹400',
            features: ['Child-friendly', 'Safe natural henna', 'Fun designs', 'Quick application', '15-30 minutes'],
            icon: 'fa-child'
        },
        {
            id: 8,
            name: 'Engagement/Party Mehndi',
            category: 'mehndi',
            description: 'Stylish mehndi designs perfect for engagement ceremonies and party occasions with contemporary patterns.',
            price: '₹1,500 - ₹3,000',
            features: ['Party-perfect designs', 'Contemporary style', 'Both hands', 'Premium quality', '2-3 hours duration'],
            icon: 'fa-glass-cheers'
        }
    ],
    
    tattoo: [
        {
            id: 9,
            name: 'Custom Tattoo Design',
            category: 'tattoo',
            description: 'Unique custom tattoo designed specifically for you. Work with our artist to create your perfect tattoo.',
            price: '₹500 - ₹2,000 per sq inch',
            features: ['Personalized design', 'One-of-a-kind', 'Artist collaboration', 'Any style', 'Professional execution'],
            icon: 'fa-palette'
        },
        {
            id: 10,
            name: 'Small Tattoo (2-3 inch)',
            category: 'tattoo',
            description: 'Perfect starter tattoo or addition to your collection. Small, detailed designs that make a statement.',
            price: '₹1,000 - ₹3,000',
            features: ['Compact design', 'Detailed work', 'Quick session', 'Various styles', '30-60 minutes'],
            icon: 'fa-star'
        },
        {
            id: 11,
            name: 'Medium Tattoo (4-6 inch)',
            category: 'tattoo',
            description: 'Medium-sized tattoos with more detail and complexity. Perfect for arms, shoulders, and calves.',
            price: '₹3,000 - ₹8,000',
            features: ['Medium coverage', 'Detailed artwork', 'Multiple colors', 'Professional quality', '1-2 hours'],
            icon: 'fa-fire'
        },
        {
            id: 12,
            name: 'Large Tattoo (7+ inch)',
            category: 'tattoo',
            description: 'Large statement tattoos with intricate details and full artwork. Back pieces, chest pieces, and sleeves.',
            price: '₹8,000 - ₹25,000+',
            features: ['Large coverage', 'Intricate details', 'Full artwork', 'Multiple sessions', '3+ hours'],
            icon: 'fa-dragon'
        },
        {
            id: 13,
            name: 'Temporary Tattoo',
            category: 'tattoo',
            description: 'Try before you commit! High-quality temporary tattoos that look real and last for days.',
            price: '₹300 - ₹800',
            features: ['Lasts 3-5 days', 'Realistic look', 'Try designs', 'No commitment', 'Water-resistant'],
            icon: 'fa-clock'
        },
        {
            id: 14,
            name: 'Cover-up Tattoo',
            category: 'tattoo',
            description: 'Transform old or unwanted tattoos into beautiful new artwork. Expert cover-up solutions.',
            price: '₹5,000 - ₹15,000',
            features: ['Hide old tattoos', 'New design', 'Expert technique', 'Custom solution', 'Consultation included'],
            icon: 'fa-paint-roller'
        },
        {
            id: 15,
            name: 'Color Tattoo',
            category: 'tattoo',
            description: 'Vibrant color tattoos using premium quality inks. Bring your design to life with stunning colors.',
            price: 'Starting ₹2,000',
            features: ['Vibrant colors', 'Premium inks', 'Long-lasting', 'Professional shading', 'Color consultation'],
            icon: 'fa-rainbow'
        },
        {
            id: 16,
            name: 'Black & Grey Tattoo',
            category: 'tattoo',
            description: 'Classic black and grey tattoos with incredible depth and shading. Timeless and elegant.',
            price: 'Starting ₹1,500',
            features: ['Classic style', 'Shading expertise', 'Timeless appeal', 'Professional quality', 'Various designs'],
            icon: 'fa-moon'
        },
        {
            id: 17,
            name: 'Minimalist Tattoo',
            category: 'tattoo',
            description: 'Simple, elegant minimalist tattoos with clean lines and subtle beauty. Less is more.',
            price: '₹800 - ₹2,500',
            features: ['Clean lines', 'Subtle design', 'Modern style', 'Quick application', 'Timeless appeal'],
            icon: 'fa-minus'
        },
        {
            id: 18,
            name: 'Name/Text Tattoo',
            category: 'tattoo',
            description: 'Personalized name and text tattoos in various fonts and styles. Perfect for memorials and dedications.',
            price: '₹800 - ₹2,000',
            features: ['Custom fonts', 'Various languages', 'Personal meaning', 'Perfect lettering', 'Size options'],
            icon: 'fa-font'
        },
        {
            id: 19,
            name: 'Portrait Tattoo',
            category: 'tattoo',
            description: 'Realistic portrait tattoos of your loved ones or idols. A timeless tribute.',
            price: 'Starting at ₹10,000',
            features: ['High realism', 'Detailed shading', 'Tribute piece', 'Consultation included', '4+ hours'],
            icon: 'fa-user-circle'
        }
    ]
};

// ===== LOAD SERVICES FROM STORAGE OR DEFAULT =====
function getServices() {
    const stored = StorageHelper.get('services');
    return stored || servicesData;
}

// ===== SAVE SERVICES TO STORAGE =====
function saveServices(services) {
    return StorageHelper.set('services', services);
}

// ===== RENDER SERVICE ITEMS =====
function renderServices() {
    const services = getServices();
    const mehndiContainer = document.getElementById('mehndi-services');
    const tattooContainer = document.getElementById('tattoo-services');
    
    if (mehndiContainer) {
        mehndiContainer.innerHTML = services.mehndi.map(service => createServiceHTML(service)).join('');
    }
    
    if (tattooContainer) {
        tattooContainer.innerHTML = services.tattoo.map(service => createServiceHTML(service)).join('');
    }
}

// ===== CREATE SERVICE HTML =====
function createServiceHTML(service) {
    return `
        <div class="service-item" data-id="${service.id}">
            <div class="service-image">
                <i class="fas ${service.icon}"></i>
                <span class="service-badge">${service.category === 'mehndi' ? 'Mehndi' : 'Tattoo'}</span>
            </div>
            <div class="service-content">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <ul class="service-features">
                    ${service.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
                <div class="service-price">
                    <div>
                        <div class="price-tag">${service.price}</div>
                    </div>
                    <button class="book-btn" onclick="bookService('${service.name}')">Book Now</button>
                </div>
            </div>
        </div>
    `;
}

// ===== BOOK SERVICE =====
function bookService(serviceName) {
    // Store selected service
    StorageHelper.set('selectedService', serviceName);
    // Redirect to booking page
    window.location.href = 'booking.html';
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('mehndi-services') || document.getElementById('tattoo-services')) {
        renderServices();
    }
    
    // Pre-select service if coming from services page
    const selectedService = StorageHelper.get('selectedService');
    if (selectedService) {
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            // Find and select the option
            for (let option of serviceSelect.options) {
                if (option.value.includes(selectedService)) {
                    option.selected = true;
                    break;
                }
            }
            // Clear the stored selection
            StorageHelper.remove('selectedService');
        }
    }
});