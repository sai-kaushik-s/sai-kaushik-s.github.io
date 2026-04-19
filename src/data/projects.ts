export const projectsData = [
  {
    title: "Budgeted Maximum Weight Clique Solver",
    description: "High-performance, distributed C++ solver for the Budgeted Maximum Weight Clique (BMWC) problem. Leverages a parallelized Branch and Bound algorithm distributed across MPI processes, containerized via Docker for seamless serial and parallel execution.",
    tags: ["C++", "MPI", "Docker", "HPC", "Algorithms"],
    links: [
      { url: "https://github.com/sai-kaushik-s/max-weight-clique", label: "Source code ↗" }
    ]
  },
  {
    title: "Accelerating Compute-Intensive Kernels",
    description: "Accelerating kernels using x86 architecture features — AVX2, AVX-512, NUMA topology, and multi-core hierarchies. Includes production-grade GEMM and Smith-Waterman sequence alignment optimizations with measured speedups.",
    tags: ["C++", "HPC", "AVX-512", "OpenMP", "NUMA"],
    collaborators: [
      { name: "Yosep (Joseph) Ro ↗", linkedin: "https://www.linkedin.com/in/yosep-ro-25b047281/" }
    ],
    links: [
      { url: "https://github.com/sai-kaushik-s/Enhanced-GEMM", label: "GEMM ↗" },
      { url: "https://github.com/sai-kaushik-s/Enhanced-Smith-Waterman", label: "Smith-Waterman ↗" }
    ]
  },
  {
    title: "Gem5 Architecture Enhancements",
    description: "Implementation of advanced cache replacement policies (RRIP, SHiP) and branch predictors (TAGE, Perceptron) inside the Gem5 full-system simulator — with IPC benchmarking across SPEC workloads.",
    tags: ["C++", "Python", "gem5", "Microarchitecture"],
    links: [
      { url: "https://github.com/sai-kaushik-s/gem5-cache", label: "Cache policies ↗" }
    ]
  },
  {
    title: "Lorenz Attractor Visualization",
    description: "High-performance chaos system vizualization combining OpenMP task parallelism, MPI inter-node communication, and CUDA kernel execution — with real-time OpenGL rendering. Benchmarked strong and weak scaling.",
    tags: ["CUDA", "MPI", "OpenMP", "OpenGL", "C"],
    links: [
      { url: "https://github.com/sai-kaushik-s/Lorenz-Attractor-Parallelization-Algorithm", label: "Source code ↗" }
    ]
  },
  {
    title: "VLIW Processor Simulator",
    description: "32-bit 5-stage pipelined VLIW processor simulation with a custom assembly parser, register file monitoring, and pipeline hazard detection — implemented in Python/Verilog.",
    tags: ["Python", "Verilog", "Computer Architecture"],
    links: [
      { url: "https://github.com/sai-kaushik-s/VLIW-Architecture", label: "Source code ↗" }
    ]
  }
];