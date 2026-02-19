import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";

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

const aboutBlocks = [
  {
    title: "Personal Overview",
    content:
      "My name is Atul Ranjith, a 25-year-old media and communication student with a strong academic background in aviation, air transport management, and sports media. I was born on 22 November 2000, and I am an Indian national from Kerala.",
  },
  {
    title: "Academic Background",
    content:
      "I completed schooling in Kerala, then earned my Bachelor's degree in Aviation from Jain University, Bangalore. I later completed a Postgraduate degree in Air Transport Management at De Montfort University, Leicester, UK. I am currently pursuing a Master's in Media and Communication at MAHE Dubai.",
  },
  {
    title: "Interests and Hobbies",
    content:
      "I have followed cricket from a very young age, and this grew into a passion for match analysis, sports writing, and storytelling. I also enjoy reading books on sports, journalism, biographies, and media studies, which sharpen my analytical thinking and writing style.",
  },
  {
    title: "Career Aspiration",
    content:
      "My long-term goal is to establish myself as a sports journalist and cricket writer. I aim to combine my media education with my passion for sport, work with reputed sports media platforms, and keep growing as a writer, analyst, and storyteller.",
  },
];

const whyWebsitePoints = [
  "Showcase my writing skills and analytical ability",
  "Build a professional portfolio in cricket and sports journalism",
  "Share my insights, opinions, and passion for the sport",
  "Take meaningful steps toward pursuing sports journalism as a full-time career",
];

function HomePage() {
  return (
    <div className="page-transition">
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
            I create engaging sports narratives backed by research and analytical thinking.
            My academic journey across aviation and media helps me communicate stories
            with both clarity and depth.
          </p>
          <div className="hero-item hero-item-4 mt-7 flex flex-wrap gap-3">
            <a href="/cv.pdf" download="Atul-Ranjith-CV.pdf" className="btn btn-primary">
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

      <section className="reveal mt-14">
        <div className="grid lg:grid-cols-2 gap-5">
          <article className="card p-6 reveal reveal-stagger" style={{ "--delay": "60ms" }}>
            <p className="text-xs uppercase tracking-[0.18em] text-sky-300/80">About Snapshot</p>
            <h2 className="text-2xl font-semibold mt-2">Who I Am</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Media and communication postgraduate with aviation management background,
              focused on cricket storytelling, research-driven analysis, and clear communication.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-2">
              {strengths.slice(0, 4).map((item) => (
                <span key={item} className="strength-item text-sm">
                  {item}
                </span>
              ))}
            </div>
            <Link to="/about" className="inline-block mt-4 text-sky-300 hover:text-sky-200">
              Read full About page
            </Link>
          </article>

          <article className="card p-6 reveal reveal-stagger" style={{ "--delay": "140ms" }}>
            <p className="text-xs uppercase tracking-[0.18em] text-sky-300/80">Work Snapshot</p>
            <h2 className="text-2xl font-semibold mt-2">Featured Work</h2>
            <div className="mt-4 space-y-3">
              {featuredWork.slice(0, 2).map((item) => (
                <div key={item.title} className="home-work-item">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-slate-300">{item.type}</p>
                </div>
              ))}
            </div>
            <Link to="/work" className="inline-block mt-4 text-sky-300 hover:text-sky-200">
              Explore all work
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}

function AboutPage({ timelineActive, journeyRef }) {
  return (
    <div className="page-transition">
      <section id="about" className="reveal mt-2">
        <h2 className="section-title">About Me</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-5">
          {aboutBlocks.map((block, idx) => (
            <article
              key={block.title}
              className="card p-6 reveal reveal-stagger about-block"
              style={{ "--delay": `${idx * 110}ms` }}
            >
              <h3 className="text-xl font-semibold">{block.title}</h3>
              <p className="section-copy mt-3">{block.content}</p>
            </article>
          ))}
        </div>

        <article className="card p-6 mt-5 reveal reveal-stagger" style={{ "--delay": "420ms" }}>
          <h3 className="text-xl font-semibold">Core Strengths</h3>
          <ul className="mt-3 grid md:grid-cols-2 gap-3 text-slate-300">
            {strengths.map((item, idx) => (
              <li
                key={item}
                className="strength-item reveal reveal-stagger"
                style={{ "--delay": `${idx * 80}ms` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="card p-6 mt-5 reveal reveal-stagger" style={{ "--delay": "520ms" }}>
          <h3 className="text-xl font-semibold">Why This Website?</h3>
          <p className="section-copy mt-3">
            Cricket has always been more than just a game for me. It is a narrative,
            a culture, and a platform for powerful storytelling. From match analysis
            to player performances and tactical breakdowns, I have always been
            fascinated by cricket journalism and sports writing.
          </p>
          <ul className="mt-3 grid md:grid-cols-2 gap-3 text-slate-300">
            {whyWebsitePoints.map((point, idx) => (
              <li key={point} className="strength-item reveal reveal-stagger" style={{ "--delay": `${idx * 80}ms` }}>
                {point}
              </li>
            ))}
          </ul>
          <p className="section-copy mt-4">
            Through this platform, I aim to contribute, however small, to the world
            of sports media by producing thoughtful, well-researched, and engaging
            cricket content.
          </p>
        </article>
      </section>

      <section id="journey-page" ref={journeyRef} className="reveal mt-16">
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
    </div>
  );
}

function WorkPage() {
  return (
    <section id="work" className="reveal mt-2 page-transition">
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
            <p className="text-xs uppercase tracking-[0.18em] text-sky-300/80 mt-4">{item.type}</p>
            <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
            <p className="mt-2 text-slate-300">{item.description}</p>
            <a
              href={item.link}
              download={item.link === "/cv.pdf" ? "Atul-Ranjith-CV.pdf" : undefined}
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
  );
}

function ContactSection() {
  return (
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
  );
}

function App() {
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timelineActive, setTimelineActive] = useState(false);
  const mainRef = useRef(null);
  const journeyRef = useRef(null);
  const location = useLocation();

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
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimelineActive(false);

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
    reveals.forEach((el) => {
      el.classList.remove("in-view");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

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
  }, [location.pathname]);

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
          <Link
            to="/"
            className="brand-name text-lg sm:text-xl md:text-2xl font-bold tracking-tight"
          >
            <span className="brand-first">Atul</span>{" "}
            <span className="brand-last">Ranjith</span>
          </Link>
          <div
            className={`hidden md:flex items-center gap-6 text-sm ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <NavLink to="/" end className="nav-link-inline">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link-inline">
              About
            </NavLink>
            <NavLink to="/work" className="nav-link-inline">
              Work
            </NavLink>
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
            <NavLink to="/" end className="nav-link-inline">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link-inline">
              About
            </NavLink>
            <NavLink to="/work" className="nav-link-inline">
              Work
            </NavLink>
            <a href="#contact" className="nav-link-inline">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main ref={mainRef} className="mx-auto max-w-6xl px-5 md:px-8 py-8 sm:py-10 md:py-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage timelineActive={timelineActive} journeyRef={journeyRef} />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>

        <ContactSection />
      </main>

      <a
        href="https://wa.me/971508537150"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-fab"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.93L0 24l6.35-1.67a11.8 11.8 0 0 0 5.67 1.45h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.41-8.4Zm-8.46 18.3h-.01a9.8 9.8 0 0 1-4.98-1.36l-.36-.21-3.77.99 1-3.67-.24-.38a9.82 9.82 0 0 1-1.5-5.25c0-5.42 4.41-9.84 9.84-9.84 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.87 6.96c0 5.43-4.41 9.85-9.82 9.85Zm5.4-7.36c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1-1.03 2.45s1.05 2.85 1.2 3.05c.15.2 2.05 3.13 4.96 4.4.69.3 1.23.48 1.65.62.7.22 1.34.19 1.84.12.56-.08 1.78-.73 2.03-1.44.25-.7.25-1.31.18-1.44-.08-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
