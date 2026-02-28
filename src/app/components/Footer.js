import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="navbar-logo">
                            <div className="logo-icon">O</div>
                            OMNI SOLUTIONS
                        </Link>
                        <p>
                            Your trusted partner for digital transformation. We deliver innovative solutions that drive business growth in the digital age.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="LinkedIn">in</a>
                            <a href="#" aria-label="Twitter">𝕏</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="Facebook">f</a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <Link href="/about">About Us</Link>
                        <Link href="/services">Services</Link>
                        {/* <Link href="/testimonials">Testimonials</Link> */}
                        <Link href="/contact">Contact Us</Link>
                    </div>

                    <div className="footer-column">
                        <h4>Services</h4>
                        <Link href="/services">Digital Marketing</Link>
                        <Link href="/services">Mobile Apps</Link>
                        <Link href="/services">Web Development</Link>
                        <Link href="/services">AI Automation</Link>
                    </div>

                    <div className="footer-column">
                        <h4>Contact</h4>
                        <a href="mailto:omnitech.forge@gmail.com">omnitech.forge@gmail.com</a>
                        <a href="tel:+919876543210">+91 98765 43210</a>
                        <a href="#">Delhi, India</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Omni Solutions. All rights reserved.</p>
                    <p>Crafted with precision & passion</p>
                </div>
            </div>
        </footer>
    );
}
