// ===== GALLERY DATA =====
const galleryData = [
    { id: 1, title: 'Bridal Mehndi Design 1', category: 'bridal', description: 'Intricate bridal mehndi with traditional patterns' },
    { id: 2, title: 'Bridal Mehndi Design 2', category: 'bridal', description: 'Full hand bridal mehndi design' },
    { id: 3, title: 'Arabic Mehndi 1', category: 'arabic', description: 'Bold Arabic design with flowing patterns' },
    { id: 4, title: 'Arabic Mehndi 2', category: 'arabic', description: 'Modern Arabic mehndi style' },
    { id: 5, title: 'Jaipuri Style 1', category: 'jaipuri', description: 'Traditional Jaipuri mehndi pattern' },
    { id: 6, title: 'Jaipuri Style 2', category: 'jaipuri', description: 'Authentic Rajasthani design' },
    { id: 7, title: 'Custom Tattoo 1', category: 'tattoo', description: 'Custom designed arm tattoo' },
    { id: 8, title: 'Custom Tattoo 2', category: 'tattoo', description: 'Unique back tattoo design' },
    { id: 9, title: 'Minimalist Tattoo', category: 'tattoo', description: 'Simple elegant tattoo design' },
    { id: 10, title: 'Custom Design 1', category: 'custom', description: 'Personalized fusion design' },
    { id: 11, title: 'Custom Design 2', category: 'custom', description: 'Unique client request design' },
    { id: 12, title: 'Bridal Mehndi Design 3', category: 'bridal', description: 'Elaborate bridal design' },
    { id: 13, title: 'Arabic Mehndi 3', category: 'arabic', description: 'Contemporary Arabic style' },
    { id: 14, title: 'Jaipuri Style 3', category: 'jaipuri', description: 'Classic Jaipuri patterns' },
    { id: 15, title: 'Custom Tattoo 3', category: 'tattoo', description: 'Colorful tattoo artwork' },
];

// ===== GET GALLERY IMAGES =====
function getGalleryImages() {
    const stored = StorageHelper.get('gallery');
    return stored || galleryData;
}

// ===== SAVE GALLERY IMAGES =====
function saveGalleryImages(images) {
    return StorageHelper.set('gallery', images);
}

// ===== RENDER GALLERY =====
function renderGallery(filter = 'all') {
    const images = getGalleryImages();
    const container = document.getElementById('gallery-grid');
    
    if (!container) return;
    
    const filteredImages = filter === 'all' 
        ? images 
        : images.filter(img => img.category === filter);
    
    container.innerHTML = filteredImages.map((img, index) => `
        <div class="gallery-item" data-category="${img.category}" data-index="${index}">
            <div class="gallery-image">
                <i class="fas fa-${getCategoryIcon(img.category)}"></i>
            </div>
            <div class="gallery-overlay">
                <h3>${img.title}</h3>
                <p>${img.description}</p>
            </div>
            <span class="gallery-category">${getCategoryLabel(img.category)}</span>
        </div>
    `).join('');
    
    // Add click events for lightbox
    attachLightboxEvents();
}

// ===== GET CATEGORY ICON =====
function getCategoryIcon(category) {
    const icons = {
        bridal: 'ring',
        arabic: 'hand-sparkles',
        jaipuri: 'crown',
        tattoo: 'palette',
        custom: 'star'
    };
    return icons[category] || 'image';
}

// ===== GET CATEGORY LABEL =====
function getCategoryLabel(category) {
    const labels = {
        bridal: 'Bridal Mehndi',
        arabic: 'Arabic Mehndi',
        jaipuri: 'Jaipuri Style',
        tattoo: 'Tattoo',
        custom: 'Custom Design'
    };
    return labels[category] || 'Design';
}

// ===== FILTER BUTTONS =====
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Get filter value
            const filter = this.dataset.filter;
            // Render filtered gallery
            renderGallery(filter);
        });
    });
}

// ===== LIGHTBOX FUNCTIONALITY =====
let currentImageIndex = 0;
let currentFilter = 'all';

function attachLightboxEvents() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = index;
            openLightbox(index);
        });
    });
}

function openLightbox(index) {
    const images = getGalleryImages();
    const filteredImages = currentFilter === 'all' 
        ? images 
        : images.filter(img => img.category === currentFilter);
    
    if (index < 0 || index >= filteredImages.length) return;
    
    const image = filteredImages[index];
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    // Create placeholder gradient image
    lightboxImg.src = 'data:image/svg+xml,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#800020;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#D4AF37;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="800" height="600" fill="url(#grad)"/>
            <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${image.title}</text>
        </svg>
    `);
    
    lightboxCaption.textContent = `${image.title} - ${image.description}`;
    lightbox.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    const images = getGalleryImages();
    const filteredImages = currentFilter === 'all' 
        ? images 
        : images.filter(img => img.category === currentFilter);
    
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = filteredImages.length - 1;
    } else if (currentImageIndex >= filteredImages.length) {
        currentImageIndex = 0;
    }
    
    openLightbox(currentImageIndex);
}

// ===== INITIALIZE GALLERY =====
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('gallery-grid')) {
        renderGallery();
        initFilters();
        
        // Lightbox close button
        const closeBtn = document.querySelector('.lightbox-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }
        
        // Navigation buttons
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => navigateLightbox(-1));
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => navigateLightbox(1));
        }
        
        // Close on click outside
        const lightbox = document.getElementById('lightbox');
        if (lightbox) {
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            const lightbox = document.getElementById('lightbox');
            if (lightbox && lightbox.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                    navigateLightbox(-1);
                } else if (e.key === 'ArrowRight') {
                    navigateLightbox(1);
                }
            }
        });
        
        // Update current filter when filter buttons are clicked
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                currentFilter = this.dataset.filter;
            });
        });
    }
});