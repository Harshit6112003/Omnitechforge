'use client';
import { useScrollAnimation } from '../components/useScrollAnimation';
import Counter from '../components/Counter';

const values = [
    { icon: '💡', title: 'Innovation First', desc: 'We stay at the forefront of technology, constantly exploring new tools and methodologies to deliver breakthrough solutions.' },
    { icon: '🤝', title: 'Client Partnership', desc: 'We believe in building lasting relationships. Your success is our success, and we work as an extension of your team.' },
    { icon: '🎯', title: 'Results Driven', desc: 'Every strategy we create is backed by data and focused on delivering measurable, tangible business outcomes.' },
    { icon: '🌍', title: 'Global Perspective', desc: 'With clients across the globe, we bring international best practices adapted to local market needs.' },
    { icon: '⚡', title: 'Agile & Adaptive', desc: 'Our agile methodology ensures rapid iteration, quick adaptation, and continuous improvement throughout every project.' },
    { icon: '🛡️', title: 'Trust & Transparency', desc: 'Open communication, honest timelines, and transparent processes form the foundation of how we operate.' },
];

const timeline = [
    { year: '2016', title: 'Company Founded', desc: 'Omni Solutions was established with a vision to bridge the gap between technology and business growth.' },
    { year: '2017', title: 'First 50 Clients', desc: 'Reached our first milestone of 50 active clients across digital marketing and web development.' },
    { year: '2019', title: 'Expanded to AI', desc: 'Launched our AI & Automation division, bringing intelligent solutions to small and medium businesses.' },
    { year: '2021', title: 'Global Reach', desc: 'Expanded operations internationally with clients in 15+ countries and a team of 50+ experts.' },
    { year: '2023', title: '500+ Projects', desc: 'Celebrated delivering over 500 successful projects with a 98% client satisfaction rate.' },
    { year: '2026', title: 'Industry Leader', desc: 'Recognized as an industry leader in digital transformation with multiple awards and accolades.' },
];

const team = [
    { name: 'Arjun Patel', role: 'Founder & CEO', initials: 'AP' },
    { name: 'Sneha Reddy', role: 'CTO', initials: 'SR' },
    { name: 'Vikram Singh', role: 'Head of Marketing', initials: 'VS' },
    { name: 'Anita Das', role: 'Lead Designer', initials: 'AD' },
];

export default function AboutPage() {
    const scrollRef = useScrollAnimation();

    return (
        <div ref={scrollRef}>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="section-label animate-on-scroll fade-up">About Us</span>
                    <h1 className="animate-on-scroll fade-up">
                        The Story Behind <span className="gradient-text">Omni Solutions</span>
                    </h1>
                    <p className="animate-on-scroll fade-up">
                        A decade of innovation, passion, and relentless pursuit of digital excellence.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section">
                <div className="container">
                    <div className="about-story">
                        <div className="animate-on-scroll fade-left">
                            <span className="section-label">Our Story</span>
                            <h2>Building the Future, <span className="gradient-text">One Solution</span> at a Time</h2>
                            <p style={{ marginTop: '1.5rem' }}>
                                Founded in 2016, Omni Solutions emerged from a simple yet powerful belief: that every business, regardless of size, deserves access to world-class digital solutions. What started as a small team of passionate technologists has grown into a comprehensive digital agency serving clients worldwide.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                Our journey has been defined by continuous innovation, unwavering commitment to quality, and a deep understanding of how technology can transform businesses. From crafting stunning mobile applications to deploying sophisticated AI automation systems, we bring the full spectrum of digital expertise under one roof.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                Today, with over 500 successful projects delivered and a 98% client satisfaction rate, we stand as a testament to what&apos;s possible when talent, technology, and passion come together. Our mission remains unchanged: to empower businesses to thrive in the digital age.
                            </p>
                        </div>
                        <div className="about-story-image animate-on-scroll fade-right float-slow">
                            <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80%' }}>
                                <rect x="50" y="40" width="300" height="200" rx="20" fill="rgba(0,180,216,0.05)" stroke="rgba(0,180,216,0.2)" strokeWidth="1" />
                                <circle cx="200" cy="120" r="40" fill="none" stroke="url(#aboutGrad)" strokeWidth="3" />
                                <path d="M185 120 L198 133 L218 108" stroke="#2dc653" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x="130" y="180" width="140" height="10" rx="5" fill="rgba(0,180,216,0.2)" />
                                <rect x="155" y="200" width="90" height="8" rx="4" fill="rgba(0,180,216,0.1)" />
                                <circle cx="100" cy="80" r="15" fill="rgba(0,180,216,0.08)" />
                                <circle cx="320" cy="180" r="20" fill="rgba(45,198,83,0.08)" />
                                <circle cx="80" cy="200" r="10" fill="rgba(108,99,255,0.08)" />
                                <defs>
                                    <linearGradient id="aboutGrad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#00b4d8" />
                                        <stop offset="100%" stopColor="#2dc653" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="stats-grid">
                        {[
                            { value: 500, suffix: '+', label: 'Projects Completed' },
                            { value: 98, suffix: '%', label: 'Client Satisfaction' },
                            { value: 50, suffix: '+', label: 'Team Members' },
                            { value: 15, suffix: '+', label: 'Countries Served' },
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

            {/* Core Values */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label animate-on-scroll fade-up">Our Values</span>
                        <h2 className="animate-on-scroll fade-up">What <span className="gradient-text">Defines Us</span></h2>
                        <p className="animate-on-scroll fade-up">
                            Our core values guide every decision, every project, and every interaction we have.
                        </p>
                    </div>
                    <div className="values-grid">
                        {values.map((v, i) => (
                            <div key={i} className={`value-card animate-on-scroll fade-up fade-up-delay-${(i % 3) + 1}`}>
                                <div className="value-icon">{v.icon}</div>
                                <h4>{v.title}</h4>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label animate-on-scroll fade-up">Our Journey</span>
                        <h2 className="animate-on-scroll fade-up">A Decade of <span className="gradient-text">Growth</span></h2>
                    </div>
                    <div className="timeline">
                        {timeline.map((item, i) => (
                            <div key={i} className={`timeline-item animate-on-scroll ${i % 2 === 0 ? 'fade-left' : 'fade-right'}`}>
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="timeline-year">{item.year}</div>
                                    <h4>{item.title}</h4>
                                    <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label animate-on-scroll fade-up">Our Team</span>
                        <h2 className="animate-on-scroll fade-up">Meet the <span className="gradient-text">Experts</span></h2>
                        <p className="animate-on-scroll fade-up">
                            Our talented team of professionals brings diverse expertise to every project.
                        </p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, i) => (
                            <div key={i} className={`team-card animate-on-scroll fade-up fade-up-delay-${i + 1}`}>
                                <div className="team-avatar">{member.initials}</div>
                                <h4>{member.name}</h4>
                                <span>{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
