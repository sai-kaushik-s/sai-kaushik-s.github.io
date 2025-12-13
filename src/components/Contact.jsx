import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

const Contact = () => {
    return (
        <section className="content-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title">
                    <ScrambleText text="Get in Touch" />
                </h1>
                <p className="section-subtitle">
                    <ScrambleText text="// Channels of communication" />
                </p>
                <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '3rem', textAlign: 'center' }}>
                    Open to opportunities in System Design, HPC, and Cryptography.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    <motion.a
                        href="mailto:saikaushik609@gmail.com"
                        className="glass-panel"
                        whileHover={{ scale: 1.02, x: 10 }}
                        style={{
                            padding: '1.5rem',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'crosshair',
                            borderLeft: '4px solid var(--accent-primary)'
                        }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'var(--bg-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            color: 'var(--accent-primary)'
                        }}>
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <h3 style={{ fontSize: '1.2rem', margin: 0, marginBottom: '0.2rem' }}>Email</h3>
                            <p style={{ fontFamily: 'var(--font-code)', margin: 0, color: 'var(--text-secondary)' }}>saikaushik609@gmail.com</p>
                            <p style={{ fontFamily: 'var(--font-code)', margin: 0, color: 'var(--text-secondary)' }}>ssaikaushik0802@gmail.com</p>
                        </div>
                    </motion.a>

                    <motion.div
                        className="glass-panel"
                        whileHover={{ scale: 1.02, x: 10 }}
                        style={{
                            padding: '1.5rem',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            cursor: 'crosshair',
                            borderLeft: '4px solid var(--accent-primary)'
                        }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'var(--bg-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            color: 'var(--accent-primary)'
                        }}>
                            <i className="fa fa-phone"></i>
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <h3 style={{ fontSize: '1.2rem', margin: 0, marginBottom: '0.2rem' }}>Phone</h3>
                            <p style={{ fontFamily: 'var(--font-code)', margin: 0, color: 'var(--text-secondary)' }}>+91 95917 16202</p>
                        </div>
                    </motion.div>

                    <motion.a
                        href="https://www.linkedin.com/in/sai-kaushik-s/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-panel"
                        whileHover={{ scale: 1.02, x: 10 }}
                        style={{
                            padding: '1.5rem',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'crosshair',
                            borderLeft: '4px solid var(--accent-primary)'
                        }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'var(--bg-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            color: 'var(--accent-primary)'
                        }}>
                            <i className="fa fa-linkedin"></i>
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <h3 style={{ fontSize: '1.2rem', margin: 0, marginBottom: '0.2rem' }}>LinkedIn</h3>
                            <p style={{ fontFamily: 'var(--font-code)', margin: 0, color: 'var(--text-secondary)' }}>Connect professionally</p>
                        </div>
                    </motion.a>

                    <motion.a
                        href="https://github.com/sai-kaushik-s/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-panel"
                        whileHover={{ scale: 1.02, x: 10 }}
                        style={{
                            padding: '1.5rem',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'crosshair',
                            borderLeft: '4px solid var(--accent-primary)'
                        }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'var(--bg-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            color: 'var(--accent-primary)'
                        }}>
                            <i className="fa fa-github"></i>
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <h3 style={{ fontSize: '1.2rem', margin: 0, marginBottom: '0.2rem' }}>GitHub</h3>
                            <p style={{ fontFamily: 'var(--font-code)', margin: 0, color: 'var(--text-secondary)' }}>Explore my code</p>
                        </div>
                    </motion.a>

                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
