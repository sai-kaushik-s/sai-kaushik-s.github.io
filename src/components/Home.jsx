import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    // Resume URL for viewing/downloading
    const resumeUrl = "https://drive.google.com/file/d/1pk1CZFhTR3KvQ5StEC0RG6SGKhVy05Z1/view?usp=sharing";

    return (
        <section className="content-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title">About me</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontFamily: 'var(--font-code)' }}>
                    // Introduction and Bio
                </p>

                <div style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        I’m <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Kaushik</span>, a <strong>Research Scholar</strong> at <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>IIT Delhi</span>, working at the intersection of <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>High-Performance Computing</span>, <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>Computer Architecture</span>, and <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>Cryptography</span>.
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        Currently, I am investigating <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>Fully Homomorphic Encryption (FHE)</span> and its applications in secure Machine Learning pipelines under the guidance of <strong>Dr. Rijurekha Sen</strong> and <strong>Dr. Paarijaat Aditya</strong>.
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        With a robust background in scalable software engineering from <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>KLA</span> and a foundation from <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>IIITDM Kancheepuram</span>, I aim to bridge theoretical security with practical, high-performance implementations.
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        Beyond the terminal, I channel my creativity into writing a <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>sci-fi mystery novel</span>.
                    </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontFamily: 'var(--font-code)',
                            background: 'var(--accent-primary)',
                            color: '#fff',
                            fontSize: '1rem',
                            padding: '12px 30px',
                            borderRadius: '50px',
                            fontWeight: 600,
                            boxShadow: 'var(--shadow-lg)',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            textDecoration: 'none',
                            transition: 'transform 0.2s ease, background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <i className="fa fa-eye"></i> View Resume
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
