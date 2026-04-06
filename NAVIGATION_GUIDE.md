# ReisiMaailm - Navigatsiooni ja voo juhend

## Rakenduse ülevaade

ReisiMaailm on täielik turismifirma veebilehe prototüüp 1920x1080 resolutsiooniga, mis sisaldab kõiki nõutud funktsioone ja lehekülgi.

## Põhilised navigatsioonivood

### 1. Avalehe voog (Home → Search → Booking → Payment → My Trips)

**Algus**: Kasutaja jõuab avalehele `/`

**Tegevused**:
- Vaata populaarseid sihtkohti
- Sisesta otsinguparameetrid (sihtkoht, kuupäevad, külalised)
- Klõpsa "Otsi reise" nuppu või sihtkoha kaardil

**Järgmine**: Navigeeri otsingulehele `/search`

### 2. Otsingu voog

**Asukoht**: `/search`

**Tegevused**:
- Vaata saadaolevaid reisipakkumisi
- Lisa lemmikutesse (süda ikoon)
- Klõpsa "Broneeri" nuppu valitud reisi jaoks

**Järgmine**: Navigeeri broneerimislehele `/booking`

### 3. Broneeringu voog

**Asukoht**: `/booking`

**Tegevused**:
- Täida reisija andmed (eesnimi, perekonnanimi, e-post, telefon)
- Vali külaliste arv
- Lisa eritooted või soovidused
- Kontrolli broneeringu kokkuvõtet paremal küljel
- Klõpsa "Jätka maksmisele"

**Nõue**: Kasutaja peab olema sisse logitud

**Järgmine**: Navigeeri makselehele `/payment`

### 4. Makse voog

**Asukoht**: `/payment`

**Tegevused**:
- Sisesta kaardi andmed (number, nimi, kehtivusaeg, CVV)
- Kontrolli tellimuse kokkuvõtet
- Klõpsa "Maksa €XXX" nuppu
- Oota 2 sekundit töötluse simulatsiooni

**Tulemus**: Makse õnnestub ja kuvatakse teade

**Järgmine**: Navigeeri "Minu reisid" lehele `/my-trips`

### 5. Minu reisid voog

**Asukoht**: `/my-trips`

**Tegevused**:
- Vaata tulevasi broneeringuid
- Vaata möödunud reise (praegu tühi)
- Klõpsa "Vaata dokumente" nuppu
- Laadi piletid alla
- Vaata broneeringu üksikasju

**Järgmine**: Navigeeri dokumentide lehele `/documents`

### 6. Dokumentide voog

**Asukoht**: `/documents`

**Tegevused**:
- Vaata broneeringu ülevaadet
- Laadi alla üksikud dokumendid:
  - Lennupiletid
  - Hotelli kinnitus
  - Reisikindlustus
  - Reisiinfo
- Laadi alla kõik dokumendid korraga

**Tagasi**: Navigeeri tagasi "Minu reisid" lehele

### 7. Kontakti voog

**Asukoht**: `/contact`

**Tegevused**:
- Vaata kontaktinfot
- Täida kontaktivorm
- Saada sõnum
- Helista 24/7 hädaabile

## Autentimise voog

### Sisselogimine

**Käivitamine**: 
- Klõpsa "Logi sisse" nuppu headeris (desktop või mobile)
- Püüa broneerida ilma sisselogimata

**Tegevused**:
- Sisesta e-post ja salasõna
- Klõpsa "Logi sisse"
- Või klõpsa X või "Tühista" sulgemiseks

**Tulemused**:
- Edukas sisselogimine → näidatakse kasutajanime headeris
- Ebaõnnestunud → kuvatakse veateade

### Väljalogimine

**Tegevused**:
- Klõpsa "Logi välja" nuppu headeris
- Kasutaja suunatakse avalehele

## Header navigeerimine

### Desktop menüü (horisontaalne)

- **Logo**: Navigeeri avalehele
- **Avaleht**: → `/`
- **Sihtkohad**: → `/search`
- **Minu Reisid**: → `/my-trips`
- **Kontakt**: → `/contact`
- **Teema lüliti**: Vaheta light/dark mode vahel
- **Logi sisse/välja**: Autentimise tegevused

### Mobile menüü (hamburger)

- **Hamburger ikoon**: Ava/sulge menüü
- Samad navigatsiooni valikud kui desktopis
- Animeeritud avamine/sulgemine

## Chat widget

**Asukoht**: Fikseeritud paremal all nurgas

**Tegevused**:
- Klõpsa kollast vestluse nuppu
- Kirjuta sõnum
- Saada sõnum (Enter või nupp)
- Saa automaatne vastus
- Sulge X nupuga

## Veateated (Toasts)

**Asukoht**: Vasakul all nurgas

**Tüübid**:
- Eduteated (roheline): Makse õnnestus, sõnum saadetud
- Veateated (punane): Sisselogimine ebaõnnestus, valideerimise vead
- Infoteated: Dokumentide allalaadimine

**Sulgemine**: Automaatselt või X nupuga

## Tagasi nupud ja navigeerimine

Kõik lehekülgede sisemised lehed sisaldavad:
- **Tagasi nupp**: Vasakul üleval nurgas, viib eelmisele lehele
- **X nupp**: Dialoogides ja hüpikakendades
- **Tühista nupp**: Vormides, et katkestada tegevus

## Dark mode ja teema

**Lülitamine**: 
- Klõpsa kuu/päikese ikoonil headeris
- Teema salvestatakse automaatselt

**Värvid**:
- **Light mode**: Taust #dbfcff, Esmane #176787, Teisene #1d5159, Rõhutus #ffc800
- **Dark mode**: Taust #002124, Esmane #78c8e8, Teisene #a6dae2, Rõhutus #ffc800

## Responsive disain

**Desktop (1920x1080)**:
- Täielik horisontaalne menüü
- Kahe- või kolmeveeruline paigutus

**Tablet (768px - 1024px)**:
- Kohandatud grid paigutus
- Hamburger menüü

**Mobile (<768px)**:
- Ühe veeru paigutus
- Hamburger menüü
- Touch-friendly nupud

## Footer navigeerimine

**Sektsioonid**:
- Brand info ja sotsiaalmeedia lingid
- Kiirlingid (sama kui header)
- Informatsioon (Meist, Kasutustingimused, KKK)
- Kontaktinfo

## 404 leht

**Käivitamine**: Navigeeri olematule URL-ile

**Tegevused**:
- Klõpsa "Avalehele" → `/`
- Klõpsa "Sirvi reise" → `/search`

## Põhilised kasutajastsenaariume

### Stsenaarium 1: Uus kasutaja broneerib reisi

1. Külasta avalehte
2. Klõpsa "Logi sisse"
3. Logi sisse (demo: test@test.com / password)
4. Klõpsa sihtkoha kaardil või otsi
5. Vali reis ja klõpsa "Broneeri"
6. Täida andmed
7. Jätka maksmisele
8. Sisesta kaardi andmed
9. Kinnita makse
10. Vaata broneeringut "Minu reisid" lehel

### Stsenaarium 2: Olemasolev kasutaja vaatab dokumente

1. Logi sisse
2. Klõpsa "Minu Reisid"
3. Vali broneering
4. Klõpsa "Vaata dokumente"
5. Laadi alla vajalikud dokumendid

### Stsenaarium 3: Klient võtab ühendust

1. Klõpsa "Kontakt" menüüs
2. Täida kontaktivorm
3. Või kasuta chat widgetit paremal all

## Tehnilised märkused

- Rakendus kasutab React Router Data mode'd navigeerimiseks
- Kõik olekud salvestatakse React Context API-s
- Animatsioonid on loodud Motion (endine Framer Motion) abil
- Pildid kasutavad ImageWithFallback komponenti
- Veateated kasutavad Sonner teeki
