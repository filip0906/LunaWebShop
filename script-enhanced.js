// Enhanced Luna Web Shop JavaScript with Shopping Cart, Dark Mode, and Multi-language

class LunaWebShop {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('lunaCart') || '[]');
        this.currentLanguage = localStorage.getItem('lunaLanguage') || 'hr';
        this.currentTheme = localStorage.getItem('lunaTheme') || 'light';
        
        this.init();
    }

    init() {
        this.initTheme();
        this.initLanguage();
        this.initCart();
        this.initScrollEffects();
        this.initContactForm();
        this.bindEvents();
        this.updateCartDisplay();
    }

    // Theme Management
    initTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeButton();
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('lunaTheme', this.currentTheme);
        this.updateThemeButton();
    }

    updateThemeButton() {
        const themeButton = document.getElementById('themeToggle');
        const icon = themeButton.querySelector('.theme-icon');
        icon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }

    // Language Management
    initLanguage() {
        this.loadLanguageData();
        this.updateLanguageDisplay();
    }

    loadLanguageData() {
        this.translations = {
            hr: {
                'home': 'Početna',
                'perfumes': 'Parfemi',
                'blog': 'Blog',
                'contact': 'Kontakt',
                'cart-title': 'Košarica',
                'empty-cart': 'Vaša košarica je prazna',
                'total': 'Ukupno: ',
                'checkout': 'Završi kupovinu',
                'add-to-cart': 'Dodaj u košaricu',
                'blog-title': 'Beauty Blog - Savjeti i trikovi',
                'blog-subtitle': 'Otkrijte najnovije beauty trendove, savjete za njegu i ekspertne preporuke naših kozmetičkih stručnjaka.',
                'skincare': 'Njega kože',
                'makeup': 'Makeup',
                'haircare': 'Njega kose',
                'read-more': 'Čitaj više →'
            },
            en: {
                'home': 'Home',
                'perfumes': 'Perfumes',
                'blog': 'Blog',
                'contact': 'Contact',
                'cart-title': 'Shopping Cart',
                'empty-cart': 'Your cart is empty',
                'total': 'Total: ',
                'checkout': 'Checkout',
                'add-to-cart': 'Add to Cart',
                'blog-title': 'Beauty Blog - Tips & Tricks',
                'blog-subtitle': 'Discover the latest beauty trends, care tips and expert recommendations from our cosmetic specialists.',
                'skincare': 'Skincare',
                'makeup': 'Makeup',
                'haircare': 'Hair Care',
                'read-more': 'Read more →'
            }
        };
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'hr' ? 'en' : 'hr';
        localStorage.setItem('lunaLanguage', this.currentLanguage);
        this.updateLanguageDisplay();
    }

    updateLanguageDisplay() {
        const langButton = document.getElementById('langToggle');
        const flag = langButton.querySelector('.flag');
        const text = langButton.querySelector('.lang-text');
        
        flag.textContent = this.currentLanguage === 'hr' ? '🇭🇷' : '🇬🇧';
        text.textContent = this.currentLanguage.toUpperCase();

        // Update all elements with data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                element.textContent = translation;
            }
        });
    }

    // Shopping Cart Management
    initCart() {
        this.cart = JSON.parse(localStorage.getItem('lunaCart') || '[]');
    }

    addToCart(productData) {
        const existingItem = this.cart.find(item => item.id === productData.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...productData,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartDisplay();
        this.showCartNotification(productData.name);
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
    }

    saveCart() {
        localStorage.setItem('lunaCart', JSON.stringify(this.cart));
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        // Update cart count
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Update cart items
        if (this.cart.length === 0) {
            cartItems.innerHTML = `<p class="empty-cart" data-lang-key="empty-cart">${this.translations[this.currentLanguage]['empty-cart']}</p>`;
        } else {
            cartItems.innerHTML = this.cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.price.toFixed(2)} € × ${item.quantity}</div>
                    </div>
                    <button class="remove-item" onclick="lunaShop.removeFromCart('${item.id}')">×</button>
                </div>
            `).join('');
        }

        // Update total
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `${total.toFixed(2)} €`;
    }

    toggleCart() {
        const cartModal = document.getElementById('cartModal');
        cartModal.classList.toggle('active');
    }

    showCartNotification(productName) {
        // Create and show notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">✅</span>
                <span class="notification-text">${productName} dodano u košaricu!</span>
            </div>
        `;
        document.body.appendChild(notification);

        // Add CSS for notification if not exists
        if (!document.querySelector('#cart-notification-style')) {
            const style = document.createElement('style');
            style.id = 'cart-notification-style';
            style.textContent = `
                .cart-notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: var(--gradient-primary);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 50px;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
                    z-index: 1001;
                    transform: translateX(400px);
                    transition: transform 0.3s ease;
                }
                .cart-notification.show {
                    transform: translateX(0);
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
            `;
            document.head.appendChild(style);
        }

        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Scroll Effects and Animations
    initScrollEffects() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all sections and cards
        document.querySelectorAll('section, .product-card, .blog-card').forEach(element => {
            observer.observe(element);
        });
    }

    // Contact Form
    initContactForm() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', this.handleContactSubmit.bind(this));
        }
    }

    handleContactSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        this.showFormNotification('Hvala vam! Vaša poruka je uspješno poslana. Kontaktirat ćemo vas uskoro!', 'success');
        e.target.reset();
    }

    showFormNotification(message, type = 'success') {
        const notification = document.querySelector('.form-notification') || document.createElement('div');
        notification.className = `form-notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'success' ? '✅' : '❌'}</span>
                <span class="notification-text">${message}</span>
            </div>
        `;

        if (!document.querySelector('.form-notification')) {
            document.querySelector('#contactForm').appendChild(notification);
        }

        // Add CSS for form notifications
        if (!document.querySelector('#form-notification-style')) {
            const style = document.createElement('style');
            style.id = 'form-notification-style';
            style.textContent = `
                .form-notification {
                    margin-top: 20px;
                    padding: 15px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    animation: slideIn 0.3s ease;
                }
                .form-notification.success {
                    background: #d4edda;
                    color: #155724;
                    border: 1px solid #c3e6cb;
                }
                .form-notification.error {
                    background: #f8d7da;
                    color: #721c24;
                    border: 1px solid #f5c6cb;
                }
                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }

        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // Event Binding
    bindEvents() {
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());
        
        // Language toggle
        document.getElementById('langToggle').addEventListener('click', () => this.toggleLanguage());
        
        // Cart toggle
        document.getElementById('cartToggle').addEventListener('click', () => this.toggleCart());
        document.getElementById('cartClose').addEventListener('click', () => this.toggleCart());
        document.getElementById('cartOverlay').addEventListener('click', () => this.toggleCart());
        
        // Add to cart buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productData = JSON.parse(e.currentTarget.getAttribute('data-product'));
                this.addToCart(productData);
            });
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const cartModal = document.getElementById('cartModal');
                if (cartModal.classList.contains('active')) {
                    this.toggleCart();
                }
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.lunaShop = new LunaWebShop();
});

// Add CSS animations for scroll effects
if (!document.querySelector('#scroll-animation-style')) {
    const style = document.createElement('style');
    style.id = 'scroll-animation-style';
    style.textContent = `
        section, .product-card, .blog-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        section.animate-in, .product-card.animate-in, .blog-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .product-card.animate-in {
            transition-delay: calc(var(--index, 0) * 0.1s);
        }
    `;
    document.head.appendChild(style);
}