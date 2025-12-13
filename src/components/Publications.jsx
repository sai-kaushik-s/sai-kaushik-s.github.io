import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
    return (
        <section className="content-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title">Publications</h1>
                <p className="section-subtitle">
                    // Research Papers & Conference Proceedings
                </p>

                <div className="glass-panel" style={{
                    padding: '3rem',
                    borderRadius: '12px',
                    borderLeft: '4px solid var(--accent-primary)',
                    textAlign: 'center',
                    cursor: 'crosshair'
                }}>
                    <i className="fa fa-flask" style={{ fontSize: '3rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem', display: 'block' }}></i>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>Work in Progress</h3>
                    <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-code)', fontSize: '1.1rem' }}>
                        <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
                            // 404: Paper not found (yet). Currently compiling ideas into a PDF.
                        </span>
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Publications;
