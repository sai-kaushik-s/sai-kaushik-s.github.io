import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

const Education = () => {
    const educationData = [
        {
            date: <>July 2025 <br /> - <br /> Present</>,
            role: "Ph.D. in Computer Science and Engineering",
            institution: "Indian Institute of Technology, Delhi",
            grade: "CGPA: 8 / 10"
        },
        {
            date: <>July 2018 <br /> - <br /> May 2023</>,
            role: "B. Tech. and M. Tech. Computer Science and Engineering specialization in System Design",
            institution: "Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram, Chennai",
            grade: "CGPA: 8.79 / 10"
        },
        {
            date: <>July 2016 <br /> - <br /> April 2018</>,
            role: "Class 12 - Karnataka State Board",
            institution: "Vidya Vardhaka Sangha Sardar Patel Pre-University College, Bangalore",
            grade: "Percentage: 93.33%"
        },
        {
            date: <>July 2015 <br /> - <br /> May 2016</>,
            role: "Class 10 - CBSE Board",
            institution: "Narayana e-Techno School, Ramamurthy Nagar, Bangalore",
            grade: "CGPA: 10 / 10"
        }
    ];

    return (
        <section className="content-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title">
                    <ScrambleText text="Education" />
                </h1>
                <p className="section-subtitle">
                    <ScrambleText text="// Academic background" />
                </p>

                <div className="timeline-container" style={{ position: 'relative' }}>

                    <div className="timeline-line" style={{
                        position: 'absolute',
                        left: '165px',
                        top: '15px',
                        bottom: '0',
                        width: '2px',
                        background: 'var(--border-color)',
                        display: 'block'
                    }}></div>

                    {educationData.map((item, index) => (
                        <div key={index} style={{ display: 'flex', gap: '3rem', marginBottom: '4rem', position: 'relative' }}>

                            <div className="date-col" style={{
                                width: '150px',
                                textAlign: 'right',
                                flexShrink: 0,
                                paddingTop: '5px'
                            }}>
                                <span style={{
                                    fontFamily: 'var(--font-code)',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-tertiary)',
                                    fontWeight: 500
                                }}>
                                    {item.date}
                                </span>
                            </div>

                            <div style={{
                                position: 'absolute',
                                left: '160px',
                                top: '8px',
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: 'var(--accent-primary)',
                                border: '3px solid var(--bg-primary)',
                                zIndex: 2
                            }}></div>

                            <div style={{ flex: 1 }}>

                                <span className="mobile-date" style={{
                                    fontFamily: 'var(--font-code)',
                                    fontSize: '0.8rem',
                                    color: 'var(--accent-primary)',
                                    marginBottom: '0.5rem',
                                    display: 'none'
                                }}>
                                    {item.date}
                                </span>

                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700, lineHeight: 1.3 }}>{item.role}</h3>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontWeight: 500 }}>{item.institution}</h4>
                                <p style={{
                                    fontFamily: 'var(--font-code)',
                                    color: 'var(--text-secondary)',
                                    background: 'var(--bg-secondary)',
                                    display: 'inline-block',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.9rem'
                                }}>
                                    {item.grade}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <style>{`
                @media (max-width: 768px) {
                    .date-col { display: none !important; }
                    .mobile-date { display: block !important; }
                    .timeline-line { left: 19px !important; width: 1px !important; }
                    .timeline-container > div { gap: 1rem !important; padding-left: 3.5rem !important; }
                    .timeline-container > div > div:nth-child(2) { left: 14px !important; }
                    .timeline-container > div:last-child { margin-bottom: 0 !important; }
                }
            `}</style>
        </section>
    );
};

export default Education;
