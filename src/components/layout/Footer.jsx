import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            background: 'linear-gradient(180deg, #0a0a0a 0%, #000 100%)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '3rem 2rem 2rem',
            marginTop: '4rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem'
            }}>
                {/* Brand Section */}
                <div>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span style={{ fontSize: '1.75rem' }}>🔗</span>
                        ConnectU
                    </h3>
                    <p style={{
                        color: '#a1a1aa',
                        fontSize: '0.9rem',
                        lineHeight: '1.6'
                    }}>
                        Find your perfect team for college events at NIT Patna. Build teams, discover teammates, and never miss an opportunity.
                    </p>
                </div>

                {/* Quick Links & Resources Row - Side by side on mobile */}
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'nowrap', minWidth: '280px' }}>
                    {/* Quick Links */}
                    <div style={{ flex: 1 }}>
                        <h4 style={{
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: '600',
                            marginBottom: '1rem'
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            <li><Link to="/app/events" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#3b82f6'} onMouseOut={e => e.target.style.color = '#a1a1aa'}>📅 Events</Link></li>
                            <li><Link to="/app/teams" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#3b82f6'} onMouseOut={e => e.target.style.color = '#a1a1aa'}>👥 Teams</Link></li>
                            <li><Link to="/app/discover" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#3b82f6'} onMouseOut={e => e.target.style.color = '#a1a1aa'}>🔍 Discover</Link></li>
                            <li><Link to="/app/profile" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#3b82f6'} onMouseOut={e => e.target.style.color = '#a1a1aa'}>👤 Profile</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div style={{ flex: 1 }}>
                        <h4 style={{
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: '600',
                            marginBottom: '1rem'
                        }}>
                            Resources
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            <li><Link to="/policy" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#3b82f6'} onMouseOut={e => e.target.style.color = '#a1a1aa'}>📜 Terms & Conditions</Link></li>
                            <li><a href="https://nitp.ac.in" target="_blank" rel="noopener noreferrer" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#3b82f6'} onMouseOut={e => e.target.style.color = '#a1a1aa'}>🏛️ NIT Patna</a></li>
                        </ul>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h4 style={{
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                    }}>
                        Connect With Us
                    </h4>
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '1rem'
                    }}>
                        <a href="mailto:connectu.nitp@gmail.com" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#27272a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }} onMouseOver={e => e.target.style.background = '#3b82f6'} onMouseOut={e => e.target.style.background = '#27272a'}>
                            ✉️
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#27272a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }} onMouseOver={e => e.target.style.background = '#e1306c'} onMouseOut={e => e.target.style.background = '#27272a'}>
                            📷
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#27272a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }} onMouseOver={e => e.target.style.background = '#0077b5'} onMouseOut={e => e.target.style.background = '#27272a'}>
                            💼
                        </a>
                    </div>
                    <p style={{ color: '#71717a', fontSize: '0.85rem' }}>
                        Made with ❤️ at NIT Patna
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                maxWidth: '1200px',
                margin: '2rem auto 0',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
            }}>
                <p style={{
                    color: '#71717a',
                    fontSize: '0.85rem',
                    margin: 0
                }}>
                    © {currentYear} ConnectU. All rights reserved.
                </p>
                <p style={{
                    color: 'white',
                    fontSize: '0.9rem',
                    margin: 0,
                    fontWeight: '600',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Made By Kartikey And Shivam ✨
                </p>
                <p style={{
                    color: '#71717a',
                    fontSize: '0.85rem',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <span style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        animation: 'pulse 2s infinite'
                    }}></span>
                    v2.0 • All systems operational
                </p>
            </div>
        </footer>
    );
};

export default Footer;
