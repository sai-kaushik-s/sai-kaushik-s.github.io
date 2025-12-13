import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["C", "C++", "Python", "Java", "Verilog", "SystemVerilog", "JavaScript", "C#", "Bash"]
        },
        {
            title: "Hardware / Embedded",
            skills: ["Computer Architecture", "FPGA", "Logic Design", "CUDA", "OpenMP", "MPI", "Microprocessors"]
        },
        {
            title: "Frameworks & Tools",
            skills: ["React", "Angular", "Django", "PyTorch", "TensorFlow", ".NET Core", "Docker", "Git", "Linux", "Azure"]
        }
    ];

    return (
        <section className="content-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title">Technical Skills</h1>
                <p className="section-subtitle">
                   // Technical Proficiency
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            whileHover={{ scale: 1.01 }}
                            style={{
                                padding: '1.5rem 2rem 2rem 2rem',
                                borderRadius: '12px',
                                borderLeft: `4px solid var(--accent-primary)`,
                                cursor: 'crosshair'
                            }}
                        >
                            <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 700, cursor: 'default' }}>
                                {category.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', cursor: 'default' }}>
                                {category.skills.map(skill => (
                                    <span key={skill} style={{
                                        fontFamily: 'var(--font-code)',
                                        fontSize: '0.95rem',
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: '8px',
                                        background: 'var(--bg-primary)',
                                        color: 'var(--text-primary)',
                                        border: '1px solid var(--border-color)',
                                        fontWeight: 500
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
