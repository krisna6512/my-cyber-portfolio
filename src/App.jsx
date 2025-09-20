import { useState, useEffect } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeYear, setActiveYear] = useState("2025"); // Tahun aktif di tab

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "journey", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // ✅ Update link & teks tombol sesuai platform
  const projects = [
    {
      title: "CTFlearn: Web Exploitation Challenges",
      description: "Menyelesaikan berbagai challenge web exploitation dasar di platform CTFlearn.",
      category: "Web Exploit",
      link: "https://ctflearn.com/user/CyberOzzie",
      buttonText: "→ View Profile on CTFlearn",
      completed: true,
    },
    {
      title: "TryHackMe: Web Fundamentals Path",
      description: "Belajar dasar-dasar keamanan web melalui jalur pembelajaran interaktif.",
      category: "All",
      link: "https://tryhackme.com/p/youokozzie",
      buttonText: "→ View Profile on TryHackMe",
      completed: false,
    },
    {
      title: "HTB: 'Startup' Challenge",
      description: "Challenge XSS dasar di Hack The Box.",
      category: "XSS",
      link: "https://app.hackthebox.com/profile/overview",
      buttonText: "→ View Profile on Hack The Box",
      completed: true,
    },
    {
      title: "picoCTF: Web Exploitation Category",
      description: "Menyelesaikan kategori Web Exploitation di kompetisi picoCTF.",
      category: "Web Exploit",
      link: "https://play.picoctf.org/users/cyberozzie12",
      buttonText: "→ View Profile on picoCTF",
      completed: true,
    },
  ];

  // ✅ Data per tahun — SEMUA TAHUN PUNYA PROGRESS + OPERATING SYSTEM
  const journeyData = {
    "2025": {
      progress: 40,
      goal: "Kuasai dasar web exploit: SQLi, XSS, CSRF, IDOR.",
      tools: ["Burp Suite", "sqlmap", "OWASP ZAP", "ffuf"],
      languages: ["Python", "JavaScript", "PHP"],
      operatingSystem: ["Windows", "Linux"], // ✅ BARU!
      certificates: ["PortSwigger Certificate", "TryHackMe Badge"],
    },
    "2026": {
      progress: 0,
      goal: "SSRF, SSTI, JWT Attacks. Ikut CTF tim & bug bounty pertama.",
      tools: ["Postman", "wfuzz", "JWT_Tool", "tplmap"],
      languages: ["Node.js", "Python Advanced"],
      operatingSystem: ["Windows", "Linux"], // ✅ BARU!
      certificates: ["eJPT", "HTB Web Badge"],
    },
    "2027": {
      progress: 0,
      goal: "WAF Bypass, RCE, Deserialization. Submit CVE / Bug Bounty Valid.",
      tools: ["Burp Suite Pro", "nuclei", "ysoserial", "WAFW00F"],
      languages: ["Java", "PHP Deserialization"],
      operatingSystem: ["Windows", "Linux"], // ✅ BARU!
      certificates: ["OSWE", "Burp Certified Practitioner"],
    },
    "2028": {
      progress: 0,
      goal: "Jadi Web Security Specialist di perusahaan tech global.",
      tools: ["Semua tools di atas + custom script"],
      languages: ["Python Expert", "Go", "Bash Advanced"],
      operatingSystem: ["Windows", "Linux"], // ✅ BARU!
      certificates: ["OSWE Advanced", "CISSP"],
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-green-800/30">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">krisna.exe</h1>
          <div className="hidden md:flex gap-6">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "journey", label: "Journey" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition hover:text-green-400 ${
                  activeSection === item.id ? "text-green-400" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden px-6 py-3 border-t border-green-800/20">
          <div className="flex justify-center gap-4">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "journey", label: "Journey" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-medium transition hover:text-green-400 ${
                  activeSection === item.id ? "text-green-400" : "text-gray-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Krisna Mandala Putra</h1>
          <p className="text-lg md:text-xl text-green-400 mb-2">CyberSecurity Analyst</p>
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Currently focused on Web Exploitation, learning more about Cyber Security through CTF, and exploring defensive techniques. Always curious and excited to keep growing.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-6 bg-black/50 border-t border-green-800/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="bg-black/80 p-6 md:p-8 rounded-xl border border-green-800/30">
            <p className="text-base md:text-lg leading-relaxed">
              Aku mulai perjalanan ini di tahun 2025, karena aku penasaran: bagaimana hacker bisa masuk ke sistem lewat celah kecil di website? Aku ingin paham cara mereka berpikir — bukan untuk merusak, tapi untuk memperbaiki.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              Fokus utamaku: <strong className="text-green-400">Web Exploitation</strong> — memecahkan challenge CTF, belajar tools seperti Burp Suite & sqlmap, dan mendokumentasikan setiap langkah di GitHub.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section — Dengan Tab Navigasi Tahunan */}
      <section id="journey" className="py-12 px-6 border-t border-green-800/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">My Journey — Year by Year</h2>

          {/* Tab Navigasi Tahunan */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(journeyData).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeYear === year
                    ? "bg-green-900/50 text-green-400 border-b-2 border-green-400"
                    : "text-gray-400 hover:text-green-400 hover:bg-green-900/20"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Konten Tahun Aktif */}
          <div className="bg-black/80 p-6 md:p-8 rounded-xl border border-green-800/30">
            <div className="space-y-6">
              {/* Progress bar */}
              <div>
                <h4 className="font-semibold text-green-400 mb-2">📈 Progress</h4>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{journeyData[activeYear].progress}%</span>
                </div>
                <div className="w-full bg-gray-900 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${journeyData[activeYear].progress}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-400 mb-2">🎯 Goal</h4>
                <p className="text-gray-300">{journeyData[activeYear].goal}</p>
              </div>

              <div>
                <h4 className="font-semibold text-green-400 mb-2">🛠️ Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {journeyData[activeYear].tools.map((tool, i) => (
                    <span key={i} className="bg-green-900/20 px-3 py-1 rounded text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-400 mb-2">💻 Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {journeyData[activeYear].languages.map((lang, i) => (
                    <span key={i} className="bg-green-900/20 px-3 py-1 rounded text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* ✅ KATEGORI BARU: OPERATING SYSTEM */}
              <div>
                <h4 className="font-semibold text-green-400 mb-2">🖥️ Operating System</h4>
                <div className="flex flex-wrap gap-2">
                  {journeyData[activeYear].operatingSystem.map((os, i) => (
                    <span key={i} className="bg-green-900/20 px-3 py-1 rounded text-sm">
                      {os}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-400 mb-2">🏅 Certificates</h4>
                <div className="flex flex-wrap gap-2">
                  {journeyData[activeYear].certificates.map((cert, i) => (
                    <span key={i} className="bg-green-900/20 px-3 py-1 rounded text-sm">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section — DENGAN LINK PROFIL PLATFORM */}
      <section id="projects" className="py-12 px-6 bg-black/50 border-t border-green-800/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Projects & CTF Profiles</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-5 md:p-6 bg-black/80 rounded-xl border border-green-800/30 hover:border-green-500 transition"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-300 mt-2 text-sm md:text-base">{project.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-400`}>
                    [{project.category}]
                  </span>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 mt-4 inline-block text-sm md:text-base"
                  >
                    {project.buttonText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section — DENGAN IKON INSTAGRAM RESMI */}
      <section id="contact" className="py-12 px-6 border-t border-green-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Let’s Connect</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a
              href="https://github.com/krisna6512"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="mailto:youokozzie@gmail.com"
              className="text-gray-300 hover:text-green-400 transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
            <a
              href="https://www.instagram.com/krsnaa.ptraa?igsh=d2lzZzFpM2preHc="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition flex items-center gap-2"
            >
              {/* Ikon Instagram Resmi */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
          <p className="text-xs md:text-sm text-gray-500">
            Website ini adalah komitmen publikku — aku akan update setiap bulan.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-black border-t border-green-800/20 text-center text-gray-500 text-xs md:text-sm">
        <p>Built with React + Vite • © 2025 Krisna Mandala Putra</p>
      </footer>
    </div>
  );
}