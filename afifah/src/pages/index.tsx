import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Typed from 'typed.js';
import styles from '../styles/Portofolio.module.scss';
import Image from 'next/image';

const projectsData = [
  {
    title: "Music Recommendation System",
    category: "AI & Data Science",
    tag: "Projek Pribadi",
    subText: "ANN Approach (Annoy, FAISS, HNSW)",
    points: [
      "Membangun sistem rekomendasi musik berbasis similarity search menggunakan ANN.",
      "Evaluasi Recall@K, latency, dan indexing time.",
      "Analisis trade-off kecepatan vs akurasi."
    ],
    tools: "Streamlit, Python, Annoy, FAISS, HNSW",
    link: "https://github.com/afifahnisa17/music-similarity-search-approximate-nearest-neighbor"
  },
  {
    title: "SLM Document Intelligence System",
    category: "AI & Data Science",
    tag: "Projek Pribadi (On Progress)",
    subText: "SLM + RAG (Chroma, Embedding, Retrieval)",
    points: [
      "Membangun sistem document intelligence berbasis SLM untuk proses offline.",
      "Implementasi pipeline RAG: parsing PDF, chunking, dan semantic retrieval.",
      "Fitur Q&A berbasis konteks dokumen dengan privasi lokal (Ollama)."
    ],
    tools: "Python, Streamlit, Ollama, ChromaDB",
    link: "https://github.com/afifahnisa17/slm-document-intelligence"
  },
  {
    title: "Web Development with Laravel",
    category: "Software Eng",
    tag: "Tugas Akhir Semester 4",
    subText: "Posisi: Backend Developer",
    points: [
      "Merancang skema database relasional (ERD, normalisasi tabel).",
      "Implementasi backend menggunakan Laravel MVC.",
      "Integrasi database MySQL dengan sistem."
    ],
    tools: "Laravel, PHP, MySQL, SQL",
    link: "https://github.com/Syahru1/SIP-PREMARLO-2025"
  },
  {
    title: "FINALIS JTI - Sistem Bebas Tanggungan",
    category: "Software Eng",
    tag: "Tugas Akhir Semester 3",
    subText: "Posisi: Database Designer",
    points: [
      "Arsitektur database relasional kompleks dengan MS SQL Server.",
      "Optimalisasi kueri SQL untuk efisiensi pengambilan data.",
      "Normalisasi database untuk integritas data sistem."
    ],
    tools: "PHP Native, MS SQL Server, SQL",
    link: "https://github.com/andromeda-hebat/FINALIS-JTI-WEB"
  },
  {
    title: "MLOps & QA",
    category: "MLOps & QA",
    tag: "Projek Pribadi",
    subText: "Automated Testing & CI/CD Pipeline",
    points: [
      "Automated Testing menggunakan Pytest dan Streamlit AppTest.",
      "Merancang CI/CD Pipeline dengan GitHub Actions.",
      "Menerapkan Software Versioning dan Release Management."
    ],
    tools: "GitHub Actions, Pytest, Streamlit, Git",
    link: "https://github.com/afifahnisa17/music-similarity-search-approximate-nearest-neighbor"
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState('light');
  const [filter, setFilter] = useState('All');
  const typedTarget = useRef(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // LOGIC: Typed.js
  useEffect(() => {
    if (activeTab === 'home' && typedTarget.current) {
      const typed = new Typed(typedTarget.current, {
        strings: ['AI/ML Enthusiast', 'Data Analyst', 'Fullstack Developer'],
        typeSpeed: 60, backSpeed: 40, loop: true
      });
      return () => typed.destroy();
    }
  }, [activeTab]);

  // LOGIC: Custom Cursor
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className={styles.appShell} data-theme={theme}>
      <Head>
        <title>Afifah | Portfolio</title>
      </Head>

      {/* CUSTOM CURSOR */}
      <div 
        ref={cursorRef} 
        style={{
          position: 'fixed', top: 0, left: 0, width: '22px', height: '22px',
          border: '2px solid var(--accent)', borderRadius: '4px', // Kotak pixel style
          pointerEvents: 'none', zIndex: 99999, transition: 'transform 0.08s linear'
        }}
      />

      <aside className={styles.sidebar}>
        <div className={styles.logo}>AK</div>
        <nav className={styles.navLinks}>
          <button 
            onClick={() => setActiveTab('home')} 
            className={`${styles.navBtn} ${activeTab === 'home' ? styles.active : ''}`}
            data-label="HOME"
          >
            <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          </button>
          <button 
            onClick={() => setActiveTab('project')} 
            className={`${styles.navBtn} ${activeTab === 'project' ? styles.active : ''}`}
            data-label="PROJECTS"
          >
            <svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
          </button>
        </nav>
        
        <div className="flex flex-col gap-4 items-center">
  
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=afifahnisa041@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-all"
            data-label="GMAIL"
          >
            <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" alt="Gmail" width= {20}  height={20}  className="invert"/>
          </a>

          
          <a 
            href="https://linkedin.com/in/afifah-khoirunnisa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-all"
            data-label="LINKEDIN"
          >
            <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" width= {20} height={20} className="invert"/>
          </a>

          
          <a 
            href="https://github.com/afifahnisa17" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-all"
            data-label="GITHUB"
          >
            <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" width={20} height={20} className="invert"/>
          </a>
        </div>
      </aside>

      <main className={styles.mainWindow}>
        <button 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="absolute top-6 right-8 z-50 bg-black/10 p-2 rounded-full border border-black/10"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {activeTab === 'home' && (
          <section className="h-full flex flex-col justify-center">
            <div className={styles.badge}>HI, I AM</div>
            <h1 className={styles.pixelTitle}>AFIFAH KHOIRUNNISA</h1>
            <div className={styles.roleSwitcher}>
              <span ref={typedTarget}></span>
            </div>
            <p className={styles.summary}>
              Mahasiswi Teknik Informatika yang berfokus pada <b>AI/ML</b> dan <b>Data Science</b>. 
              Suka membangun sistem cerdas yang solutif dengan sentuhan desain yang bersih.
            </p>
            <div className={styles.techRow}>
              {['PYTHON', 'PYTORCH', 'SCIKIT-LEARN', 'SQL', 'LARAVEL', 'REACT'].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'project' && (
          <section className="pt-20">
            <h2 className={styles.pixelTitleSmall}>SELECTED_WORKS</h2>
            
            <div className={styles.projectFilter}>
              {['All', 'AI & Data Science', 'Software Eng', 'MLOps & QA'].map(f => (
                <button 
                  key={f} 
                  onClick={() => setFilter(f)}
                  className={filter === f ? styles.activeFilter : ''}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>

            <div className={styles.gridContainer}>
              {filteredProjects.map((proj, idx) => (
                <div key={idx} className={styles.projectCard}>
                  <div className={styles.cardHeader}>
                    <span>{proj.category}</span>
                    <span>{proj.tag}</span>
                  </div>
                  <h3>{proj.title}</h3>
                  <div className={styles.subText}>{proj.subText}</div>
                  <ul>
                    {proj.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                  <div className={styles.cardTools}>STACK: {proj.tools}</div>
                  <a href={proj.link} target="_blank" className={styles.cardLink}>VIEW_REPOSITORY ↗</a>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}