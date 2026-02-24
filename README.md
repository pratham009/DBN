# 🍸 NOIR — Craft Cocktail Bar Website

A full-stack bar website with Next.js frontend and Node.js backend.

## Project Structure

```
bar-website/
├── frontend/   → Next.js app (port 3000)
└── backend/    → Node.js/Express API (port 5000)
```

---

## 🚀 Quick Start

### 1. Start the Backend

```bash
cd backend
npm install
cp .env.example .env   # edit with your details
npm run dev            # or: npm start
```

Backend runs at: **http://localhost:5000**

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: **http://localhost:3000**

---

## ⚙️ Configuration

### Frontend (`frontend/next.config.js`)
Update these values:
```js
NEXT_PUBLIC_WHATSAPP: '+1234567890',          // Your WhatsApp number
NEXT_PUBLIC_INSTAGRAM: 'https://instagram.com/yourhandle',
NEXT_PUBLIC_EMAIL: 'your@email.com',
```

### Backend (`backend/.env`)
```env
PORT=5000
SMTP_USER=your_gmail@gmail.com   # Optional for email notifications
SMTP_PASS=your_app_password
BAR_EMAIL=owner@yourbar.com
```

---

## 🌐 API Endpoints

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | /api/health    | Health check             |
| GET    | /api/menu      | All menu items           |
| GET    | /api/events    | Upcoming events          |
| POST   | /api/contact   | Submit reservation/form  |

---

## ✨ Features

- **Hero** — Animated landing with shimmer text & floating visuals
- **Story** — About section with decorative layout  
- **Menu** — Tabbed cocktail/spirits/bites menu (fetched from API)
- **Events** — Dynamic events grid (fetched from API)
- **Reservations** — Form with backend submission & optional email
- **Footer** — Full links with social icons
- **Custom cursor** — Gold dot cursor with smooth ring follower
- **Social Links** — WhatsApp, Instagram, Email in navbar & footer
- **Responsive** — Works on mobile & desktop

---

## 🎨 Design System

| Color   | Hex       | Use              |
|---------|-----------|------------------|
| Noir    | `#0a0806` | Background       |
| Gold    | `#d4a853` | Accents/headings |
| Ember   | `#c8602a` | CTA buttons      |
| Cream   | `#f0e6d3` | Body text        |
| Ash     | `#2a2420` | Cards/borders    |

Fonts: **Cormorant Garamond** (display) + **DM Sans** (body)
