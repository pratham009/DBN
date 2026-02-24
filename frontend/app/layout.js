import './globals.css';

export const metadata = {
  title: 'Drinks By Nikhil',
  description: 'Handcrafted cocktails. Rare spirits.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}