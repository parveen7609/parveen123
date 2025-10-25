// ===== SET MINIMUM DATE TO TODAY =====
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const year = tomorrow.getFullYear();
        const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const day = String(tomorrow.getDate()).padStart(2, '0');
        
        dateInput.min = `${year}-${month}-${day}`;
    }
});

// ===== BOOKING FORM SUBMISSION =====
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                email: document.getElementById('email').value.trim(),
                service: document.getElementById('service').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                message: document.getElementById('message').value.trim(),
                whatsappUpdates: document.getElementById('whatsapp-updates').checked
            };
            
            // Validate form
            if (!validateBookingForm(formData)) {
                return;
            }
            
            // Save booking to localStorage
            saveBooking(formData);
            
            // Send to WhatsApp
            sendWhatsAppBooking(formData);
        });
    }
});

// ===== VALIDATE BOOKING FORM =====
function validateBookingForm(data) {
    // Validate name
    if (data.name.length < 2) {
        showNotification('Please enter a valid name', 'error');
        return false;
    }
    
    // Validate phone
    if (!validatePhone(data.phone)) {
        showNotification('Please enter a valid 10-digit phone number', 'error');
        return false;
    }
    
    // Validate email (if provided)
    if (data.email && !validateEmail(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }
    
    // Validate service selection
    if (!data.service) {
        showNotification('Please select a service', 'error');
        return false;
    }
    
    // Validate date
    if (!data.date) {
        showNotification('Please select a date', 'error');
        return false;
    }
    
    // Validate time
    if (!data.time) {
        showNotification('Please select a time slot', 'error');
        return false;
    }
    
    return true;
}

// ===== SAVE BOOKING TO LOCALSTORAGE =====
function saveBooking(bookingData) {
    try {
        // Get existing bookings
        let bookings = StorageHelper.get('bookings') || [];
        
        // Add timestamp and ID
        const booking = {
            ...bookingData,
            id: Date.now(),
            timestamp: new Date().toISOString(),
            status: 'pending'
        };
        
        // Add to bookings array
        bookings.push(booking);
        
        // Save back to storage
        StorageHelper.set('bookings', bookings);
        
        return true;
    } catch (e) {
        console.error('Error saving booking:', e);
        return false;
    }
}

// ===== SEND BOOKING VIA WHATSAPP =====
function sendWhatsAppBooking(data) {
    // Format date
    const date = new Date(data.date);
    const formattedDate = date.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Create WhatsApp message
    const message = `
🎨 *NEW BOOKING REQUEST*
━━━━━━━━━━━━━━━━━━

👤 *Customer Details:*
• Name: ${data.name}
• Phone: ${data.phone}
${data.email ? `• Email: ${data.email}` : ''}

💅 *Service Details:*
• Service: ${data.service}
• Date: ${formattedDate}
• Time: ${data.time}

${data.message ? `📝 *Special Requests:*\n${data.message}\n` : ''}
━━━━━━━━━━━━━━━━━━

⏰ Booking received at: ${new Date().toLocaleString('en-IN')}

${data.whatsappUpdates ? '✅ Customer opted for WhatsApp updates' : '❌ Customer declined WhatsApp updates'}

_Please confirm this booking as soon as possible._
    `.trim();
    
    // WhatsApp number (remove spaces and special characters)
    const whatsappNumber = '919777614017';
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Show success message
    showNotification('Redirecting to WhatsApp for confirmation...', 'success');
    
    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
        
        // Show additional message
        setTimeout(() => {
            showNotification('Booking saved! We\'ll confirm your appointment soon.', 'success');
            
            // Reset form
            document.getElementById('booking-form').reset();
        }, 1000);
    }, 1500);
}

// ===== GET ALL BOOKINGS =====
function getAllBookings() {
    return StorageHelper.get('bookings') || [];
}

// ===== GET PENDING BOOKINGS =====
function getPendingBookings() {
    const bookings = getAllBookings();
    return bookings.filter(booking => booking.status === 'pending');
}

// ===== UPDATE BOOKING STATUS =====
function updateBookingStatus(bookingId, status) {
    const bookings = getAllBookings();
    const index = bookings.findIndex(b => b.id === bookingId);
    
    if (index !== -1) {
        bookings[index].status = status;
        bookings[index].updatedAt = new Date().toISOString();
        StorageHelper.set('bookings', bookings);
        return true;
    }
    
    return false;
}

// ===== DELETE BOOKING =====
function deleteBooking(bookingId) {
    const bookings = getAllBookings();
    const filteredBookings = bookings.filter(b => b.id !== bookingId);
    StorageHelper.set('bookings', filteredBookings);
    return true;
}

// ===== FORMAT BOOKING FOR DISPLAY =====
function formatBookingForDisplay(booking) {
    const date = new Date(booking.date);
    const formattedDate = date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
    
    return {
        ...booking,
        displayDate: formattedDate,
        displayTime: booking.time,
        statusBadge: getStatusBadge(booking.status)
    };
}

// ===== GET STATUS BADGE HTML =====
function getStatusBadge(status) {
    const badges = {
        pending: '<span class="badge badge-warning">Pending</span>',
        confirmed: '<span class="badge badge-success">Confirmed</span>',
        completed: '<span class="badge badge-info">Completed</span>',
        cancelled: '<span class="badge badge-danger">Cancelled</span>'
    };
    return badges[status] || badges.pending;
}

// ===== EXPORT BOOKINGS TO CSV =====
function exportBookingsToCSV() {
    const bookings = getAllBookings();
    
    if (bookings.length === 0) {
        showNotification('No bookings to export', 'error');
        return;
    }
    
    // CSV headers
    const headers = ['ID', 'Name', 'Phone', 'Email', 'Service', 'Date', 'Time', 'Status', 'Message', 'Timestamp'];
    
    // CSV rows
    const rows = bookings.map(b => [
        b.id,
        b.name,
        b.phone,
        b.email || '',
        b.service,
        b.date,
        b.time,
        b.status,
        b.message || '',
        b.timestamp
    ]);
    
    // Create CSV content
    let csvContent = headers.join(',') + '\n';
    rows.forEach(row => {
        csvContent += row.map(cell => `"${cell}"`).join(',') + '\n';
    });
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `bookings_${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Bookings exported successfully!', 'success');
}

// ===== CLEAR ALL BOOKINGS =====
function clearAllBookings() {
    if (confirm('Are you sure you want to clear all booking data? This action cannot be undone.')) {
        StorageHelper.remove('bookings');
        showNotification('All bookings cleared successfully', 'success');
        return true;
    }
    return false;
}