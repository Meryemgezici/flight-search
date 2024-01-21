<h1>Flight Search Web Site</h1>
<h2>Kullanılan Teknolojiler</h2>

Aşağıda, projenin geliştirilmesinde kullanılan teknolojilere dair detayları bulabilirsiniz.

## Kullanılan Teknolojiler

### 1. [TailwindCSS](https://tailwindcss.com/)

Tasarım için TailwindCSS kullanıldı. Hızlı ve özelleştirilebilir bir CSS framework'üdür.

### 2. [React](https://reactjs.org/)

React kütüphanesi kullanılarak kullanıcı arayüzü oluşturuldu. Bileşen tabanlı bir yapı sunuldu.

### 3. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript):

Projenin temel programlama dili olarak kullanıldı.

### 4. [React Hooks](https://reactjs.org/docs/hooks-intro.html)

`useEffect`, `useDispatch`, ve `useState` gibi React hook'ları kullanıldı. Bileşenlerde state ve yaşam döngüsü işlemleri yönetildi.

### 5. [Redux Toolkit](https://redux-toolkit.js.org/)

State yönetimi için Redux Toolkit kullanıldı.

### 6. [React Router DOM](https://reactrouter.com/web/guides/quick-start)

Sayfa geçişleri için React Router DOM kullanıldı. Tek sayfa uygulamalarında sayfa yönetimini kolaylaştırmak için kullanıldı.

### 7. [React Icons](https://react-icons.github.io/react-icons/)

Uygulamada kullanılan ikonlar için React Icons kullanıldı.

### 8. [React-Toastify](https://fkhadra.github.io/react-toastify/introduction/)

Ekran üzerinde kullanıcıya bilgilendirme mesajları göstermek için React-Toastify kullanıldı.

### 9. [JSON Server](https://github.com/typicode/json-server)

API için JSON Server kullanıldı. Basit ve hızlı bir şekilde sahte bir API oluşturmak için kullanıldı.

### 10. [Vite](https://vitejs.dev/)

Projede hızlı ve modern bir geliştirme deneyimi sağlamak amacıyla Vite kullanıldı.

## Kullanılan Teknolojiler ve Sürümleri

- **@reduxjs/toolkit:** ^2.0.1
- **axios:** ^1.6.5
- **json-server:** ^1.0.0-alpha.21
- **react:** ^18.2.0
- **react-datepicker:** ^4.25.0
- **react-dom:** ^18.2.0
- **react-icons:** ^5.0.1
- **react-redux:** ^9.1.0
- **react-router-dom:** ^6.21.2
- **react-select:** ^5.8.0
- **react-toastify:** ^10.0.3

## Geliştirme Sürümleri (DevDependencies)

- **@types/react:** ^18.2.15
- **@types/react-dom:** ^18.2.7
- **@vitejs/plugin-react:** ^4.0.3
- **autoprefixer:** ^10.4.17
- **eslint:** ^8.45.0
- **eslint-plugin-react:** ^7.32.2
- **eslint-plugin-react-hooks:** ^4.6.0
- **eslint-plugin-react-refresh:** ^0.4.3
- **postcss:** ^8.4.33
- **tailwindcss:** ^3.4.1
- **vite:** ^4.4.5

## Scripts

- **dev:** `vite`
- **build:** `vite build`
- **lint:** `eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0`
- **preview:** `vite preview`
- **server:** `json-server --watch db.json --port 3040`

## Kurulum

1. **Depoyu İndirme (Clone):**
   ```bash
   git clone https://github.com/kullanici_adi/proje-adı.git
   ```

## Çalıştırma

1. **Proje Dizinine Girme:**

```bash
   cd proje-adı
```

2. **Bağımlılıkları Yükleme:**

```bash
   npm install
```

3. **JSON Server'ı Başlatma:**

```bash
   npm run server
```

4. **Uygulamayı Başlatma:**

```bash
   npm run dev
```

## Sayfalar

### 1. Homepage (Ana Sayfa)

Ana sayfa, kullanıcıya uçuş arama özelliklerini içeren bir arama kutusu sunar. Kullanıcı buradan kalkış havaalanı, varış havaalanı, kalkış tarihi, dönüş tarihi gibi bilgileri seçebilir. Ayrıca "Tek yönlü uçuş" seçeneği ile sadece gidiş uçuşları için arama yapabilir. Sayfa şu özelliklere sahiptir:

### 2. ListPage (Listeleme Sayfası)

Listeleme sayfası, kullanıcının yaptığı arama sorgusuna göre dönen uçuşları detaylı bir şekilde listeleyen bir sayfadır. Sayfa şu özelliklere sahiptir:

- **Sıralama Seçenekleri:** Kullanıcı, listelenen uçuşları kalkış saati, dönüş saati, uçuş uzunluğu veya fiyata göre sıralayabilir.
- **Yükleniyor Animasyonu:** Sunucudan cevap gelene kadar kullanıcıya "yükleniyor" animasyonu gösterilir.
- **Uçuş Detayları:** Listelenen uçuşlar kalkış saati, dönüş saati, uçuş uzunluğu, fiyat ve diğer detaylar ile gösterilir.

## Uygun Uçuşlar

### 1. Istanbul - Izmir (Flight ID: 1)

- **Departure:** Istanbul
- **Destination:** Izmir
- **Departure Code:** ist
- **Destination Code:** abd
- **Date:** 10/2/2024
- **Economic Price:** 500 TL
- **Business Price:** 2000 TL
- **Departure Time:** 18:30
- **Destination Time:** 21:30
- **Flight Duration:** 2 hours 0 minutes
- **Departure Flights:** Yes
- **Destination Flights:** No
- **Plane Type:** Boeing 737-800 - Narrow body

### 2. Istanbul - Izmir (Flight ID: 2)

- **Departure:** Istanbul
- **Destination:** Izmir
- **Departure Code:** ist
- **Destination Code:** abd
- **Date:** 10/2/2024
- **Economic Price:** 400 TL
- **Business Price:** 2000 TL
- **Departure Time:** 21:00
- **Destination Time:** 23:30
- **Flight Duration:** 2 hours 30 minutes
- **Departure Flights:** Yes
- **Destination Flights:** No
- **Plane Type:** Boeing 737-800 - Narrow body

### 3. Ankara - Izmir (Flight ID: 3)

- **Departure:** Ankara
- **Destination:** Izmir
- **Departure Code:** esb
- **Destination Code:** abd
- **Date:** 10/2/2024
- **Economic Price:** 400 TL
- **Business Price:** 2000 TL
- **Departure Time:** 08:00
- **Destination Time:** 20:30
- **Flight Duration:** 12 hours 30 minutes
- **Departure Flights:** Yes
- **Destination Flights:** No
- **Plane Type:** Boeing 737-800 - Narrow body

### 4. Ankara - Van (Flight ID: 4)

- **Departure:** Ankara
- **Destination:** Van
- **Departure Code:** esb
- **Destination Code:** van
- **Date:** 10/2/2024
- **Economic Price:** 400 TL
- **Business Price:** 2000 TL
- **Departure Time:** 13:00
- **Destination Time:** 14:30
- **Flight Duration:** 1 hour 30 minutes
- **Departure Flights:** Yes
- **Destination Flights:** No
- **Plane Type:** Boeing 737-800 - Narrow body

### 5. Istanbul - Izmir (Flight ID: 5)

- **Departure:** Istanbul
- **Destination:** Izmir
- **Departure Code:** ist
- **Destination Code:** abd
- **Date:** 11/2/2024
- **Economic Price:** 600 TL
- **Business Price:** 2000 TL
- **Departure Time:** 23:00
- **Destination Time:** 03:30
- **Flight Duration:** 4 hours 30 minutes
- **Departure Flights:** No
- **Destination Flights:** Yes
- **Plane Type:** Boeing 737-800 - Narrow body

### 6. Erzurum - Eskişehir (Flight ID: 6)

- **Departure:** Erzurum
- **Destination:** Eskişehir
- **Departure Code:** erz
- **Destination Code:** aoe
- **Date:** 10/3/2024
- **Economic Price:** 400 TL
- **Business Price:** 2000 TL
- **Departure Time:** 08:30
- **Destination Time:** 10:40
- **Flight Duration:** 2 hours 10 minutes
- **Departure Flights:** No
- **Destination Flights:** Yes
- **Plane Type:** Boeing 737-800 - Narrow body

### 7. Bursa - Konya (Flight ID: 7)

- **Departure:** Bursa
- **Destination:** Konya
- **Departure Code:** yei
- **Destination Code:** kya
- **Date:** 10/3/2024
- **Economic Price:** 700 TL
- **Business Price:** 2000 TL
- **Departure Time:** 19:00
- **Destination Time:** 23:30
- **Flight Duration:** 4 hours 30 minutes
- **Departure Flights:** No
- **Destination Flights:** Yes
- **Plane Type:** Boeing 737-800 - Narrow body

### 8. Ankara - Izmir (Flight ID: 8)

- **Departure:** Ankara
- **Destination:** Izmir
- **Departure Code:** esb
- **Destination Code:** abd
- **Date:** 10/2/2024
- **Economic Price:** 600 TL
- **Business Price:** 2000 TL
- **Departure Time:** 17:00
- **Destination Time:** 20:30
- **Flight Duration:** 3 hours 30 minutes
- **Departure Flights:** No
- **Destination Flights:** Yes
- **Plane Type:** Boeing 737-800 - Narrow body

<h3>Ekran Görüntüsü</h3>

 ![](project.gif)