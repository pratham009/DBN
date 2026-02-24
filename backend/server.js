require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Bar API is running 🍸' });
});

// Menu items
const menuData = {
  cocktails: [
    { id: 1, name: 'Midnight Noir', price: 14, description: 'Bourbon, black walnut bitters, activated charcoal, smoked honey', tag: 'Signature' },
    { id: 2, name: 'Crimson Reverie', price: 13, description: 'Blood orange gin, hibiscus syrup, prosecco, edible rose petals', tag: 'Popular' },
    { id: 3, name: 'The Phantom', price: 15, description: 'Mezcal, jalapeño infusion, pineapple, black salt rim', tag: 'Spicy' },
    { id: 4, name: 'Velvet Underground', price: 12, description: 'Vodka, elderflower, fresh blueberry, lavender foam', tag: 'Signature' },
    { id: 5, name: 'Golden Hour', price: 13, description: 'Rum, turmeric syrup, coconut cream, mango', tag: 'Tropical' },
    { id: 6, name: 'Dark Matter', price: 16, description: 'Aged dark rum, cold brew, vanilla, smoked caramel', tag: 'Bestseller' },
  ],
  spirits: [
    { id: 7, name: 'Whiskey Selection', price: 12, description: 'Curated single malts & blends from around the world', tag: 'Premium' },
    { id: 8, name: 'Gin Garden', price: 11, description: 'Botanical gins paired with artisan tonics', tag: 'Craft' },
    { id: 9, name: 'Mezcal Flight', price: 18, description: 'Three premium mezcals with orange & sal de gusano', tag: 'Experience' },
  ],
  bites: [
    { id: 10, name: 'Truffle Fries', price: 9, description: 'Hand-cut, black truffle oil, aged parmesan, chives', tag: 'Fan Fave' },
    { id: 11, name: 'Charcuterie Board', price: 22, description: 'Cured meats, artisan cheeses, pickles, honeycomb', tag: 'Share' },
    { id: 12, name: 'Spicy Tuna Bites', price: 14, description: 'Sesame-crusted, sriracha aioli, micro cilantro', tag: 'Fresh' },
  ]
};

app.get('/api/menu', (req, res) => {
  res.json(menuData);
});

// Reservation / Contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, date, time, guests, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Log the reservation (email sending requires SMTP config in .env)
  console.log('📅 New Reservation/Contact:');
  console.log({ name, email, phone, date, time, guests, message });

  // If nodemailer is configured, send email
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.BAR_EMAIL || process.env.SMTP_USER,
        subject: `New Reservation from ${name}`,
        html: `
          <h2>New Reservation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Date:</strong> ${date || 'N/A'}</p>
          <p><strong>Time:</strong> ${time || 'N/A'}</p>
          <p><strong>Guests:</strong> ${guests || 'N/A'}</p>
          <p><strong>Message:</strong> ${message || 'N/A'}</p>
        `
      });
    } catch (err) {
      console.error('Email sending failed:', err.message);
    }
  }

  res.json({ success: true, message: `Thank you ${name}! We'll confirm your reservation shortly.` });
});

// Events
const events = [
  { id: 1, title: 'Jazz Noir Nights', date: 'Every Friday', time: '9 PM', description: 'Live jazz quartet sets the mood for the weekend', image: '🎷' },
  { id: 2, title: 'Cocktail Masterclass', date: 'March 15', time: '7 PM', description: 'Learn the secrets behind our signature drinks', image: '🍹' },
  { id: 3, title: 'DJ & Beats', date: 'Every Saturday', time: '10 PM', description: 'Deep house and electronic beats till late', image: '🎧' },
  { id: 4, title: 'Wine & Dine Wednesday', date: 'Every Wednesday', time: '6 PM', description: 'Curated wine pairing dinner experience', image: '🍷' },
];

app.get('/api/events', (req, res) => {
  res.json(events);
});

app.listen(PORT, () => {
  console.log(`🍸 Bar API running at http://localhost:${PORT}`);
});
