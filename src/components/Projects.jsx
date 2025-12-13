import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projectsData = [
        {
            title: "Accelerating Compute-Intensive Kernels",
            description: "Accelerating compute-intensive kernels using x86 architecture and features like AVX2, AVX-512, NUMA, multi core and cache heirarchies. Features an enhanced GEMM implementation for matrix operations and a systolic array-based Smith-Waterman algorithm for genomic sequence alignment.",
            tags: ["C++", "HPC", "Algorithms", "Parallelization"],
            links: [
                { url: "https://github.com/sai-kaushik-s/Enhanced-GEMM", label: "GEMM" },
                { url: "https://github.com/sai-kaushik-s/Enhanced-Smith-Waterman", label: "Smith-Waterman" }
            ],
            status: "Passing"
        },
        {
            title: "Gem5 Architecture Enhancements",
            description: "Implementation of advanced cache replacement policies (RRIP, SHiP) and branch predictors (TAGE, Perceptron) within the Gem5 simulator framework. Analyzed performance trade-offs using SPEC CPU benchmarks.",
            tags: ["C++", "Python", "gem5", "Computer Architecture"],
            links: [
                { url: "https://github.com/sai-kaushik-s/gem5-cache", label: "Cache Policies" },
                { url: "https://github.com/sai-kaushik-s/gem5-branch-predictors", label: "Branch Predictors" },
                { url: "https://github.com/sai-kaushik-s/gem5-matrix-multiplication", label: "Matrix Multiplication" }
            ],
            status: "Passing"
        },
        {
            title: "Lorenz Attractor Visualization",
            description: "High-performance visualization of the Lorenz Attractor chaotic system. Implements parallel computing algorithms using OpenMP, MPI, and CUDA C/C++ for efficient coordinate generation, rendered in real-time with OpenGL.",
            tags: ["C", "CUDA", "MPI", "OpenGL"],
            links: [{ url: "https://github.com/sai-kaushik-s/Lorenz-Attractor-Parallelization-Algorithm", label: "Source" }],
            status: "Passing"
        },
        {
            title: "VLIW Processor Simulator",
            description: "Comprehensive simulation of a 32-bit 5-stage pipelined VLIW processor. Integrates Python for assembly parsing and Verilog for hardware logic, enabling real-time monitoring of register file updates.",
            tags: ["Python", "Verilog", "Architecture"],
            links: [{ url: "https://github.com/sai-kaushik-s/VLIW-Architecture", label: "Source" }],
            status: "Passing"
        },
        {
            title: "Kerberos Key Distribution",
            description: "Robust multi-threaded GUI application implementing Kerberos authentication. Features secure client-server modules including encrypted chat, file transfer, and interactive quiz platforms.",
            tags: ["Python", "Security", "GUI"],
            links: [{ url: "https://github.com/sai-kaushik-s/Key-Distribution-Center/", label: "Source" }],
            status: "Passing"
        },
        {
            title: "Netlist Viewer & Simulator",
            description: "Automated EDA tool parsing structural Verilog files to visualize circuit topology. Generates directed graphs of logic gate interconnections for verification and analysis.",
            tags: ["Python", "EDA", "Algorithms"],
            links: [
                { url: "https://github.com/sai-kaushik-s/Verilog-Graph-Generator", label: ".v Gen" },
                { url: "https://github.com/sai-kaushik-s/NetList-Viewer-and-Simulator", label: ".vm Sim" }
            ],
            status: "Passing"
        },
        {
            title: "Sim File Generator",
            description: "Digital logic automation tool converting boolean expressions into .sim files. Streamlines verification workflows for Irsim by automatically handling expression parsing and file generation.",
            tags: ["Python", "Logic Design"],
            links: [{ url: "https://github.com/sai-kaushik-s/Sim-File-Generator", label: "Source" }],
            status: "Passing"
        },
    ];

    return (
        <section className="content-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title">Projects</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontFamily: 'var(--font-code)' }}>
                    // Selected works in HPC & Architecture
                </p>

                <div className="project-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            whileHover={{ scale: 1.02 }}
                            style={{
                                padding: '1.5rem',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                cursor: 'crosshair',
                                borderLeft: `4px solid var(--accent-secondary)`,
                                height: '100%',
                                minHeight: '200px'
                            }}
                        >
                            <div style={{ marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem' }}>
                                    <span style={{
                                        fontFamily: 'var(--font-code)',
                                        fontSize: '0.8rem',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        color: 'var(--accent-secondary)',
                                        border: '1px solid rgba(16, 185, 129, 0.2)'
                                    }}>
                                        ● {project.status}
                                    </span>

                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--text-tertiary)',
                                            fontFamily: 'var(--font-code)',
                                            background: 'var(--bg-primary)',
                                            padding: '4px 8px',
                                            borderRadius: '4px'
                                        }}>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{
                                borderTop: '1px solid var(--border-color)',
                                paddingTop: '1rem',
                                marginTop: 'auto',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                {project.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: 'var(--accent-primary)',
                                            fontWeight: '600',
                                            fontSize: '0.95rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '5px 10px',
                                            borderRadius: '8px',
                                            transition: 'background 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <i className="fa fa-github" style={{ fontSize: '1.1rem' }}></i> {link.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
