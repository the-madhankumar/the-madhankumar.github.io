const projects = {
  title: "Projects",
  projects: [
    {
      title: "MicroMorph AI",
      link: "https://micromorph.vercel.app/",
      github: "https://github.com/the-madhankumar/MicroMorphFrontend",
      subtitle: "Intelligent Embedded Microscopy Platform",
      techStack: ["Python", "PyTorch", "ReactJS", "Firebase", "ChromaDB"],
      description: [
        "Engineered a multi-model ensemble system (Mask R-CNN, YOLO, Random Forest) to identify and classify marine microorganisms in real-time.",
        "Developed a custom feature extraction engine computing 131+ biological parameters including geometric, Zernike, Hu moments, and texture features.",
        "Implemented embedding-based similarity learning using ChromaDB and FAISS to detect and store unknown organisms.",
        "Built a real-time monitoring dashboard in ReactJS to visualize ecological trends and water quality parameters.",
        "Integrated a reliability scoring system using statistical metrics such as mean confidence and standard error."
      ]
    },
    {
      title: "MedSureVault",
      github: "https://github.com/the-madhankumar/MedSureVault",
      subtitle: "Blockchain-based Prescription Tracking System",
      techStack: ["Solidity", "Ganache", "Web3.py", "FastAPI", "MySQL", "React.js"],
      description: [
        "Developed a secure QR-based prescription tracking system using Solidity and Ganache.",
        "Designed intuitive dashboards for doctors and patients for efficient prescription analytics.",
        "Built a scalable FastAPI backend supporting high-performance API handling.",
        "Created an end-to-end healthcare platform connecting doctors, patients, and pharmacies with blockchain validation."
      ]
    },
    {
      title: "MediAI",
      github: "https://github.com/the-madhankumar/MediAI",
      subtitle: "AI Medical Agent & Healthcare Analytics Platform",
      techStack: ["Python", "FastAPI", "RAG", "SQL Agents", "Firebase", "Flutter"],
      description: [
        "Architected a dual-agent system with a RAG agent for unstructured reports and a SQL agent for structured queries.",
        "Engineered hierarchical RAG pipelines including RAGTree, RAGEmbed, and GraphRetrieval.",
        "Developed high-precision extraction engines to convert unstructured lab reports into machine-readable data.",
        "Built a scalable FastAPI backend with multi-source DBMS integration for real-time healthcare insights."
      ]
    },
    {
      title: "CCSL",
      github: "https://github.com/the-madhankumar/CCSL",
      subtitle: "Cricket Card Strategy League",
      techStack: ["Python", "Q-learning", "Flutter", "Dart"],
      description: [
        "Developed a Q-learning based AI using the Bellman equation for adaptive strategies.",
        "Engineered a memory-efficient Q-table with 1,364 state-action pairs.",
        "Built a deterministic rule engine in Flutter for game logic including overs and innings.",
        "Optimized for offline-first gameplay with fast inference and smooth animations."
      ]
    }
  ]
};

export default projects;