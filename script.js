// Language Management
let currentLanguage = localStorage.getItem('language') || 'es';

const translations = {
    es: {
        // Navigation
        'Home': 'Inicio',
        'Rooms': 'Habitaciones',
        'Amenities': 'Amenidades',
        'Contact': 'Contacto',
        'Book Now': 'Reservar Ahora',
        'Login': 'Iniciar Sesión',
        
        // Hero Section
        'Luxury Meets the Pacific Ocean': 'El Lujo se Encuentra con el Océano Pacífico',
        'Experience unparalleled elegance with breathtaking ocean views at Chile\'s premier beachfront destination': 'Experimenta elegancia sin igual con impresionantes vistas al océano en el destino costero premier de Chile',
        'Reserve Your Stay': 'Reserva tu Estadía',
        'Explore Rooms': 'Explorar Habitaciones',
        
        // Rooms Section
        'Luxury Accommodations': 'Alojamientos de Lujo',
        'Each room offers breathtaking ocean views and world-class amenities': 'Cada habitación ofrece impresionantes vistas al océano y amenidades de clase mundial',
        'Ocean View Suite': 'Suite Vista al Océano',
        'Premium Room': 'Habitación Premium',
        'Standard Room': 'Habitación Estándar',
        'Select Room': 'Seleccionar Habitación',
        
        // Room Features
        'Ocean View': 'Vista al Océano',
        'King Bed': 'Cama King',
        'Private Balcony': 'Balcón Privado',
        'Partial Ocean View': 'Vista Parcial al Océano',
        'Queen Bed': 'Cama Queen',
        'Smart TV': 'TV Inteligente',
        'Garden View': 'Vista al Jardín',
        'Double Bed': 'Cama Doble',
        'Coffee Maker': 'Cafetera',
        
        // Amenities Section
        'World-Class Amenities': 'Amenidades de Clase Mundial',
        'Indulge in luxury with our exceptional facilities and services': 'Disfruta del lujo con nuestras instalaciones y servicios excepcionales',
        'Infinity Pool & Spa': 'Piscina Infinita y Spa',
        'Gourmet Restaurant': 'Restaurante Gourmet',
        'Private Beach Access': 'Acceso a Playa Privada',
        'Fitness Center': 'Centro de Fitness',
        
        // Contact Section
        'Contact Us': 'Contáctanos',
        'Address:': 'Dirección:',
        'Phone:': 'Teléfono:',
        'Email:': 'Email:',
        'Full Name': 'Nombre Completo',
        'Message': 'Mensaje',
        'Send Message': 'Enviar Mensaje',
        
        // Booking Modal
        'Book Your Stay': 'Reserva tu Estadía',
        'Check-in Date': 'Fecha de Entrada',
        'Check-out Date': 'Fecha de Salida',
        'Guests': 'Huéspedes',
        'Guest': 'Huésped',
        'Room Type': 'Tipo de Habitación',
        'Booking Summary': 'Resumen de Reserva',
        'Confirm Booking': 'Confirmar Reserva',
        
        // Footer
        'Quick Links': 'Enlaces Rápidos',
        'Contact Info': 'Información de Contacto',
        'All rights reserved.': 'Todos los derechos reservados.',
        
        // Form placeholders
        'Name': 'Nombre',
        'Password': 'Contraseña',
        'Don\'t have an account?': '¿No tienes cuenta?',
        'Register here': 'Regístrate aquí',
        
        // Messages
        'Please select dates and room type': 'Por favor selecciona fechas y tipo de habitación',
        'Booking confirmed successfully!': '¡Reserva confirmada exitosamente!',
        'Please fill all required fields': 'Por favor completa todos los campos requeridos',
        'Message sent successfully!': '¡Mensaje enviado exitosamente!',
        'Login successful!': '¡Inicio de sesión exitoso!'
    },
    en: {
        // All keys in English (default)
        'Inicio': 'Home',
        'Habitaciones': 'Rooms',
        'Amenidades': 'Amenities',
        'Contacto': 'Contact',
        'Reservar Ahora': 'Book Now',
        'Iniciar Sesión': 'Login',
        
        'El Lujo se Encuentra con el Océano Pacífico': 'Luxury Meets the Pacific Ocean',
        'Experimenta elegancia sin igual con impresionantes vistas al océano en el destino costero premier de Chile': 'Experience unparalleled elegance with breathtaking ocean views at Chile\'s premier beachfront destination',
        'Reserva tu Estadía': 'Reserve Your Stay',
        'Explorar Habitaciones': 'Explore Rooms',
        
        'Alojamientos de Lujo': 'Luxury Accommodations',
        'Cada habitación ofrece impresionantes vistas al océano y amenidades de clase mundial': 'Each room offers breathtaking ocean views and world-class amenities',
        'Suite Vista al Océano': 'Ocean View Suite',
        'Habitación Premium': 'Premium Room',
        'Habitación Estándar': 'Standard Room',
        'Seleccionar Habitación': 'Select Room',
        
        'Vista al Océano': 'Ocean View',
        'Cama King': 'King Bed',
        'Balcón Privado': 'Private Balcony',
        'Vista Parcial al Océano': 'Partial Ocean View',
        'Cama Queen': 'Queen Bed',
        'TV Inteligente': 'Smart TV',
        'Vista al Jardín': 'Garden View',
        'Cama Doble': 'Double Bed',
        'Cafetera': 'Coffee Maker',
        
        'Amenidades de Clase Mundial': 'World-Class Amenities',
        'Disfruta del lujo con nuestras instalaciones y servicios excepcionales': 'Indulge in luxury with our exceptional facilities and services',
        'Piscina Infinita y Spa': 'Infinity Pool & Spa',
        'Restaurante Gourmet': 'Gourmet Restaurant',
        'Acceso a Playa Privada': 'Private Beach Access',
        'Centro de Fitness': 'Fitness Center',
        
        'Contáctanos': 'Contact Us',
        'Dirección:': 'Address:',
        'Teléfono:': 'Phone:',
        'Nombre Completo': 'Full Name',
        'Mensaje': 'Message',
        'Enviar Mensaje': 'Send Message',
        
        'Reserva tu Estadía': 'Book Your Stay',
        'Fecha de Entrada': 'Check-in Date',
        'Fecha de Salida': 'Check-out Date',
        'Huéspedes': 'Guests',
        'Huésped': 'Guest',
        'Tipo de Habitación': 'Room Type',
        'Resumen de Reserva': 'Booking Summary',
        'Confirmar Reserva': 'Confirm Booking',
        
        'Enlaces Rápidos': 'Quick Links',
        'Información de Contacto': 'Contact Info',
        'Todos los derechos reservados.': 'All rights reserved.',
        
        'Nombre': 'Name',
        'Contraseña': 'Password',
        '¿No tienes cuenta?': 'Don\'t have an account?',
        'Regístrate aquí': 'Register here',
        
        'Por favor selecciona fechas y tipo de habitación': 'Please select dates and room type',
        '¡Reserva confirmada exitosamente!': 'Booking confirmed successfully!',
        'Por favor completa todos los campos requeridos': 'Please fill all required fields',
        '¡Mensaje enviado exitosamente!': 'Message sent successfully!',
        '¡Inicio de sesión exitoso!': 'Login successful!'
    }
};

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
    setMinDateToday();
    setupEventListeners();
});

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem('language', currentLanguage);
    updateLanguage();
}

function updateLanguage() {
    document.documentElement.lang = currentLanguage;
    document.getElementById('currentLang').textContent = currentLanguage.toUpperCase();
    
    // Update all elements with data-en and data-es attributes
    const elements = document.querySelectorAll('[data-en], [data-es]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`) || 
                    element.getAttribute('data-es') || 
                    element.getAttribute('data-en');
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-en-placeholder], [data-es-placeholder]');
    placeholderElements.forEach(element => {
        const placeholder = element.getAttribute(`data-${currentLanguage}-placeholder`) || 
                           element.getAttribute('data-es-placeholder') || 
                           element.getAttribute('data-en-placeholder');
        if (placeholder) {
            element.placeholder = placeholder;
        }
    });
    
    // Update select options
    updateSelectOptions();
}

function updateSelectOptions() {
    const roomTypeSelect = document.getElementById('roomType');
    if (roomTypeSelect) {
        const options = roomTypeSelect.querySelectorAll('option');
        options.forEach(option => {
            const text = option.getAttribute(`data-${currentLanguage}`) || 
                        option.getAttribute('data-es') || 
                        option.getAttribute('data-en');
            if (text) {
                option.textContent = text;
            }
        });
    }
}

// Navigation Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show');
}

// Modal Functions
function showBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function showLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Room Selection
function selectRoom(roomType, price) {
    showBookingModal();
    const roomTypeSelect = document.getElementById('roomType');
    roomTypeSelect.value = roomType;
    updateBookingSummary();
}

// Date Management
function setMinDateToday() {
    const today = new Date().toISOString().split('T')[0];
    const checkinDate = document.getElementById('checkinDate');
    const checkoutDate = document.getElementById('checkoutDate');
    
    if (checkinDate) checkinDate.min = today;
    if (checkoutDate) checkoutDate.min = today;
}

function setupEventListeners() {
    // Booking form listeners
    const checkinDate = document.getElementById('checkinDate');
    const checkoutDate = document.getElementById('checkoutDate');
    const roomType = document.getElementById('roomType');
    const guests = document.getElementById('guests');
    
    if (checkinDate) {
        checkinDate.addEventListener('change', function() {
            if (checkoutDate) {
                checkoutDate.min = this.value;
                if (checkoutDate.value && checkoutDate.value <= this.value) {
                    const nextDay = new Date(this.value);
                    nextDay.setDate(nextDay.getDate() + 1);
                    checkoutDate.value = nextDay.toISOString().split('T')[0];
                }
            }
            updateBookingSummary();
        });
    }
    
    if (checkoutDate) {
        checkoutDate.addEventListener('change', updateBookingSummary);
    }
    
    if (roomType) {
        roomType.addEventListener('change', updateBookingSummary);
    }
    
    if (guests) {
        guests.addEventListener('change', updateBookingSummary);
    }
    
    // Form submissions
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmission);
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmission);
    }
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmission);
    }
    
    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

function updateBookingSummary() {
    const checkinDate = document.getElementById('checkinDate').value;
    const checkoutDate = document.getElementById('checkoutDate').value;
    const roomType = document.getElementById('roomType');
    const guests = document.getElementById('guests').value;
    const summary = document.getElementById('bookingSummary');
    
    if (!checkinDate || !checkoutDate || !roomType.value) {
        const message = currentLanguage === 'es' ? 
            'Por favor selecciona fechas y tipo de habitación' : 
            'Please select dates and room type';
        summary.innerHTML = `<p>${message}</p>`;
        return;
    }
    
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);
    const nights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
    const pricePerNight = parseInt(roomType.selectedOptions[0].getAttribute('data-price'));
    const totalPrice = nights * pricePerNight;
    
    const roomName = roomType.selectedOptions[0].textContent;
    
    const summaryHTML = `
        <div class="summary-item">
            <strong>${currentLanguage === 'es' ? 'Habitación:' : 'Room:'}</strong> ${roomName}
        </div>
        <div class="summary-item">
            <strong>${currentLanguage === 'es' ? 'Huéspedes:' : 'Guests:'}</strong> ${guests}
        </div>
        <div class="summary-item">
            <strong>${currentLanguage === 'es' ? 'Entrada:' : 'Check-in:'}</strong> ${formatDate(checkin)}
        </div>
        <div class="summary-item">
            <strong>${currentLanguage === 'es' ? 'Salida:' : 'Check-out:'}</strong> ${formatDate(checkout)}
        </div>
        <div class="summary-item">
            <strong>${currentLanguage === 'es' ? 'Noches:' : 'Nights:'}</strong> ${nights}
        </div>
        <div class="summary-item total">
            <strong>${currentLanguage === 'es' ? 'Total:' : 'Total:'}</strong> $${totalPrice}
        </div>
    `;
    
    summary.innerHTML = summaryHTML;
}

function formatDate(date) {
    return date.toLocaleDateString(currentLanguage === 'es' ? 'es-CL' : 'en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Form Handlers
function handleBookingSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    const requiredFields = ['checkinDate', 'checkoutDate', 'roomType', 'guestName', 'guestEmail'];
    const missingFields = requiredFields.filter(field => 
        !document.getElementById(field).value.trim()
    );
    
    if (missingFields.length > 0) {
        const message = currentLanguage === 'es' ? 
            'Por favor completa todos los campos requeridos' : 
            'Please fill all required fields';
        alert(message);
        return;
    }
    
    // Simulate booking process
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span>';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        const message = currentLanguage === 'es' ? 
            '¡Reserva confirmada exitosamente!' : 
            'Booking confirmed successfully!';
        alert(message);
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        hideBookingModal();
        e.target.reset();
        updateBookingSummary();
    }, 2000);
}

function handleContactSubmission(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span>';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        const message = currentLanguage === 'es' ? 
            '¡Mensaje enviado exitosamente!' : 
            'Message sent successfully!';
        alert(message);
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        e.target.reset();
    }, 1500);
}

function handleLoginSubmission(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span>';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        const message = currentLanguage === 'es' ? 
            '¡Inicio de sesión exitoso!' : 
            'Login successful!';
        alert(message);
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        hideLoginModal();
        e.target.reset();
    }, 1500);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.room-card, .amenity-card');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.room-card, .amenity-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});