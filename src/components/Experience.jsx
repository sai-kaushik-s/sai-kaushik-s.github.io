import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experienceData = [
        {
            date: <>July 2025 <br /> - <br /> Present</>,
            role: "Research Scholar",
            company: "IIT Delhi",
            details: [
                "Working with Dr. Rijurekha Sen, Dept. of CSE and Dr. Paarijaat Aditya, Nokia Bell Labs.",
                "Understanding Fully Homomorphic Encryption (FHE) and its applications in Machine Learning pipelines.",
            ],
            tech: ["FHE", "Machine Learning", "Rust"]
        },
        {
            date: <>July 2025 <br /> - <br /> Present</>,
            role: "Teaching Assistant",
            company: "IIT Delhi",
            details: [
                "Assisting Dr. Preeti Ranjan Panda with lab sessions and student evaluation in the course of Digital Logic and System Design (COL215).",
            ],
            tech: ["Teaching", "Academic Support"]
        },
        {
            date: <>Feb 2025 <br /> - <br /> June 2025</>,
            role: "Research Intern",
            company: "IIT Delhi",
            details: [
                "Worked with Dr. Kolin Paul from the department of Computer Science and Engineering.",
                "Worked on the improvement of the implementation of a high-performance logic synthesis tool for quantum circuits."
            ],
            tech: ["C++", "mockturtle", "caterpillar"]
        },
        {
            date: <>July 2023 <br /> - <br /> Aug 2024</>,
            role: "Associate Software Engineer",
            company: "KLA - Tencor Software",
            details: [
                "Acquired knowledge of semiconductor domain and its production cycle.",
                "Resolved bugs and feature requests in a 3-tier application.",
                "Executed performance and stress tests on Oracle DB CRUD using C++ libraries (Pro*C, Rogue Wave and OCCI).",
                "Designed and implemented UI elements for the application using C# WPF."
            ],
            tech: ["C++", "C#", "WPF", "Oracle DB", "Azure", "Docker", "RHEL", "Git"]
        },
        {
            date: <>Jan 2023 <br /> - <br /> June 2023</>,
            role: "Software Intern",
            company: "KLA - Tencor Software",
            details: [
                "Worked on a desktop application that collects logs from the system based on user-specified inputs.",
                "Redesigned a web application that generates the throughput report from user-uploaded logs."
            ],
            tech: ["Python", "PyQt6", "Django", "React", "Java", "Bootstrap"]
        },
        {
            date: <>May 2022 <br /> - <br /> Oct 2022</>,
            role: "Software Intern",
            company: "KLA - Tencor Software",
            details: [
                "Developed a web application that reduces the creation and deployment of VMs on VMWare servers.",
                "Reduced the deployment time of the VMs by 12x from 2 hours to 10 minutes."
            ],
            tech: [".NET Core", "Angular", "VMWare vSphere"]
        },
        {
            date: <>May 2021 <br /> - <br /> Dec 2021</>,
            role: "Research Intern",
            company: "Shakti Group, IIT Madras",
            details: [
                "Worked on QSPI and SDIO modules of the in-bred microprocessor."
            ],
            tech: ["BlueSpec SystemVerilog"]
        }
    ];

    return (
        <section className="content-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title">Experience</h1>
                <p className="section-subtitle">
                    // My professional journey
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

                    {experienceData.map((item, index) => (
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

                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem', fontWeight: 700 }}>{item.role}</h3>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: 500 }}>{item.company}</h4>

                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.2rem' }}>
                                    {item.details.map((detail, i) => (
                                        <li key={i} style={{
                                            marginBottom: '0.5rem',
                                            color: 'var(--text-secondary)',
                                            position: 'relative',
                                            paddingLeft: '1.5rem'
                                        }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent-secondary)' }}>▹</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {item.tech.map(t => (
                                        <span key={t} style={{
                                            fontSize: '0.75rem',
                                            background: 'var(--bg-secondary)',
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            color: 'var(--text-primary)',
                                            border: '1px solid var(--border-color)',
                                            fontWeight: 500
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
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

export default Experience;
