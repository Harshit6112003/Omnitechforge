'use client';
import { useScrollAnimation } from '../components/useScrollAnimation';
import Counter from '../components/Counter';
import Link from 'next/link';

const testimonials = [
    { name: 'Rajesh Kumar', role: 'CEO, TechStart India', text: 'Omni Solutions completely transformed our online presence. Their strategic approach to digital marketing resulted in a 300% increase in our organic traffic and a 150% boost in lead generation within just six months.', initials: 'RK', rating: 5 },
    { name: 'Priya Sharma', role: 'Founder, EcoVerse', text: 'Their AI automation solutions revolutionized our workflow. What used to take our team hours now happens in minutes. The ROI on our investment has been extraordinary — we\'ve saved over 40 hours per week.', initials: 'PS', rating: 5 },
    { name: 'David Mitchell', role: 'CTO, GlobalSync', text: 'Outstanding mobile app development! The team delivered a polished, high-performance application that exceeded all our expectations. Our app store rating went from 3.2 to 4.8 stars after the redesign.', initials: 'DM', rating: 5 },
    { name: 'Aisha Patel', role: 'Marketing Director, NovaCorp', text: 'The social media management team at Omni is incredible. They grew our Instagram following from 5K to 100K in under a year with organic-first strategies. Our engagement rate is now industry-leading.', initials: 'AP', rating: 5 },
    { name: 'Marcus Johnson', role: 'VP Operations, CloudNine', text: 'We hired Omni for a complete digital transformation. From a new website to automated workflows to a revamped marketing strategy — they handled everything flawlessly. Our revenue grew 200% year-over-year.', initials: 'MJ', rating: 5 },
    { name: 'Sneha Reddy', role: 'Product Manager, FinEdge', text: 'The web application they built for us processes millions of transactions daily without a hiccup. Their technical expertise is world-class, and their project management is second to none.', initials: 'SR', rating: 5 },
    { name: 'Thomas Chen', role: 'Director, MediaPulse', text: 'Their video production team created a brand video that went viral — 5 million views in the first week! The quality of their creative work rivals agencies charging 10x their rates.', initials: 'TC', rating: 5 },
    { name: 'Kavita Nair', role: 'Founder, HealthBridge', text: 'Omni Solutions built our healthcare platform from the ground up. Their understanding of both technology and our industry-specific needs made them the perfect partner. We\'ve onboarded 10,000+ users in our first quarter.', initials: 'KN', rating: 5 },
    { name: 'James Wilson', role: 'CMO, RetailPro', text: 'The LinkedIn marketing campaign they ran for us generated over 500 qualified B2B leads in just three months. Their understanding of the platform and our target audience is exceptional.', initials: 'JW', rating: 5 },
];

const caseStudies = [
    { tag: 'E-Commerce', title: 'TechStart India — Complete Digital Overhaul', desc: 'Redesigned the entire digital presence including a new e-commerce platform, SEO strategy, and social media management.', metrics: [{ value: '300%', label: 'Traffic Increase' }, { value: '150%', label: 'Lead Growth' }, { value: '4.8★', label: 'App Rating' }] },
    { tag: 'Healthcare', title: 'HealthBridge — Platform Development', desc: 'Built a HIPAA-compliant healthcare platform from scratch with appointment scheduling, telemedicine, and patient management.', metrics: [{ value: '10K+', label: 'Users Onboarded' }, { value: '99.9%', label: 'Uptime' }, { value: '40%', label: 'Cost Reduction' }] },
    { tag: 'Finance', title: 'FinEdge — Transaction Processing System', desc: 'Developed a high-performance financial transaction processing system handling millions of daily transactions.', metrics: [{ value: '1M+', label: 'Daily Transactions' }, { value: '<50ms', label: 'Response Time' }, { value: '200%', label: 'Revenue Growth' }] },
    { tag: 'Media', title: 'MediaPulse — Viral Video Campaign', desc: 'Created and executed a viral video marketing campaign that garnered millions of views and massive brand awareness.', metrics: [{ value: '5M+', label: 'Video Views' }, { value: '50K+', label: 'New Followers' }, { value: '800%', label: 'Engagement Up' }] },
];

export default function TestimonialsPage() {
    const scrollRef = useScrollAnimation();

    return (
        <div ref={scrollRef}>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="section-label animate-on-scroll fade-up">Client Stories</span>
                    <h1 className="animate-on-scroll fade-up">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h1>
                    <p className="animate-on-scroll fade-up">
                        Real stories from real businesses. Discover how we&apos;ve helped companies transform their digital presence and achieve remarkable growth.
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="section" style={{ background: 'var(--bg-secondary)', padding: '60px 0' }}>
                <div className="container">
                    <div className="stats-grid">
                        {[
                            { value: 500, suffix: '+', label: 'Happy Clients' },
                            { value: 98, suffix: '%', label: 'Satisfaction Rate' },
                            { value: 50, suffix: '+', label: '5-Star Reviews' },
                            { value: 100, suffix: '%', label: 'Project Completion' },
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

            {/* Testimonials Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label animate-on-scroll fade-up">Testimonials</span>
                        <h2 className="animate-on-scroll fade-up">Voices of <span className="gradient-text">Success</span></h2>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className={`testimonial-card animate-on-scroll fade-up fade-up-delay-${(i % 3) + 1}`}>
                                <div className="testimonial-quote">&ldquo;</div>
                                <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
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

            {/* Case Studies */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label animate-on-scroll fade-up">Case Studies</span>
                        <h2 className="animate-on-scroll fade-up">Proven <span className="gradient-text">Results</span></h2>
                        <p className="animate-on-scroll fade-up">
                            Explore our detailed case studies showcasing the measurable impact we&apos;ve delivered.
                        </p>
                    </div>
                    <div className="case-studies-grid">
                        {caseStudies.map((cs, i) => (
                            <div key={i} className={`case-study-card animate-on-scroll fade-up fade-up-delay-${(i % 2) + 1}`}>
                                <span className="case-study-tag">{cs.tag}</span>
                                <h4>{cs.title}</h4>
                                <p>{cs.desc}</p>
                                <div className="case-study-metrics">
                                    {cs.metrics.map((m, j) => (
                                        <div key={j} className="case-study-metric">
                                            <strong>{m.value}</strong>
                                            <span>{m.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="section-label animate-on-scroll fade-up">Join Our Success Stories</span>
                    <h2 className="animate-on-scroll fade-up">
                        Ready to Become Our Next <span className="gradient-text">Success Story</span>?
                    </h2>
                    <p className="animate-on-scroll fade-up">
                        Let&apos;s discuss how we can help transform your business just like we&apos;ve done for hundreds of others.
                    </p>
                    <div className="animate-on-scroll fade-up" style={{ position: 'relative' }}>
                        <Link href="/contact" className="btn btn-primary">
                            Get Started Today <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
