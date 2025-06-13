# 🎨 Anker Tattoo Studio — Frontend UI (React.js)

This is the frontend for the Anker Tattoo & Piercing Studio website, built with **React.js** and styled using **TailwindCSS**. It connects to the Flask backend and presents the site’s pages, portfolio, and admin dashboard.

---

## 🚀 Features

- Auth login / registration (JWT)
- Protected dashboard via AuthContext
- Dynamic routing via React Router
- Custom animated transitions
- Artist portfolio viewer
- Admin-only CRUD pages (in progress)

---

## 🛠️ Tech Stack

- React 18 (Vite)
- React Router DOM
- TailwindCSS
- Axios
- Context API for auth
- GSAP (scroll effects)
- LocomotiveScroll (optional UX)

---

## 📁 Structure

```
anker-website/
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
├── tsconfig.json
├── eslint.config.js
├── public/
├── node_modules/
├── README.md               
└── src/
    ├── api/               
    ├── assets/             
    ├── components/         
    │   ├── ArtistCard.jsx
    │   ├── ArtistGallery.jsx
    │   ├── ContactForm.jsx
    │   ├── FullscreenModel.jsx
    │   ├── Gallery.jsx
    │   ├── ImageCard.jsx
    │   ├── Layout.jsx
    │   ├── Logo.jsx
    │   └── Navigation/
    ├── context/            
    ├── effects/            
    ├── fonts/              
    ├── pages/              
    │   ├── About.jsx
    │   ├── Aktionen.jsx
    │   ├── Auth/
    │   │   ├── Login.jsx
    │   │   ├── SignUp.jsx
    │   │   └── Dashboard.jsx
    │   ├── Contact.jsx
    │   ├── Datenschutz.jsx
    │   ├── FAQ.jsx
    │   ├── Hero.jsx
    │   ├── Impressum.jsx
    │   ├── NotFound.jsx
    │   ├── Piercing.jsx
    │   ├── Tattoo.jsx
    │   ├── Team.jsx
    │   └── Welcome.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx

```

---

## 🧪 Run Locally

```bash
cd frontend
npm install
npm run dev
```

Runs on: `http://localhost:5173`

---

## 🌐 API Base URL

Update your axios base URL if needed:
```js
const api = axios.create({
  baseURL: 'http://localhost:5000'
});
```

---

## ✨ Routes

```
/home
/home/tattoo
/home/piercing
/home/team
/login
/signup
/dashboard   ← protected
```

> Artist Gallery: `/artists/:artist_id/gallery`

