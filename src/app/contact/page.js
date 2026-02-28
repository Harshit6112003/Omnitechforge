'use client';
import { useScrollAnimation } from '../components/useScrollAnimation';
import { useState } from 'react';

const faqs = [
    { q: 'What services does Omni Solutions offer?', a: 'We offer a comprehensive suite of digital services including Digital Marketing (SEO, PPC, Social Media), Mobile App Development (iOS & Android), Web Development, AI & Automation Solutions, Video Production, LinkedIn Marketing, and more. We provide end-to-end solutions under one roof.' },
    { q: 'How long does a typical project take?', a: 'Project timelines vary depending on scope and complexity. A standard website typically takes 4-8 weeks, mobile apps 8-16 weeks, and comprehensive digital marketing campaigns are ongoing engagements. We provide detailed timelines during our initial consultation.' },
    { q: 'What is your pricing model?', a: 'We offer flexible pricing models including fixed-price projects, monthly retainers, and hourly consulting. Our pricing is transparent and competitive. We provide detailed proposals after understanding your specific requirements during our free consultation.' },
    { q: 'Do you work with small businesses and startups?', a: 'Absolutely! We work with businesses of all sizes — from early-stage startups to large enterprises. We have tailored packages designed specifically for growing businesses that need professional digital solutions within their budget.' },
    { q: 'How do you measure the success of a project?', a: 'We establish clear KPIs at the start of every project and provide regular analytics reports. For marketing projects, we track metrics like traffic, leads, conversions, and ROI. For development projects, we measure performance, user engagement, and satisfaction scores.' },
    { q: 'Do you provide ongoing support after project completion?', a: 'Yes! We offer comprehensive post-launch support and maintenance packages. This includes bug fixes, performance monitoring, security updates, and feature enhancements. We also offer 24/7 support for enterprise clients.' },
];

export default function ContactPage() {
    const scrollRef = useScrollAnimation();
    const [openFaq, setOpenFaq] = useState(null);
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', organization: '', location: '', subject: '', message: ''
    });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [statusMessage, setStatusMessage] = useState('');

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setStatusMessage('');

        try {
            console.log('Submitting contact form...', formData);
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            console.log('API Response status:', res.status);
            const data = await res.json();
            console.log('API Response data:', data);

            if (res.ok) {
                setStatus('success');
                setStatusMessage(data.message || 'Message sent successfully!');
                setFormData({ name: '', email: '', phone: '', organization: '', location: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setStatusMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error('Contact form fetch error:', err);
            setStatus('error');
            setStatusMessage('Network error. Please check your connection and try again.');
        }
    };

    return (
        <div ref={scrollRef}>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="section-label animate-on-scroll fade-up">Contact Us</span>
                    <h1 className="animate-on-scroll fade-up">
                        Get In <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="animate-on-scroll fade-up">
                        Have a project in mind? Let&apos;s discuss how we can help bring your vision to life. Reach out for a free consultation.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="animate-on-scroll fade-left">
                            <span className="section-label">Reach Out</span>
                            <h3 style={{ marginBottom: '1rem' }}>Let&apos;s Start a <span className="gradient-text">Conversation</span></h3>
                            <p style={{ marginBottom: '2rem' }}>
                                Whether you need a complete digital transformation, a new mobile app, or a targeted marketing campaign — we&apos;re here to help. Fill out the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="contact-info">
                                <div className="contact-info-card">
                                    <div className="contact-info-icon">📍</div>
                                    <div>
                                        <h5>Office Address</h5>
                                        <p>123 Tech Park, Andheri East, Mumbai, Maharashtra 400069, India</p>
                                    </div>
                                </div>
                                <div className="contact-info-card">
                                    <div className="contact-info-icon">📧</div>
                                    <div>
                                        <h5>Email</h5>
                                        <p>info@omnisolutions.com</p>
                                        <p>support@omnisolutions.com</p>
                                    </div>
                                </div>
                                <div className="contact-info-card">
                                    <div className="contact-info-icon">📞</div>
                                    <div>
                                        <h5>Phone</h5>
                                        <p>+91 98765 43210</p>
                                        <p>+91 87654 32109</p>
                                    </div>
                                </div>
                                <div className="contact-info-card">
                                    <div className="contact-info-icon">🕐</div>
                                    <div>
                                        <h5>Business Hours</h5>
                                        <p>Monday - Friday: 9:00 AM - 7:00 PM IST</p>
                                        <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form animate-on-scroll fade-right" onSubmit={handleSubmit}>
                            {status === 'success' && (
                                <div className="form-status form-success">
                                    <span>✅</span> {statusMessage}
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="form-status form-error">
                                    <span>❌</span> {statusMessage}
                                </div>
                            )}
                            <div className="form-row">
                                <div className="form-group">
                                    <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} disabled={status === 'sending'} />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} disabled={status === 'sending'} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <input type="tel" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} disabled={status === 'sending'} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} disabled={status === 'sending'} />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} disabled={status === 'sending'} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" placeholder="Subject *" required value={formData.subject} onChange={handleChange} disabled={status === 'sending'} />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Tell us about your project, goals, and timeline..." rows="6" value={formData.message} onChange={handleChange} disabled={status === 'sending'}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'} <span className="btn-arrow">{status === 'sending' ? '⏳' : '→'}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map placeholder */}
            {/* <section className="section" style={{ background: 'var(--bg-secondary)', padding: '80px 0' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label animate-on-scroll fade-up">Find Us</span>
                        <h2 className="animate-on-scroll fade-up">Our <span className="gradient-text">Location</span></h2>
                    </div>
                    <div className="animate-on-scroll scale-in" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0, display: 'block', filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Omni Solutions Location"
                        ></iframe>
                    </div>
                </div>
            </section> */}

            {/* FAQ */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label animate-on-scroll fade-up">FAQ</span>
                        <h2 className="animate-on-scroll fade-up">Frequently Asked <span className="gradient-text">Questions</span></h2>
                        <p className="animate-on-scroll fade-up">
                            Find answers to common questions about our services, process, and pricing.
                        </p>
                    </div>

                    <div className="faq-list animate-on-scroll fade-up">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                                <button className="faq-question" onClick={() => toggleFaq(i)}>
                                    {faq.q}
                                    <span className="faq-icon">+</span>
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
