// Enhanced Luna Web Shop JavaScript with Shopping Cart, Dark Mode, and Multi-language

class LunaWebShop {
    constructor() {
        console.log('LunaWebShop constructor called');
        this.cart = JSON.parse(localStorage.getItem('lunaCart') || '[]');
        this.currentLanguage = localStorage.getItem('lunaLanguage') || 'hr';
        this.currentTheme = localStorage.getItem('lunaTheme') || 'light';
        
        console.log(`Initial state - Language: ${this.currentLanguage}, Theme: ${this.currentTheme}`);
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
        console.log(`Theme switched to: ${this.currentTheme}`);
        
        // Force a repaint to ensure changes are visible
        document.body.style.display = 'none';
        document.body.offsetHeight; // trigger reflow
        document.body.style.display = '';
    }

    updateThemeButton() {
        const themeButton = document.getElementById('themeToggle');
        if (themeButton) {
            const icon = themeButton.querySelector('.theme-icon');
            if (icon) {
                icon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
                console.log(`Theme updated to: ${this.currentTheme}`);
            }
        }
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
                'read-more': 'Čitaj više →',
                // Hero sekcija
                'hero-subtitle': 'Kozmetika koja ističe tvoju prirodnu ljepotu – kvalitetno, pouzdano i s ljubavlju odabrano.',
                // Parfemi sekcija
                'perfumes-title': 'Parfemi – Mirisi koji ostavljaju dojam',
                'perfumes-description': 'Otkrijte kolekciju parfema koja spaja eleganciju, sofisticiranost i osobnost. Bilo da tražite cvjetne, drvenaste, orijentalne ili svježe note, naši parfemi naglašavaju vaš stil i stvaraju nezaboravan dojam. Pronađite miris koji govori za vas i upotpunite svoj svakodnevni look jedinstvenom aromom.',
                'perfume1-title': 'Cvjetni Parfem',
                'perfume1-description': 'Elegantna kompozicija cvjetnih nota koja odražava ženstvenu sofisticiranost. Idealan za svakodnevno nošenje.',
                'perfume1-category': 'Cvjetne note',
                'perfume2-title': 'Drvenasti Parfem',
                'perfume2-description': 'Sofisticirane drvenaste note koje stvaraju topao i privlačan miris. Savršen za večernje prilike.',
                'perfume2-category': 'Drvenaste note',
                'perfume3-title': 'Orijentalni Parfem',
                'perfume3-description': 'Egzotične orijentalne note koje plijene svojom jedinstvenom aromom. Za one koji vole izraziti svoju osobnost.',
                'perfume3-category': 'Orijentalne note',
                // Redken sekcija
                'redken-title': 'Redken – Profesionalna njega kose',
                'redken-description': 'Otkrijte svijet profesionalne njege kose uz Redken proizvode. Bilo da tražite šampone, regenerator, tretmane ili styling proizvode, Redken kombinira inovativnu znanost i salonsku kvalitetu kako bi vaša kosa bila zdrava, snažna i blistava. Odaberite proizvode koji odgovaraju vašem tipu kose i uživajte u dugotrajnoj njezi i savršenom izgledu svaki dan.',
                'redken1-title': 'Redken Šampon',
                'redken1-description': 'Profesionalni šampon koji nježno čisti kosu i priprema je za styling. Obogaćen hranjivim sastojcima za zdravu kosu.',
                'redken1-category': 'Profesionalna njega',
                'redken2-title': 'Redken Regenerator',
                'redken2-description': 'Intenzivni regenerator koji dubinski hidrira i obnavlja oštećenu kosu. Rezultat je mekana i blistava kosa.',
                'redken2-category': 'Intenzivna hidratacija',
                'redken3-title': 'Redken Tretman',
                'redken3-description': 'Napredni tretman koji obnavlja strukturu kose i pruža dugotrajan sjaj. Idealan za oštećenu kosu.',
                'redken3-category': 'Obnavljanje strukture',
                // Rhode sekcija
                'rhode-title': 'Rhode by Hailey Bieber – Glamur u svakom potezu',
                'rhode-description': 'Otkrijte Rhode, beauty brend Hailey Bieber, i uživajte u sofisticiranim ruževima, highlighterima i drugim makeup proizvodima koji ističu vašu prirodnu ljepotu. Svaki proizvod pažljivo je formuliran kako bi bio dugotrajan, intenzivan i jednostavan za korištenje – za look koji plijeni pažnju svaki dan.',
                'rhode1-title': 'Rhode Ruž',
                'rhode1-description': 'Luksuzni ruž Hailey Bieber koji pruža intenzivnu boju i dugotrajnost. Formula obogaćena vitaminima.',
                'rhode1-category': 'by Hailey Bieber',
                'rhode2-title': 'Rhode Highlighter',
                'rhode2-description': 'Highlighter koji daje prirodan sjaj i ističe najbolje karakteristike lica. Lako se aplicira i dugo traje.',
                'rhode2-category': 'Prirodni sjaj',
                'rhode3-title': 'Rhode Kolekcija',
                'rhode3-description': 'Kompletna makeup kolekcija Rhode brenda. Sve što trebate za savršen glamurozni look u jednom setu.',
                'rhode3-category': 'Kompletna kolekcija',
                // Blog članovi
                'blog1-category': 'Njega kože',
                'blog1-title': '10 koraka za savršenu jutarnju rutinu njege',
                'blog1-excerpt': 'Otkrijte kako kreirati idealnu jutarnju rutinu koja će vašoj koži dati sjaj i svježinu tijekom cijelog dana...',
                'blog1-date': '25. rujna 2025',
                'blog2-category': 'Makeup',
                'blog2-title': 'Kako odabrati savršenu nijansu ruža?',
                'blog2-excerpt': 'Stručni vodič za odabir ruža koji najbolje pristaje vašem tonu kože i stilu. Savjeti beauty stručnjaka...',
                'blog2-date': '22. rujna 2025',
                'blog3-category': 'Njega kose',
                'blog3-title': 'Redken proizvodi - vodič za zdravu kosu',
                'blog3-excerpt': 'Sve što trebate znati o profesionalnoj njezi kose s Redken proizvodima. Kako postići salonski rezultat kod kuće...',
                'blog3-date': '20. rujna 2025',
                // Kontakt sekcija
                'contact-title': 'Kontaktiraj nas',
                'contact-subtitle': 'Imate pitanja o našim proizvodima? Želite savjet o njezi ili makeup-u? Tu smo za vas!',
                'email-title': 'Email',
                'address-title': 'Adresa',
                'social-title': 'Društvene mreže',
                'form-title': 'Pošaljite nam poruku',
                'form-name': 'Ime i prezime',
                'form-email': 'Email adresa',
                'form-phone': 'Telefon',
                'form-subject': 'Predmet',
                'form-message': 'Poruka',
                'form-newsletter': 'Želim primati newsletter s novostima i posebnim ponudama',
                'form-submit': 'Pošalji poruku',
                'form-placeholder': 'Opišite što vas zanima ili kako vam možemo pomoći...',
                // Select opcije
                'subject-select': 'Odaberite predmet...',
                'subject-perfumes': 'Pitanje o parfemima',
                'subject-redken': 'Pitanje o Redken proizvodima',
                'subject-rhode': 'Pitanje o Rhode kolekciji',
                'subject-delivery': 'Dostava i plaćanje',
                'subject-complaint': 'Reklamacija',
                'subject-other': 'Ostalo',
                // Footer
                'footer-rights': 'Sva prava pridržana.',
                'footer-privacy': 'Privatnost',
                'footer-terms': 'Uvjeti korištenja'
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
                'read-more': 'Read more →',
                // Hero sekcija
                'hero-subtitle': 'Cosmetics that highlight your natural beauty – quality, reliable and lovingly selected.',
                // Parfemi sekcija
                'perfumes-title': 'Perfumes – Scents that make an impression',
                'perfumes-description': 'Discover a perfume collection that combines elegance, sophistication and personality. Whether you\'re looking for floral, woody, oriental or fresh notes, our perfumes highlight your style and create an unforgettable impression. Find the scent that speaks for you and complete your everyday look with a unique aroma.',
                'perfume1-title': 'Floral Perfume',
                'perfume1-description': 'An elegant composition of floral notes that reflects feminine sophistication. Ideal for everyday wear.',
                'perfume1-category': 'Floral notes',
                'perfume2-title': 'Woody Perfume',
                'perfume2-description': 'Sophisticated woody notes that create a warm and attractive fragrance. Perfect for evening occasions.',
                'perfume2-category': 'Woody notes',
                'perfume3-title': 'Oriental Perfume',
                'perfume3-description': 'Exotic oriental notes that captivate with their unique aroma. For those who like to express their personality.',
                'perfume3-category': 'Oriental notes',
                // Redken sekcija
                'redken-title': 'Redken – Professional hair care',
                'redken-description': 'Discover the world of professional hair care with Redken products. Whether you\'re looking for shampoos, conditioner, treatments or styling products, Redken combines innovative science and salon quality to make your hair healthy, strong and shiny. Choose products that suit your hair type and enjoy long-lasting care and perfect look every day.',
                'redken1-title': 'Redken Shampoo',
                'redken1-description': 'Professional shampoo that gently cleanses hair and prepares it for styling. Enriched with nourishing ingredients for healthy hair.',
                'redken1-category': 'Professional care',
                'redken2-title': 'Redken Conditioner',
                'redken2-description': 'Intensive conditioner that deeply hydrates and restores damaged hair. The result is soft and shiny hair.',
                'redken2-category': 'Intensive hydration',
                'redken3-title': 'Redken Treatment',
                'redken3-description': 'Advanced treatment that restores hair structure and provides long-lasting shine. Ideal for damaged hair.',
                'redken3-category': 'Structure restoration',
                // Rhode sekcija
                'rhode-title': 'Rhode by Hailey Bieber – Glamour in every move',
                'rhode-description': 'Discover Rhode, Hailey Bieber\'s beauty brand, and enjoy sophisticated lipsticks, highlighters and other makeup products that highlight your natural beauty. Each product is carefully formulated to be long-lasting, intense and easy to use – for a look that catches attention every day.',
                'rhode1-title': 'Rhode Lipstick',
                'rhode1-description': 'Luxurious Hailey Bieber lipstick that provides intense color and longevity. Formula enriched with vitamins.',
                'rhode1-category': 'by Hailey Bieber',
                'rhode2-title': 'Rhode Highlighter',
                'rhode2-description': 'Highlighter that gives a natural glow and highlights the best features of the face. Easy to apply and long-lasting.',
                'rhode2-category': 'Natural glow',
                'rhode3-title': 'Rhode Collection',
                'rhode3-description': 'Complete makeup collection of the Rhode brand. Everything you need for the perfect glamorous look in one set.',
                'rhode3-category': 'Complete collection',
                // Blog članovi
                'blog1-category': 'Skincare',
                'blog1-title': '10 steps for the perfect morning skincare routine',
                'blog1-excerpt': 'Discover how to create the ideal morning routine that will give your skin radiance and freshness throughout the day...',
                'blog1-date': 'September 25, 2025',
                'blog2-category': 'Makeup',
                'blog2-title': 'How to choose the perfect lipstick shade?',
                'blog2-excerpt': 'Expert guide to choosing lipstick that best suits your skin tone and style. Beauty expert tips...',
                'blog2-date': 'September 22, 2025',
                'blog3-category': 'Hair Care',
                'blog3-title': 'Redken products - guide to healthy hair',
                'blog3-excerpt': 'Everything you need to know about professional hair care with Redken products. How to achieve salon results at home...',
                'blog3-date': 'September 20, 2025',
                // Kontakt sekcija
                'contact-title': 'Contact us',
                'contact-subtitle': 'Do you have questions about our products? Want advice on care or makeup? We are here for you!',
                'email-title': 'Email',
                'address-title': 'Address',
                'social-title': 'Social media',
                'form-title': 'Send us a message',
                'form-name': 'Full name',
                'form-email': 'Email address',
                'form-phone': 'Phone',
                'form-subject': 'Subject',
                'form-message': 'Message',
                'form-newsletter': 'I want to receive newsletter with news and special offers',
                'form-submit': 'Send message',
                'form-placeholder': 'Describe what interests you or how we can help you...',
                // Select opcije
                'subject-select': 'Choose subject...',
                'subject-perfumes': 'Question about perfumes',
                'subject-redken': 'Question about Redken products',
                'subject-rhode': 'Question about Rhode collection',
                'subject-delivery': 'Delivery and payment',
                'subject-complaint': 'Complaint',
                'subject-other': 'Other',
                // Footer
                'footer-rights': 'All rights reserved.',
                'footer-privacy': 'Privacy',
                'footer-terms': 'Terms of use'
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
        if (langButton) {
            const flag = langButton.querySelector('.flag');
            const text = langButton.querySelector('.lang-text');
            
            if (flag) flag.textContent = this.currentLanguage === 'hr' ? '🇭🇷' : '🇬🇧';
            if (text) text.textContent = this.currentLanguage.toUpperCase();

            console.log(`Language updated to: ${this.currentLanguage}`);

            // Update all elements with data-lang-key
            document.querySelectorAll('[data-lang-key]').forEach(element => {
                const key = element.getAttribute('data-lang-key');
                const translation = this.translations[this.currentLanguage][key];
                if (translation) {
                    element.textContent = translation;
                }
            });
        }
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
        // Wait for elements to be available
        const bindWhenReady = () => {
            const themeToggle = document.getElementById('themeToggle');
            const langToggle = document.getElementById('langToggle');
            const cartToggle = document.getElementById('cartToggle');
            const cartClose = document.getElementById('cartClose');
            const cartOverlay = document.getElementById('cartOverlay');

            if (!themeToggle || !langToggle || !cartToggle) {
                console.log('Waiting for elements to load...');
                setTimeout(bindWhenReady, 100);
                return;
            }

            // Theme toggle
            themeToggle.addEventListener('click', () => {
                console.log('Theme toggle clicked');
                this.toggleTheme();
            });
            
            // Language toggle
            langToggle.addEventListener('click', () => {
                console.log('Language toggle clicked');
                this.toggleLanguage();
            });
            
            // Cart toggle
            cartToggle.addEventListener('click', () => {
                console.log('Cart toggle clicked');
                this.toggleCart();
            });

            if (cartClose) {
                cartClose.addEventListener('click', () => this.toggleCart());
            }
            
            if (cartOverlay) {
                cartOverlay.addEventListener('click', () => this.toggleCart());
            }
            
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

            console.log('All events bound successfully!');
        };

        bindWhenReady();

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const cartModal = document.getElementById('cartModal');
                if (cartModal && cartModal.classList.contains('active')) {
                    this.toggleCart();
                }
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Luna Web Shop...');
    window.lunaShop = new LunaWebShop();
    console.log('Luna Web Shop initialized!');
});

// Fallback initialization in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    // DOM is still loading
    console.log('Waiting for DOM to load...');
} else {
    // DOM already loaded
    console.log('DOM already loaded, initializing immediately...');
    window.lunaShop = new LunaWebShop();
}

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

// Test function for immediate debugging
function testButtons() {
    console.log('Testing buttons...');
    const themeBtn = document.getElementById('themeToggle');
    const langBtn = document.getElementById('langToggle');
    const cartBtn = document.getElementById('cartToggle');
    
    console.log('Theme button:', themeBtn);
    console.log('Language button:', langBtn);
    console.log('Cart button:', cartBtn);
    
    if (themeBtn) {
        themeBtn.style.border = '2px solid red';
        console.log('Theme button found and highlighted');
    }
    
    if (langBtn) {
        langBtn.style.border = '2px solid green';
        console.log('Language button found and highlighted');
    }
    
    if (cartBtn) {
        cartBtn.style.border = '2px solid blue';
        console.log('Cart button found and highlighted');
    }
}

// Run test immediately
setTimeout(testButtons, 1000);