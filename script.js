/* LUNA WEB SHOP – theme, i18n, cart, animations, contact form */

const TRANSLATIONS = {
    hr: {
        'skip': 'Preskoči na sadržaj', 'nav-label': 'Glavna navigacija',
        'home': 'Početna', 'perfumes': 'Parfemi', 'blog': 'Blog', 'contact': 'Kontakt',
        'lang-label': 'Promijeni jezik', 'theme-label': 'Promijeni temu', 'menu-label': 'Izbornik',
        'cart-open': 'Otvori košaricu', 'close': 'Zatvori', 'scroll': 'Pomakni se prema dolje', 'to-top': 'Na vrh',
        'cart-title': 'Košarica', 'empty-cart': 'Vaša košarica je prazna', 'total': 'Ukupno:', 'checkout': 'Završi kupovinu',
        'add-to-cart': 'Dodaj u košaricu', 'added': 'Dodano ✓', 'remove': 'Ukloni',
        'qty-minus': 'Smanji količinu', 'qty-plus': 'Povećaj količinu',
        'toast-added': 'dodano u košaricu', 'toast-checkout': 'Online naplata još nije aktivna. Javite nam se i dogovorit ćemo narudžbu.',
        'toast-soon': 'Članak uskoro stiže.', 'toast-form-invalid': 'Molimo ispunite sva obavezna polja.',
        'toast-form-ok': 'Otvaramo vaš email program s pripremljenom porukom.',
        'field-required': 'Ovo polje je obavezno.', 'field-email': 'Unesite ispravnu email adresu.',
        'hero-eyebrow': 'Beauty & Fragrance', 'hero-cta': 'Pregledaj ponudu',
        'hero-subtitle': 'Kozmetika koja ističe tvoju prirodnu ljepotu – kvalitetno, pouzdano i s ljubavlju odabrano.',
        'perfumes-title': 'Parfemi – Mirisi koji ostavljaju dojam',
        'perfumes-description': 'Otkrijte kolekciju parfema koja spaja eleganciju, sofisticiranost i osobnost. Bilo da tražite cvjetne, drvenaste, orijentalne ili svježe note, naši parfemi naglašavaju vaš stil i stvaraju nezaboravan dojam. Pronađite miris koji govori za vas i upotpunite svoj svakodnevni look jedinstvenom aromom.',
        'perfume1-title': 'Cvjetni Parfem', 'perfume1-description': 'Elegantna kompozicija cvjetnih nota koja odražava ženstvenu sofisticiranost. Idealan za svakodnevno nošenje.', 'perfume1-category': 'Cvjetne note', 'perfume1-alt': 'Elegantni parfem s cvjetnim notama',
        'perfume2-title': 'Drvenasti Parfem', 'perfume2-description': 'Sofisticirane drvenaste note koje stvaraju topao i privlačan miris. Savršen za večernje prilike.', 'perfume2-category': 'Drvenaste note', 'perfume2-alt': 'Sofisticirani parfem s drvenastim notama',
        'perfume3-title': 'Orijentalni Parfem', 'perfume3-description': 'Egzotične orijentalne note koje plijene svojom jedinstvenom aromom. Za one koji vole izraziti svoju osobnost.', 'perfume3-category': 'Orijentalne note', 'perfume3-alt': 'Orijentalni parfem s egzotičnim notama',
        'redken-title': 'Redken – Profesionalna njega kose',
        'redken-description': 'Otkrijte svijet profesionalne njege kose uz Redken proizvode. Bilo da tražite šampone, regenerator, tretmane ili styling proizvode, Redken kombinira inovativnu znanost i salonsku kvalitetu kako bi vaša kosa bila zdrava, snažna i blistava. Odaberite proizvode koji odgovaraju vašem tipu kose i uživajte u dugotrajnoj njezi i savršenom izgledu svaki dan.',
        'redken1-title': 'Redken Šampon', 'redken1-description': 'Profesionalni šampon koji nježno čisti kosu i priprema je za styling. Obogaćen hranjivim sastojcima za zdravu kosu.', 'redken1-category': 'Profesionalna njega', 'redken1-alt': 'Redken šampon za profesionalnu njegu kose',
        'redken2-title': 'Redken Regenerator', 'redken2-description': 'Intenzivni regenerator koji dubinski hidrira i obnavlja oštećenu kosu. Rezultat je mekana i blistava kosa.', 'redken2-category': 'Intenzivna hidratacija', 'redken2-alt': 'Redken regenerator za intenzivnu hidrataciju',
        'redken3-title': 'Redken Tretman', 'redken3-description': 'Napredni tretman koji obnavlja strukturu kose i pruža dugotrajan sjaj. Idealan za oštećenu kosu.', 'redken3-category': 'Obnavljanje strukture', 'redken3-alt': 'Redken tretman za obnavljanje kose',
        'rhode-title': 'Rhode by Hailey Bieber – Glamur u svakom potezu',
        'rhode-description': 'Otkrijte Rhode, beauty brend Hailey Bieber, i uživajte u sofisticiranim ruževima, highlighterima i drugim makeup proizvodima koji ističu vašu prirodnu ljepotu. Svaki proizvod pažljivo je formuliran kako bi bio dugotrajan, intenzivan i jednostavan za korištenje – za look koji plijeni pažnju svaki dan.',
        'rhode1-title': 'Rhode Ruž', 'rhode1-description': 'Luksuzni ruž Hailey Bieber koji pruža intenzivnu boju i dugotrajnost. Formula obogaćena vitaminima.', 'rhode1-category': 'by Hailey Bieber', 'rhode1-alt': 'Rhode ruž by Hailey Bieber',
        'rhode2-title': 'Rhode Highlighter', 'rhode2-description': 'Highlighter koji daje prirodan sjaj i ističe najbolje karakteristike lica. Lako se aplicira i dugo traje.', 'rhode2-category': 'Prirodni sjaj', 'rhode2-alt': 'Rhode highlighter za prirodni sjaj',
        'rhode3-title': 'Rhode Kolekcija', 'rhode3-description': 'Kompletna makeup kolekcija Rhode brenda. Sve što trebate za savršen glamurozni look u jednom setu.', 'rhode3-category': 'Kompletna kolekcija', 'rhode3-alt': 'Rhode makeup kolekcija',
        'blog-title': 'Beauty Blog – Savjeti i trikovi', 'blog-subtitle': 'Otkrijte najnovije beauty trendove, savjete za njegu i ekspertne preporuke naših kozmetičkih stručnjaka.', 'read-more': 'Čitaj više →',
        'blog1-category': 'Njega kože', 'blog1-title': '10 koraka za savršenu jutarnju rutinu njege', 'blog1-excerpt': 'Otkrijte kako kreirati idealnu jutarnju rutinu koja će vašoj koži dati sjaj i svježinu tijekom cijelog dana...', 'blog1-date': '25. rujna 2025',
        'blog2-category': 'Makeup', 'blog2-title': 'Kako odabrati savršenu nijansu ruža?', 'blog2-excerpt': 'Stručni vodič za odabir ruža koji najbolje pristaje vašem tonu kože i stilu. Savjeti beauty stručnjaka...', 'blog2-date': '22. rujna 2025',
        'blog3-category': 'Njega kose', 'blog3-title': 'Redken proizvodi – vodič za zdravu kosu', 'blog3-excerpt': 'Sve što trebate znati o profesionalnoj njezi kose s Redken proizvodima. Kako postići salonski rezultat kod kuće...', 'blog3-date': '20. rujna 2025',
        'contact-title': 'Kontaktiraj nas', 'contact-subtitle': 'Imate pitanja o našim proizvodima? Želite savjet o njezi ili makeup-u? Tu smo za vas!',
        'email-title': 'Email', 'address-title': 'Adresa', 'country': 'Hrvatska', 'social-title': 'Društvene mreže',
        'form-title': 'Pošaljite nam poruku', 'form-name': 'Ime i prezime *', 'form-email': 'Email adresa *', 'form-phone': 'Telefon', 'form-subject': 'Predmet *', 'form-message': 'Poruka *',
        'form-newsletter': 'Želim primati newsletter s novostima i posebnim ponudama', 'form-submit': 'Pošalji poruku', 'form-placeholder': 'Opišite što vas zanima ili kako vam možemo pomoći...',
        'subject-select': 'Odaberite predmet...', 'subject-perfumes': 'Pitanje o parfemima', 'subject-redken': 'Pitanje o Redken proizvodima', 'subject-rhode': 'Pitanje o Rhode kolekciji',
        'subject-delivery': 'Dostava i plaćanje', 'subject-complaint': 'Reklamacija', 'subject-other': 'Ostalo',
        'footer-rights': 'Sva prava pridržana.',
        'page-title': 'LUNA WEB SHOP – Parfemi, Redken i Rhode'
    },
    en: {
        'skip': 'Skip to content', 'nav-label': 'Main navigation',
        'home': 'Home', 'perfumes': 'Perfumes', 'blog': 'Blog', 'contact': 'Contact',
        'lang-label': 'Change language', 'theme-label': 'Toggle theme', 'menu-label': 'Menu',
        'cart-open': 'Open cart', 'close': 'Close', 'scroll': 'Scroll down', 'to-top': 'Back to top',
        'cart-title': 'Shopping Cart', 'empty-cart': 'Your cart is empty', 'total': 'Total:', 'checkout': 'Checkout',
        'add-to-cart': 'Add to Cart', 'added': 'Added ✓', 'remove': 'Remove',
        'qty-minus': 'Decrease quantity', 'qty-plus': 'Increase quantity',
        'toast-added': 'added to cart', 'toast-checkout': 'Online checkout is not active yet. Get in touch and we will arrange your order.',
        'toast-soon': 'This article is coming soon.', 'toast-form-invalid': 'Please fill in all required fields.',
        'toast-form-ok': 'Opening your email app with the message prepared.',
        'field-required': 'This field is required.', 'field-email': 'Enter a valid email address.',
        'hero-eyebrow': 'Beauty & Fragrance', 'hero-cta': 'Explore the collection',
        'hero-subtitle': 'Cosmetics that highlight your natural beauty – quality, reliable and lovingly selected.',
        'perfumes-title': 'Perfumes – Scents that make an impression',
        'perfumes-description': 'Discover a perfume collection that combines elegance, sophistication and personality. Whether you\'re looking for floral, woody, oriental or fresh notes, our perfumes highlight your style and create an unforgettable impression. Find the scent that speaks for you and complete your everyday look with a unique aroma.',
        'perfume1-title': 'Floral Perfume', 'perfume1-description': 'An elegant composition of floral notes that reflects feminine sophistication. Ideal for everyday wear.', 'perfume1-category': 'Floral notes', 'perfume1-alt': 'Elegant perfume with floral notes',
        'perfume2-title': 'Woody Perfume', 'perfume2-description': 'Sophisticated woody notes that create a warm and attractive fragrance. Perfect for evening occasions.', 'perfume2-category': 'Woody notes', 'perfume2-alt': 'Sophisticated perfume with woody notes',
        'perfume3-title': 'Oriental Perfume', 'perfume3-description': 'Exotic oriental notes that captivate with their unique aroma. For those who like to express their personality.', 'perfume3-category': 'Oriental notes', 'perfume3-alt': 'Oriental perfume with exotic notes',
        'redken-title': 'Redken – Professional hair care',
        'redken-description': 'Discover the world of professional hair care with Redken products. Whether you\'re looking for shampoos, conditioner, treatments or styling products, Redken combines innovative science and salon quality to make your hair healthy, strong and shiny. Choose products that suit your hair type and enjoy long-lasting care and a perfect look every day.',
        'redken1-title': 'Redken Shampoo', 'redken1-description': 'Professional shampoo that gently cleanses hair and prepares it for styling. Enriched with nourishing ingredients for healthy hair.', 'redken1-category': 'Professional care', 'redken1-alt': 'Redken shampoo for professional hair care',
        'redken2-title': 'Redken Conditioner', 'redken2-description': 'Intensive conditioner that deeply hydrates and restores damaged hair. The result is soft and shiny hair.', 'redken2-category': 'Intensive hydration', 'redken2-alt': 'Redken conditioner for intensive hydration',
        'redken3-title': 'Redken Treatment', 'redken3-description': 'Advanced treatment that restores hair structure and provides long-lasting shine. Ideal for damaged hair.', 'redken3-category': 'Structure restoration', 'redken3-alt': 'Redken hair restoring treatment',
        'rhode-title': 'Rhode by Hailey Bieber – Glamour in every move',
        'rhode-description': 'Discover Rhode, Hailey Bieber\'s beauty brand, and enjoy sophisticated lip products, highlighters and other makeup that highlight your natural beauty. Each product is carefully formulated to be long-lasting, intense and easy to use – for a look that catches attention every day.',
        'rhode1-title': 'Rhode Lipstick', 'rhode1-description': 'Luxurious Hailey Bieber lipstick that provides intense color and longevity. Formula enriched with vitamins.', 'rhode1-category': 'by Hailey Bieber', 'rhode1-alt': 'Rhode lipstick by Hailey Bieber',
        'rhode2-title': 'Rhode Highlighter', 'rhode2-description': 'Highlighter that gives a natural glow and highlights the best features of the face. Easy to apply and long-lasting.', 'rhode2-category': 'Natural glow', 'rhode2-alt': 'Rhode highlighter for a natural glow',
        'rhode3-title': 'Rhode Collection', 'rhode3-description': 'Complete makeup collection of the Rhode brand. Everything you need for the perfect glamorous look in one set.', 'rhode3-category': 'Complete collection', 'rhode3-alt': 'Rhode makeup collection',
        'blog-title': 'Beauty Blog – Tips & Tricks', 'blog-subtitle': 'Discover the latest beauty trends, care tips and expert recommendations from our cosmetic specialists.', 'read-more': 'Read more →',
        'blog1-category': 'Skincare', 'blog1-title': '10 steps for the perfect morning skincare routine', 'blog1-excerpt': 'Discover how to create the ideal morning routine that will give your skin radiance and freshness throughout the day...', 'blog1-date': 'September 25, 2025',
        'blog2-category': 'Makeup', 'blog2-title': 'How to choose the perfect lipstick shade?', 'blog2-excerpt': 'Expert guide to choosing lipstick that best suits your skin tone and style. Beauty expert tips...', 'blog2-date': 'September 22, 2025',
        'blog3-category': 'Hair Care', 'blog3-title': 'Redken products – guide to healthy hair', 'blog3-excerpt': 'Everything you need to know about professional hair care with Redken products. How to achieve salon results at home...', 'blog3-date': 'September 20, 2025',
        'contact-title': 'Contact us', 'contact-subtitle': 'Do you have questions about our products? Want advice on care or makeup? We are here for you!',
        'email-title': 'Email', 'address-title': 'Address', 'country': 'Croatia', 'social-title': 'Social media',
        'form-title': 'Send us a message', 'form-name': 'Full name *', 'form-email': 'Email address *', 'form-phone': 'Phone', 'form-subject': 'Subject *', 'form-message': 'Message *',
        'form-newsletter': 'I want to receive the newsletter with news and special offers', 'form-submit': 'Send message', 'form-placeholder': 'Describe what interests you or how we can help you...',
        'subject-select': 'Choose subject...', 'subject-perfumes': 'Question about perfumes', 'subject-redken': 'Question about Redken products', 'subject-rhode': 'Question about Rhode collection',
        'subject-delivery': 'Delivery and payment', 'subject-complaint': 'Complaint', 'subject-other': 'Other',
        'footer-rights': 'All rights reserved.',
        'page-title': 'LUNA WEB SHOP – Perfumes, Redken & Rhode'
    }
};

const store = {
    get(key, fallback) {
        try { const v = localStorage.getItem(key); return v === null ? fallback : v; } catch (e) { return fallback; }
    },
    set(key, value) {
        try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
    }
};

class LunaShop {
    constructor() {
        this.lang = store.get('lunaLanguage', 'hr');
        if (!TRANSLATIONS[this.lang]) this.lang = 'hr';
        this.theme = document.documentElement.getAttribute('data-theme') || 'light';
        this.products = this.readProducts();
        this.cart = this.loadCart();
        this.lastFocus = null;

        this.cacheDom();
        this.applyLanguage();
        this.updateThemeColor();
        this.renderCart();
        this.bind();
        this.initReveal();
        this.initScroll();
        this.el.year.textContent = new Date().getFullYear();
    }

    t(key) { return TRANSLATIONS[this.lang][key] || TRANSLATIONS.hr[key] || key; }
    money(n) { return new Intl.NumberFormat(this.lang === 'hr' ? 'hr-HR' : 'en-IE', { style: 'currency', currency: 'EUR' }).format(n); }

    cacheDom() {
        const $ = id => document.getElementById(id);
        this.el = {
            header: $('header'), menu: $('navMenu'), menuToggle: $('menuToggle'),
            cartModal: $('cartModal'), cartItems: $('cartItems'), cartTotal: $('cartTotal'), cartCount: $('cartCount'),
            cartClose: $('cartClose'), cartToggle: $('cartToggle'), checkout: $('checkoutBtn'),
            progress: $('scrollProgress'), toTop: $('toTop'), toasts: $('toastRegion'), year: $('year'), form: $('contactForm')
        };
    }

    /* ----- Products come from the markup (single source of truth) ----- */
    readProducts() {
        const map = {};
        document.querySelectorAll('.product-card[data-id]').forEach(card => {
            const img = card.querySelector('.product-image');
            map[card.dataset.id] = { id: card.dataset.id, price: parseFloat(card.dataset.price), image: img.getAttribute('src') };
        });
        return map;
    }

    /* ----- Language ----- */
    applyLanguage() {
        document.documentElement.lang = this.lang;
        document.querySelectorAll('.add-to-cart-btn.added').forEach(b => { b.classList.remove('added'); b.querySelector('span').dataset.i18n = 'add-to-cart'; });
        document.title = this.t('page-title');
        document.querySelector('.lang-text').textContent = this.lang.toUpperCase();
        document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = this.t(el.dataset.i18n); });
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            el.dataset.i18nAttr.split(';').forEach(pair => {
                const [attr, key] = pair.split(':');
                el.setAttribute(attr.trim(), this.t(key.trim()));
            });
        });
        document.querySelectorAll('.product-card').forEach(card => {
            card.querySelector('[data-price-view]').textContent = this.money(parseFloat(card.dataset.price));
        });
        if (this.cart) this.renderCart();
    }

    toggleLanguage() {
        this.lang = this.lang === 'hr' ? 'en' : 'hr';
        store.set('lunaLanguage', this.lang);
        this.applyLanguage();
    }

    /* ----- Theme ----- */
    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        store.set('lunaTheme', this.theme);
        this.updateThemeColor();
    }
    updateThemeColor() {
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.content = this.theme === 'dark' ? '#150f11' : '#8e2a35';
    }

    /* ----- Cart ----- */
    loadCart() {
        try {
            const raw = JSON.parse(store.get('lunaCart', '[]'));
            return raw.filter(i => this.products[i.id] && Number.isInteger(i.quantity) && i.quantity > 0)
                .map(i => ({ id: i.id, quantity: Math.min(i.quantity, 99) }));
        } catch (e) { return []; }
    }
    saveCart() { store.set('lunaCart', JSON.stringify(this.cart)); }

    addToCart(id) {
        const item = this.cart.find(i => i.id === id);
        if (item) item.quantity = Math.min(item.quantity + 1, 99); else this.cart.push({ id, quantity: 1 });
        this.saveCart(); this.renderCart(true);
        this.toast(`${this.productName(id)} ${this.t('toast-added')}`, 'success');
    }
    changeQty(id, delta) {
        const item = this.cart.find(i => i.id === id);
        if (!item) return;
        item.quantity += delta;
        if (item.quantity <= 0) this.cart = this.cart.filter(i => i.id !== id);
        this.saveCart(); this.renderCart();
    }
    removeFromCart(id) { this.cart = this.cart.filter(i => i.id !== id); this.saveCart(); this.renderCart(); }

    productName(id) { return this.t(id.replace(/^parfem/, 'perfume') + '-title'); }

    renderCart(bump = false) {
        const count = this.cart.reduce((s, i) => s + i.quantity, 0);
        const total = this.cart.reduce((s, i) => s + i.quantity * this.products[i.id].price, 0);
        this.el.cartCount.textContent = count;
        this.el.cartCount.classList.toggle('has-items', count > 0);
        if (bump) { this.el.cartCount.classList.remove('bump'); void this.el.cartCount.offsetWidth; this.el.cartCount.classList.add('bump'); }
        this.el.cartTotal.textContent = this.money(total);
        this.el.checkout.disabled = count === 0;

        if (!this.cart.length) {
            this.el.cartItems.innerHTML = `<div class="empty-cart"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg><p>${this.t('empty-cart')}</p></div>`;
            return;
        }
        this.el.cartItems.innerHTML = this.cart.map(({ id, quantity }) => {
            const p = this.products[id], name = this.productName(id);
            return `<div class="cart-item">
                <img src="${p.image}" alt="" width="70" height="70">
                <div>
                    <div class="cart-item-name">${name}</div>
                    <div class="cart-item-price">${this.money(p.price)}</div>
                    <div class="qty">
                        <button type="button" data-act="dec" data-id="${id}" aria-label="${this.t('qty-minus')}">−</button>
                        <span aria-live="polite">${quantity}</span>
                        <button type="button" data-act="inc" data-id="${id}" aria-label="${this.t('qty-plus')}">+</button>
                    </div>
                </div>
                <div class="cart-item-side">
                    <span class="cart-line-total">${this.money(p.price * quantity)}</span>
                    <button type="button" class="remove-item" data-act="rm" data-id="${id}">${this.t('remove')}</button>
                </div>
            </div>`;
        }).join('');
    }

    openCart() {
        this.lastFocus = document.activeElement;
        this.el.cartModal.classList.add('active');
        this.el.cartModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
        setTimeout(() => this.el.cartClose.focus(), 50);
    }
    closeCart() {
        if (!this.el.cartModal.classList.contains('active')) return;
        this.el.cartModal.classList.remove('active');
        this.el.cartModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        if (this.lastFocus) this.lastFocus.focus();
    }

    /* ----- Mobile menu ----- */
    setMenu(open) {
        this.el.menu.classList.toggle('open', open);
        this.el.header.classList.toggle('menu-open', open);
        this.el.menuToggle.setAttribute('aria-expanded', String(open));
        document.body.classList.toggle('no-scroll', open);
    }

    /* ----- Toasts ----- */
    toast(message, type = '') {
        const el = document.createElement('div');
        el.className = `toast ${type}`;
        el.textContent = message;
        this.el.toasts.appendChild(el);
        while (this.el.toasts.children.length > 3) this.el.toasts.firstChild.remove();
        setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 350); }, 3600);
    }

    /* ----- Scroll: header state, progress bar, to-top, active link ----- */
    initScroll() {
        const links = [...document.querySelectorAll('.nav-menu a')];
        const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
        let ticking = false;
        const update = () => {
            const y = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
            this.el.header.classList.toggle('scrolled', y > 40);
            this.el.progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
            this.el.toTop.classList.toggle('show', y > 700);
            let current = null;
            sections.forEach(s => { if (s.getBoundingClientRect().top <= innerHeight * 0.4) current = s.id; });
            links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
            ticking = false;
        };
        addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
        addEventListener('resize', update);
        update();
    }

    /* ----- Reveal on scroll with stagger inside grids ----- */
    initReveal() {
        const items = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) { items.forEach(i => i.classList.add('in')); return; }
        document.querySelectorAll('.product-grid, .blog-grid, .contact-info').forEach(grid => {
            [...grid.children].forEach((c, i) => c.style.setProperty('--stagger', `${i * 0.12}s`));
        });
        const io = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        items.forEach(i => io.observe(i));
    }

    /* ----- Contact form (opens a prepared email – there is no backend) ----- */
    submitForm(e) {
        e.preventDefault();
        const form = e.target;
        let valid = true;
        form.querySelectorAll('.form-group').forEach(g => {
            const field = g.querySelector('input:not([type=checkbox]), select, textarea');
            if (!field) return;
            let err = g.querySelector('.field-error');
            if (!err) { err = document.createElement('div'); err.className = 'field-error'; g.appendChild(err); }
            const ok = field.checkValidity();
            g.classList.toggle('invalid', !ok);
            field.setAttribute('aria-invalid', String(!ok));
            if (!ok) { err.textContent = this.t(field.type === 'email' && field.value ? 'field-email' : 'field-required'); valid = false; }
        });
        if (!valid) { this.toast(this.t('toast-form-invalid'), 'error'); form.querySelector('.invalid input, .invalid select, .invalid textarea').focus(); return; }

        const d = Object.fromEntries(new FormData(form));
        const subject = form.subject.options[form.subject.selectedIndex].text;
        const body = `${d.message}\n\n— ${d.name}\n${d.email}${d.phone ? '\n' + d.phone : ''}${d.newsletter ? '\n[newsletter: da/yes]' : ''}`;
        window.location.href = `mailto:info@lunawebshop.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        this.toast(this.t('toast-form-ok'), 'success');
        form.reset();
    }

    /* ----- Events ----- */
    bind() {
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());
        document.getElementById('langToggle').addEventListener('click', () => this.toggleLanguage());
        this.el.cartToggle.addEventListener('click', () => this.openCart());
        this.el.cartClose.addEventListener('click', () => this.closeCart());
        document.getElementById('cartOverlay').addEventListener('click', () => this.closeCart());
        this.el.menuToggle.addEventListener('click', () => this.setMenu(!this.el.menu.classList.contains('open')));
        this.el.toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
        this.el.form.addEventListener('submit', e => this.submitForm(e));
        this.el.form.addEventListener('input', e => { const g = e.target.closest('.form-group'); if (g) g.classList.remove('invalid'); });

        this.el.checkout.addEventListener('click', () => {
            this.closeCart();
            this.toast(this.t('toast-checkout'));
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });

        document.querySelectorAll('.add-to-cart-btn').forEach(btn => btn.addEventListener('click', () => {
            this.addToCart(btn.closest('.product-card').dataset.id);
            const label = btn.querySelector('span');
            btn.classList.add('added'); label.dataset.i18n = 'added'; label.textContent = this.t('added');
            clearTimeout(btn._t);
            btn._t = setTimeout(() => { btn.classList.remove('added'); label.dataset.i18n = 'add-to-cart'; label.textContent = this.t('add-to-cart'); }, 1400);
        }));

        this.el.cartItems.addEventListener('click', e => {
            const b = e.target.closest('[data-act]');
            if (!b) return;
            if (b.dataset.act === 'inc') this.changeQty(b.dataset.id, 1);
            else if (b.dataset.act === 'dec') this.changeQty(b.dataset.id, -1);
            else this.removeFromCart(b.dataset.id);
        });

        document.querySelectorAll('.read-more').forEach(b => b.addEventListener('click', () => this.toast(this.t('toast-soon'))));

        // close mobile menu after choosing a link
        this.el.menu.addEventListener('click', e => { if (e.target.closest('a')) this.setMenu(false); });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') { this.closeCart(); this.setMenu(false); }
            if (e.key === 'Tab' && this.el.cartModal.classList.contains('active')) {   // keep focus inside the drawer
                const f = [...this.el.cartModal.querySelectorAll('button:not(:disabled), a[href]')];
                const first = f[0], last = f[f.length - 1];
                if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        });
        matchMedia('(min-width: 861px)').addEventListener('change', e => { if (e.matches) this.setMenu(false); });
    }
}

document.addEventListener('DOMContentLoaded', () => { window.lunaShop = new LunaShop(); });
