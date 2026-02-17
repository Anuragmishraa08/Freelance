import { useEffect, useRef, useState } from "react";

const strengths = [
  "Sports journalism and long-form storytelling",
  "Editorial research and narrative structuring",
  "Media communication and audience-focused writing",
  "Aviation-informed analytical perspective",
];

const featuredWork = [
  {
    title: "Cricket Classics",
    type: "Sports Writing Platform",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcricketclassics.wordpress.com%2F?w=1200",
    description:
      "Published cricket narratives that combine match context, player perspective, and clear storytelling.",
    link: "https://cricketclassics.wordpress.com/",
  },
  {
    title: "Professional CV Profile",
    type: "Career Portfolio",
    image: "/img/atul-portrait.png",
    description:
      "A structured profile presenting education, cross-domain strengths, and communication capabilities.",
    link: "/cv.pdf",
  },
  {
    title: "LinkedIn Professional Presence",
    type: "Networking and Opportunities",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flinkedin.com%2Fin%2Fatul-ranjith%2F?w=1200",
    description:
      "Professional profile for collaboration, networking, and career opportunities in media and communication.",
    link: "https://linkedin.com/in/atul-ranjith",
  },
];

const journey = [
  {
    title: "MA Media and Communication",
    institution: "MAHE Dubai",
    period: "Current",
    detail:
      "Strengthening journalism, media analysis, and digital communication skills.",
  },
  {
    title: "PG Air Transport Management",
    institution: "De Montfort University, UK",
    period: "Completed",
    detail:
      "Built a strong foundation in structured analysis, operations, and management.",
  },
  {
    title: "Bachelor's in Aviation",
    institution: "Jain University, Bangalore",
    period: "Completed",
    detail: "Established core academic grounding in aviation and communication.",
  },
];

function App() {
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timelineActive, setTimelineActive] = useState(false);
  const mainRef = useRef(null);
  const journeyRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(savedTheme ? savedTheme === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    const reveals = mainRef.current?.querySelectorAll(".reveal") || [];
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (top / height) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const node = journeyRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimelineActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "theme-dark" : "theme-light"
      }`}
    >
      <header
        className={`site-header sticky top-0 z-40 backdrop-blur-xl ${
          isDark ? "site-header-dark" : "site-header-light"
        }`}
      >
        <div className="progress-wrap">
          <span className="progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>
        <nav className="mx-auto max-w-6xl px-5 md:px-8 py-3 flex items-center justify-between">
          <a
            href="#home"
            className={`font-semibold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            Atul Ranjith
          </a>
          <div
            className={`hidden md:flex items-center gap-6 text-sm ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <a href="#about" className="nav-link-inline">
              About
            </a>
            <a href="#work" className="nav-link-inline">
              Work
            </a>
            <a href="#journey" className="nav-link-inline">
              Journey
            </a>
            <a href="#contact" className="nav-link-inline">
              Contact
            </a>
          </div>
          <button
            className="toggle-btn"
            onClick={() => setIsDark((v) => !v)}
            aria-label="Toggle theme"
          >
            {isDark ? "Dark" : "Light"}
          </button>
        </nav>
        <div className="md:hidden mobile-links-wrap">
          <div className="mobile-links">
            <a href="#about" className="nav-link-inline">
              About
            </a>
            <a href="#work" className="nav-link-inline">
              Work
            </a>
            <a href="#journey" className="nav-link-inline">
              Journey
            </a>
            <a href="#contact" className="nav-link-inline">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main ref={mainRef} className="mx-auto max-w-6xl px-5 md:px-8 py-8 sm:py-10 md:py-16">
        <section
          id="home"
          className="reveal grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10 items-center"
        >
          <div className="hero-intro">
            <p className="badge hero-item hero-item-1">Available for media opportunities</p>
            <h1 className="hero-item hero-item-2 mt-5 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Sports Media and
              <span className="text-sky-300"> Aviation Professional</span>
            </h1>
            <p className="hero-item hero-item-3 mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I create engaging sports narratives backed by research and
              analytical thinking. My academic journey across aviation and media
              helps me communicate stories with both clarity and depth.
            </p>
            <div className="hero-item hero-item-4 mt-7 flex flex-wrap gap-3">
              <a href="/cv.pdf" className="btn btn-primary">
                Download CV
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="profile-card reveal profile-float">
            <img
              src="/img/atul-portrait.png"
              alt="Atul Ranjith profile image"
              className="w-full h-[320px] sm:h-[380px] lg:h-[430px] object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        </section>

        <section id="about" className="reveal mt-16 card p-6 md:p-8">
          <h2 className="section-title">About Me</h2>
          <p className="section-copy mt-4">
            I am based in Dubai and originally from Kerala, India. With
            postgraduate studies in Media and Communication and previous
            specialization in Air Transport Management, I bring a disciplined,
            global perspective to sports storytelling and communication.
          </p>

          <h3 className="text-xl font-semibold mt-8">Core Strengths</h3>
          <ul className="mt-3 grid md:grid-cols-2 gap-3 text-slate-300">
            {strengths.map((item, idx) => (
              <li key={item} className="strength-item reveal reveal-stagger" style={{ "--delay": `${idx * 90}ms` }}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="reveal mt-16">
          <h2 className="section-title">Featured Work</h2>
          <div className="mt-7 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {featuredWork.map((item, idx) => (
              <article
                key={item.title}
                className="card p-4 work-card reveal reveal-stagger"
                style={{ "--delay": `${idx * 110}ms` }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} preview`}
                  className="w-full h-40 sm:h-44 rounded-xl object-cover border border-white/10"
                  loading="lazy"
                />
                <p className="text-xs uppercase tracking-[0.18em] text-sky-300/80 mt-4">
                  {item.type}
                </p>
                <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.description}</p>
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-block mt-4 text-sky-300 hover:text-sky-200 transition"
                >
                  View
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" ref={journeyRef} className="reveal mt-16">
          <h2 className="section-title">Academic Journey</h2>
          <div className={`timeline mt-7 ${timelineActive ? "timeline-active" : ""}`}>
            {journey.map((item, idx) => (
              <article
                key={item.title}
                className="timeline-item reveal reveal-stagger"
                style={{ "--delay": `${idx * 120}ms` }}
              >
                <span className="timeline-dot" />
                <div className="card p-5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg font-semibold">
                      {item.title} - {item.institution}
                    </h3>
                    <p className="text-sm text-sky-300/80">{item.period}</p>
                  </div>
                  <p className="mt-3 text-slate-300">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="reveal mt-16 mb-10 card p-6 md:p-8">
          <h2 className="section-title">Contact</h2>
          <div className="mt-5 grid md:grid-cols-2 gap-4 text-slate-300">
            <a href="mailto:atulranjith192@gmail.com" className="contact-link">
              Email: atulranjith192@gmail.com
            </a>
            <a href="tel:+971508537150" className="contact-link">
              Phone: +971 50 853 7150
            </a>
            <a
              href="https://linkedin.com/in/atul-ranjith"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              LinkedIn: linkedin.com/in/atul-ranjith
            </a>
            <a
              href="https://cricketclassics.wordpress.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Blog: cricketclassics.wordpress.com
            </a>
            <a
              href="https://instagram.com/atulranjith8451"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Instagram: instagram.com/atulranjith8451
            </a>
            <p>Location: Dubai, UAE</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
