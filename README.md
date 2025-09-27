# LUNA WEB SHOP - Početna stranica

Ova web stranica je rekreira original Google Sites stranice za LUNA WEB SHOP kozmetičku trgovinu.

## 🌐 Live Demo
Stranica je dostupna na: [luna-web-shop.vercel.app](https://luna-web-shop.vercel.app)

## 📁 Struktura projekta

```
├── index.html          # Glavna HTML stranica
├── styles.css          # Glavni CSS stilovi  
├── script.js          # JavaScript funkcionalnost
├── images/            # Slike proizvoda (parfem1-3.jpg, redken1-3.jpg, rhode1-3.jpg, logo.png)
├── vercel.json        # Vercel konfiguracija
├── .gitignore         # Git ignore datoteka
└── README.md          # Ovaj file
```

## Značajke

- **Responzivni dizajn** - Stranica se prilagođava svim veličinama ekrana
- **Moderne animacije** - Smooth scrolling i fade-in efekti
- **Accessibility** - Podržava skip linkove i keyboard navigaciju
- **Stvarne slike proizvoda** - Koristi dodane slike iz images/ mape
- **3 glavne sekcije proizvoda:**
  - Parfemi - Mirisi koji ostavljaju dojam
  - Redken - Profesionalna njega kose  
  - Rhode by Hailey Bieber - Glamur u svakom potezu

## Kako koristiti

1. **Otvorite `index.html` u web browseru** za pregled stranice
2. **Slike su već dodane** - Stranica koristi slike iz `images/` mape
3. **Prilagodite sadržaj** prema potrebi uredivanjem HTML i CSS datoteka

## Dodane slike

Stranica sada koristi stvarne slike proizvoda:
- **Parfemi**: `parfem1.jpg`, `parfem2.jpg`, `parfem3.jpg`
- **Redken**: `redken1.jpg`, `redken2.jpg`, `redken3.jpg`  
- **Rhode**: `rhode1.jpg`, `rhode2.jpg`, `rhode3.jpg`

Slike se automatski prilagođavaju veličini i imaju smooth loading efekte.

## Tehnologije

- HTML5
- CSS3 (Grid, Flexbox, CSS Variables)
- Vanilla JavaScript
- Google Fonts (Poppins)

## Browser podrška

Stranica je testirana i kompatibilna s:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Prilagodbe

### Promjena boja
Glavne boje su definirane u CSS custom properties na vrhu `styles.css` datoteke.

### Dodavanje novih sekcija
Kopirajte postojeću `.product-section` strukturu i ažurirajte sadržaj.

### Mobilna navigacija
Uključena je osnovna mobilna navigacija s hamburger menijem za ekrane manje od 768px.

## Kontakt

Za dodatna pitanja ili pomoć oko customizacije stranice, kontaktirajte developera.

## 🚀 Deploy na Vercel

### Automatski deploy preko GitHub:
1. Push kod na GitHub repository
2. Idite na [vercel.com](https://vercel.com)
3. Prijavite se i kliknite "Import Project"  
4. Odaberite vaš GitHub repository
5. Vercel automatski detektira static site i deployira

### Direktni deploy:
```bash
npm i -g vercel
vercel --prod
```

### Deploy URL:
Stranica će biti dostupna na URL poput: `https://luna-web-shop-xyz.vercel.app`

## 🔧 Production optimizacije

- ✅ Optimizirane slike
- ✅ Security headers u vercel.json
- ✅ SEO optimizacija
- ✅ Responsive dizajn  
- ✅ Fast loading animacije
- ✅ Progressive enhancement