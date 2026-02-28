'use client';
import { useScrollAnimation } from './components/useScrollAnimation';
import Counter from './components/Counter';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const services = [
  { icon: '📱', title: 'Mobile Application', desc: 'Native & cross-platform mobile apps built with cutting-edge technology for iOS and Android platforms.' },
  { icon: '🌐', title: 'Web Development', desc: 'Modern, responsive websites and web applications that deliver exceptional digital experiences.' },
  { icon: '🤖', title: 'AI Automation', desc: 'Intelligent automation solutions powered by machine learning and artificial intelligence.' },
  { icon: '💼', title: 'LinkedIn Marketing', desc: 'Strategic LinkedIn campaigns to enhance your professional brand and generate quality B2B leads.' },
  { icon: '📣', title: 'Social Media', desc: 'Full-spectrum social media management to build your brand presence across all platforms.' },
  { icon: '🐦', title: 'Twitter / X Marketing', desc: 'Targeted Twitter strategies for maximum engagement, trend participation, and audience growth.' },
  { icon: '🎬', title: 'Video Editing', desc: 'Professional video production and editing services for ads, reels, and brand content.' },
  { icon: '📈', title: 'Digital Marketing', desc: 'Data-driven digital marketing strategies including SEO, PPC, email campaigns, and analytics.' },
];

const testimonials = [
  { name: 'Rajesh Kumar', role: 'CEO, TechStart India', text: 'Omni Solutions completely transformed our online presence. Their attention to detail and innovative approach resulted in a 300% increase in our digital engagement.', initials: 'RK' },
  { name: 'Priya Sharma', role: 'Founder, EcoVerse', text: 'Their AI automation solutions revolutionized our workflow and saved us countless hours. The team is professional, responsive, and truly understands modern technology.', initials: 'PS' },
  { name: 'David Mitchell', role: 'CTO, GlobalSync', text: 'Outstanding mobile app development! They delivered a polished, high-performance application that exceeded all our expectations and delighted our users.', initials: 'DM' },
];

const marqueeItems = [
  'Digital Marketing', 'Web Development', 'Mobile Apps', 'AI Solutions', 'Social Media',
  'Brand Strategy', 'SEO Optimization', 'Content Creation', 'Video Production', 'Analytics',
  'Digital Marketing', 'Web Development', 'Mobile Apps', 'AI Solutions', 'Social Media',
  'Brand Strategy', 'SEO Optimization', 'Content Creation', 'Video Production', 'Analytics',
];

export default function HomePage() {
  const scrollRef = useScrollAnimation();
  const [typedText, setTypedText] = useState('');
  const fullText = 'Offering all tech solutions under one roof';
  const typedRef = useRef(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', organization: '', location: '', subject: 'Homepage Inquiry', message: ''
  });
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setStatusMessage(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', organization: '', location: '', subject: 'Homepage Inquiry', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }
  };

  useEffect(() => {
    setTypedText(''); // Reset text on mount
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={scrollRef}>
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="parallax-bg">
          <div className="grid-pattern"></div>
        </div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>

        <div className="hero-particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${(i * 17) % 100}%`,
                top: `${(i * 31) % 100}%`,
                animationDelay: `${(i * 3) % 5}s`,
                animationDuration: `${6 + (i % 6)}s`
              }}
            />
          ))}
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content">
            <div className="hero-text">
              <span className="section-label animate-on-scroll fade-up">Welcome to Omni Solutions</span>
              <h1 className="animate-on-scroll fade-up">
                <span className="gradient-text">OMNI</span> SOLUTIONS
              </h1>
              <p className="animate-on-scroll fade-up" style={{ minHeight: '3rem' }}>
                {typedText}
                <span className="typing-cursor"></span>
              </p>
              <div className="hero-buttons animate-on-scroll fade-up">
                <Link href="/services" className="btn btn-primary">
                  Explore Services <span className="btn-arrow">→</span>
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Get Free Quote
                </Link>
              </div>
            </div>

            <div className="hero-visual animate-on-scroll scale-in">
              <div className="hero-image-wrapper float">
                <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                  {/* Monitor */}
                  <rect x="60" y="30" width="320" height="220" rx="16" fill="url(#monGrad)" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                  <rect x="75" y="48" width="290" height="185" rx="8" fill="#0d1117" />
                  {/* Screen content */}
                  <rect x="90" y="65" width="120" height="12" rx="3" fill="#00b4d8" opacity="0.7" />
                  <rect x="90" y="85" width="80" height="8" rx="2" fill="rgba(255,255,255,0.2)" />
                  <rect x="90" y="100" width="100" height="8" rx="2" fill="rgba(255,255,255,0.15)" />
                  {/* Chart bars */}
                  <rect x="90" y="180" width="25" height="40" rx="4" fill="#00b4d8" opacity="0.5" />
                  <rect x="125" y="160" width="25" height="60" rx="4" fill="#00b4d8" opacity="0.7" />
                  <rect x="160" y="140" width="25" height="80" rx="4" fill="#2dc653" opacity="0.8" />
                  <rect x="195" y="155" width="25" height="65" rx="4" fill="#00b4d8" opacity="0.6" />
                  <rect x="230" y="130" width="25" height="90" rx="4" fill="#2dc653" />
                  {/* Pie chart */}
                  <circle cx="310" cy="140" r="35" fill="none" stroke="#00b4d8" strokeWidth="8" strokeDasharray="80 140" opacity="0.7" />
                  <circle cx="310" cy="140" r="35" fill="none" stroke="#2dc653" strokeWidth="8" strokeDasharray="60 160" strokeDashoffset="-80" opacity="0.8" />
                  {/* Monitor stand */}
                  <rect x="195" y="250" width="50" height="20" rx="2" fill="url(#monGrad)" />
                  <rect x="170" y="268" width="100" height="8" rx="4" fill="url(#monGrad)" />
                  {/* Phone */}
                  <rect x="340" y="140" width="100" height="170" rx="14" fill="url(#phoneGrad)" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                  <rect x="352" y="158" width="76" height="130" rx="4" fill="#0d1117" />
                  <circle cx="390" cy="300" r="5" fill="rgba(255,255,255,0.1)" />
                  {/* Phone content */}
                  <rect x="362" y="170" width="56" height="8" rx="2" fill="#00b4d8" opacity="0.6" />
                  <rect x="362" y="185" width="40" height="5" rx="2" fill="rgba(255,255,255,0.2)" />
                  <circle cx="390" cy="225" r="22" fill="none" stroke="#2dc653" strokeWidth="4" opacity="0.6" />
                  <path d="M380 225 L387 232 L400 218" stroke="#2dc653" strokeWidth="2.5" fill="none" opacity="0.8" />
                  {/* Floating elements */}
                  <circle cx="50" cy="150" r="20" fill="#00b4d8" opacity="0.15" />
                  <circle cx="460" cy="80" r="15" fill="#2dc653" opacity="0.15" />
                  <circle cx="30" cy="300" r="25" fill="#6c63ff" opacity="0.1" />
                  <defs>
                    <linearGradient id="monGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1a1a2e" />
                      <stop offset="100%" stopColor="#16213e" />
                    </linearGradient>
                    <linearGradient id="phoneGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1a1a2e" />
                      <stop offset="100%" stopColor="#0f3460" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="marquee-section">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <div key={i} className="marquee-item">
              <span className="marquee-dot"></span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label animate-on-scroll fade-up">Who We Are</span>
            <h2 className="animate-on-scroll fade-up">About <span className="gradient-text">Omni Solutions</span></h2>
            <p className="animate-on-scroll fade-up">
              We are a forward-thinking digital marketing and technology company dedicated to providing innovative solutions that empower businesses to thrive in the digital age. With expertise spanning mobile development, AI automation, and full-stack marketing, we deliver results that matter.
            </p>
          </div>

          <div className="stats-grid">
            {[
              { value: 500, suffix: '+', label: 'Happy Clients' },
              { value: 98, suffix: '%', label: 'Client Satisfaction' },
              { value: 200, suffix: '+', label: 'Projects Delivered' },
              { value: 10, suffix: '+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className={`stat-item animate-on-scroll fade-up fade-up-delay-${i + 1}`}>
                <div className="stat-number">
                  <Counter value={stat.value} />{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label animate-on-scroll fade-up">What We Offer</span>
            <h2 className="animate-on-scroll fade-up">Our <span className="gradient-text">Services</span></h2>
            <p className="animate-on-scroll fade-up">
              Comprehensive digital solutions tailored to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className={`service-card animate-on-scroll fade-up fade-up-delay-${(i % 4) + 1}`}>
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label animate-on-scroll fade-up">Why Us</span>
            <h2 className="animate-on-scroll fade-up">Why Choose <span className="gradient-text">Omni Solutions</span></h2>
            <p className="animate-on-scroll fade-up">
              We combine technical excellence with creative thinking to deliver solutions that make a real difference.
            </p>
          </div>

          <div className="features-grid">
            {[
              { icon: '🎯', title: 'Strategic Approach', desc: 'Every project begins with a deep understanding of your goals, market, and audience to craft tailored strategies.' },
              { icon: '⚡', title: 'Cutting-Edge Tech', desc: 'We leverage the latest technologies including AI, machine learning, and modern frameworks to build future-proof solutions.' },
              { icon: '🛡️', title: 'Reliable & Secure', desc: 'Enterprise-grade security and reliability standards ensure your data and applications are always protected.' },
              { icon: '📊', title: 'Data-Driven Results', desc: 'Our analytics-first methodology ensures every decision is backed by real data and measurable outcomes.' },
              { icon: '🤝', title: 'Dedicated Support', desc: '24/7 expert support and proactive communication keep your projects running smoothly at all times.' },
              { icon: '🚀', title: 'Rapid Delivery', desc: 'Agile workflows and efficient processes mean faster time-to-market without compromising quality.' },
            ].map((feature, i) => (
              <div key={i} className={`feature-card animate-on-scroll fade-up fade-up-delay-${(i % 3) + 1}`}>
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label animate-on-scroll fade-up">Testimonials</span>
            <h2 className="animate-on-scroll fade-up">What Our <span className="gradient-text">Clients Say</span></h2>
            <p className="animate-on-scroll fade-up">
              Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped transform.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className={`testimonial-card animate-on-scroll fade-up fade-up-delay-${i + 1}`}>
                <div className="testimonial-quote">&ldquo;</div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div className="testimonial-author-info">
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT PREVIEW ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label animate-on-scroll fade-up">Get In Touch</span>
            <h2 className="animate-on-scroll fade-up">Start Your <span className="gradient-text">Project Today</span></h2>
            <p className="animate-on-scroll fade-up">
              Ready to transform your digital presence? Reach out and let&apos;s create something extraordinary together.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info animate-on-scroll fade-left">
              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <div>
                  <h5>Our Office</h5>
                  <p>123 Tech Park, Mumbai, Maharashtra, India</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">📧</div>
                <div>
                  <h5>Email Us</h5>
                  <p>info@omnisolutions.com</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <div>
                  <h5>Call Us</h5>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">🕐</div>
                <div>
                  <h5>Working Hours</h5>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
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
                  <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} disabled={status === 'sending'} />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} disabled={status === 'sending'} />
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
                <textarea name="message" placeholder="Tell us about your project..." rows="5" value={formData.message} onChange={handleChange} disabled={status === 'sending'}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Submit Inquiry'} <span className="btn-arrow">{status === 'sending' ? '⏳' : '→'}</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
