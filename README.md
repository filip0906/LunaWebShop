# LUNA WEB SHOP

Statična web trgovina (kozmetika, parfemi, Redken, Rhode) – čisti HTML/CSS/JS, bez build koraka.

## Struktura

```
├── index.html      # stranica (sav sadržaj)
├── styles.css      # stilovi, svijetla/tamna tema, animacije, responzivnost
├── script.js       # tema, HR/EN prijevodi, košarica, animacije, kontakt forma
├── images/         # fotografije proizvoda (optimizirane), favicon, logo wordmark, og-image
└── vercel.json
```

## Značajke

- Svijetla/tamna tema (prati sistemsku postavku, pamti izbor)
- Hrvatski/engleski jezik – prevedeni su i košarica, obavijesti i `alt`/`aria` tekstovi
- Košarica s količinama, spremljena u `localStorage`
- Animacije: hero, scroll reveal, hover efekti, marquee, progress bar; poštuje `prefers-reduced-motion`
- Mobilni izbornik, pristupačnost (skip link, fokus, aria, tipkovnica)

## Lokalno pokretanje

Otvorite `index.html` ili `npx http-server -p 3000`.

## Napomene

- Naplata (checkout) nije implementirana – gumb samo obavještava korisnika; potreban je backend/payment provider.
- Kontakt forma otvara email klijent (`mailto:`). Za slanje bez email klijenta povežite servis poput Formspree.
- Cijene i adrese/e-mailovi/društvene mreže u HTML-u su placeholderi – zamijenite pravima.

## Deploy

Vercel: uvezite repozitorij, build nije potreban.
