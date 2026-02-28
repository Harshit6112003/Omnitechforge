'use client';
import { useScrollAnimation } from '../components/useScrollAnimation';
import Link from 'next/link';

const services = [
    { icon: '📈', image: '/placeholder-service-1.jpg', title: 'Digital Marketing Services', desc: 'Comprehensive digital marketing strategies including SEO, SEM, PPC advertising, email marketing, and conversion rate optimization. We create data-driven campaigns that deliver measurable ROI and sustainable growth for your business.', features: ['Search Engine Optimization', 'Pay-Per-Click Advertising', 'Email Marketing Campaigns', 'Conversion Rate Optimization'] },
    { icon: '📱', image: '/placeholder-service-2.jpg', title: 'Mobile Application Development', desc: 'End-to-end mobile app development for iOS and Android platforms. From concept to deployment, we build intuitive, high-performance applications using React Native, Flutter, and native technologies.', features: ['iOS & Android Development', 'Cross-Platform Solutions', 'UI/UX Design', 'App Store Optimization'] },
    { icon: '🤖', image: '/placeholder-service-3.jpg', title: 'AI & Automation Solutions', desc: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation. Our AI solutions include chatbots, predictive analytics, and intelligent workflow automation.', features: ['Machine Learning Models', 'Chatbot Development', 'Predictive Analytics', 'Workflow Automation'] },
    { icon: '🌐', image: '/placeholder-service-4.jpg', title: 'Web Development', desc: 'Custom web applications and websites built with modern frameworks. We create responsive, SEO-optimized, and blazing-fast web experiences using Next.js, React, and cutting-edge technologies.', features: ['Custom Web Applications', 'E-Commerce Solutions', 'Progressive Web Apps', 'API Development'] },
    { icon: '💼', image: '/placeholder-service-5.jpg', title: 'LinkedIn Marketing', desc: 'Strategic LinkedIn marketing to establish thought leadership, generate high-quality B2B leads, and build a powerful professional network. We optimize profiles, create engaging content, and run targeted campaigns.', features: ['Profile Optimization', 'Content Strategy', 'Lead Generation', 'LinkedIn Ads Management'] },
    { icon: '📣', image: '/placeholder-service-6.jpg', title: 'Social Media Management', desc: 'Full-spectrum social media management across all major platforms. We craft compelling content, manage communities, and run paid campaigns to amplify your brand voice and drive engagement.', features: ['Content Creation', 'Community Management', 'Influencer Marketing', 'Social Analytics'] },
    { icon: '🎬', image: '/placeholder-service-7.jpg', title: 'Video Editing & Production', desc: 'Professional video production services for marketing, branding, and social media. From concept to final cut, we produce stunning video content that captures attention and tells your story.', features: ['Brand Videos', 'Social Media Reels', 'Motion Graphics', 'Video Advertising'] },
    { icon: '🐦', image: '/placeholder-service-8.jpg', title: 'Twitter / X Marketing', desc: 'Expert Twitter/X marketing strategies for maximum engagement and brand visibility. We manage your presence, participate in trending conversations, and build an engaged follower base.', features: ['Tweet Strategy', 'Hashtag Optimization', 'Twitter Ads', 'Audience Growth'] },
];

const process = [
    { step: 1, title: 'Discovery & Research', desc: 'We begin by understanding your business, goals, competition, and target audience through comprehensive research and analysis.' },
    { step: 2, title: 'Strategy & Planning', desc: 'Based on our findings, we craft a detailed roadmap with clear milestones, timelines, and measurable KPIs tailored to your objectives.' },
    { step: 3, title: 'Design & Development', desc: 'Our expert team brings the strategy to life through creative design and robust development using industry-leading technologies.' },
    { step: 4, title: 'Launch & Optimize', desc: 'We deploy your solution and continuously monitor, test, and optimize for peak performance and maximum results.' },
];

const techItems = [
    { icon: '⚛️', name: 'React' },
    { icon: '▲', name: 'Next.js' },
    { icon: '📱', name: 'React Native' },
    { icon: '🐍', name: 'Python' },
    { icon: '🧠', name: 'TensorFlow' },
    { icon: '☁️', name: 'AWS' },
    { icon: '🔥', name: 'Firebase' },
    { icon: '🐳', name: 'Docker' },
    { icon: '📊', name: 'Analytics' },
    { icon: '🎨', name: 'Figma' },
    { icon: '🗄️', name: 'PostgreSQL' },
    { icon: '🔄', name: 'GraphQL' },
];

export default function ServicesPage() {
    const scrollRef = useScrollAnimation();

    return (
        <div ref={scrollRef}>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="section-label animate-on-scroll fade-up">Our Services</span>
                    <h1 className="animate-on-scroll fade-up">
                        Comprehensive <span className="gradient-text">Digital Solutions</span>
                    </h1>
                    <p className="animate-on-scroll fade-up">
                        From strategy to execution, we provide end-to-end services to transform your digital presence and accelerate growth.
                    </p>
                </div>
            </section>

            {/* Detailed Services */}
            <section className="section">
                <div className="container">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className={`about-story animate-on-scroll fade-up`}
                            style={{
                                marginBottom: i < services.length - 1 ? '5rem' : 0,
                            }}
                        >
                            <div style={{ flex: 1, order: i % 2 === 0 ? 1 : 2 }} className="service-detail-text">
                                <span className="section-label">{service.title.split(' ')[0]} Service</span>
                                <h3>{service.title}</h3>
                                <p style={{ marginTop: '1rem' }}>{service.desc}</p>
                                <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {service.features.map((f, j) => (
                                        <li key={j} style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ color: 'var(--accent-2)', fontSize: '0.8rem' }}>✓</span> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="about-story-image" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', order: i % 2 === 0 ? 2 : 1 }}>
                                <div style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    aspectRatio: '4/3',
                                    background: 'var(--bg-card)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--border-subtle)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    boxShadow: 'var(--shadow-card)'
                                }}>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Image Placeholder</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label animate-on-scroll fade-up">Our Process</span>
                        <h2 className="animate-on-scroll fade-up">How We <span className="gradient-text">Work</span></h2>
                        <p className="animate-on-scroll fade-up">
                            Our proven 4-step process ensures consistent delivery of exceptional results.
                        </p>
                    </div>
                    <div className="process-grid">
                        {process.map((p, i) => (
                            <div key={i} className={`process-step animate-on-scroll fade-up fade-up-delay-${i + 1}`}>
                                <div className="process-number">{p.step}</div>
                                <h4>{p.title}</h4>
                                <p style={{ fontSize: '0.9rem' }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label animate-on-scroll fade-up">Technologies</span>
                        <h2 className="animate-on-scroll fade-up">Tools We <span className="gradient-text">Master</span></h2>
                        <p className="animate-on-scroll fade-up">
                            We use industry-leading technologies and frameworks to build robust, scalable solutions.
                        </p>
                    </div>
                    <div className="tech-grid">
                        {techItems.map((tech, i) => (
                            <div key={i} className={`tech-item animate-on-scroll scale-in fade-up-delay-${(i % 6) + 1}`}>
                                <span>{tech.icon}</span>
                                <p>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="section-label animate-on-scroll fade-up">Ready to Start?</span>
                    <h2 className="animate-on-scroll fade-up">
                        Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
                    </h2>
                    <p className="animate-on-scroll fade-up">
                        Get in touch today for a free consultation and discover how we can transform your business.
                    </p>
                    <div className="animate-on-scroll fade-up" style={{ position: 'relative' }}>
                        <Link href="/contact" className="btn btn-primary">
                            Start Your Project <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
