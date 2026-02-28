import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: 'Omni Solutions — Digital Marketing & Technology',
  description: 'Omni Solutions is a leading digital marketing and technology company offering innovative solutions including Mobile Apps, Web Development, AI Automation, Social Media Marketing, and more.',
  keywords: 'digital marketing, web development, mobile apps, AI automation, social media, SEO, technology solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
