import React from 'react';
import FadeIn from './FadeIn';
import '../styles/kiranRaj.css';

export default function ContactSection() {
    return (
        <section className="kr-contact" id="contact">
            <div className="kr-contact-container">
                <div className="kr-contact-content">
                    <FadeIn>
                        <h2 className="kr-section-title">Get in Touch</h2>
                        <p className="kr-section-subtitle">
                            Dm for collaborations, or just to say hello.
                        </p>
                    </FadeIn>

                    <div className="kr-contact-grid">
                        <FadeIn className="kr-contact-info" delay={0.2} direction="right">
                            <div className="kr-contact-item">
                                <h3>Email</h3>
                                <a href="mailto:contact@kiranraj.com">kiranrajguitars@gmail.com</a>
                            </div>
                            <div className="kr-contact-item">
                                <h3>Socials</h3>
                                <a href="https://www.instagram.com/kiranraj_on_lead/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </div>
                            <div className="kr-contact-item">
                                <h3>Location</h3>
                                <p>Cochin, Kerala, India</p>
                            </div>
                        </FadeIn>

                        <FadeIn className="kr-contact-form" delay={0.4} direction="left">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="kr-form-group">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="kr-form-group">
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                                <div className="kr-form-group">
                                    <textarea placeholder="Your Message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="kr-btn-submit">Send Message</button>
                            </form>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
