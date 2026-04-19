"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  "Business & IT Requirements Analysis",
  "AI-Enabled Solution Design",
  "Workflow Orchestration",
  "Digital Transformation",
  "Process Optimization",
  "Generative AI & LLM Applications",
  "Python (Data Analysis & Automation)",
  "Data-Driven Decision Support",
  "Stakeholder Management",
  "Cross-Functional Collaboration",
  "System Adoption & Change Management",
];

const EXPERIENCE = [
  {
    title: "Consultant",
    company: "TMCO Danışmanlık",
    location: "Istanbul",
    period: "July 2024 – Present",
    bullets: [
      "IT–Business Bridge: Acted as liaison between business units and technical teams, translating organizational needs into AI-enabled system requirements.",
      "AI Solution Architecture: Contributed to design and orchestration of RobotiK AI — an AI-powered recruitment platform awarded the Brandon Hall Silver Award (2025) for Best Use of AI in Talent Acquisition.",
      "Requirements & Process Analysis: Conducted end-to-end process analyses to identify operational gaps and define improvement opportunities.",
      "Analytics & Validation: Utilized Python-based data analysis to validate performance and assessment systems.",
      "Stakeholder Alignment: Worked closely with senior stakeholders to ensure solution feasibility and successful adoption.",
      "Digital Transformation Support: Delivered benchmarking insights and transformation roadmaps supporting scalable, technology-driven change.",
    ],
  },
  {
    title: "People & Organizational Transformation Project Assistant",
    company: "Entek Elektrik",
    location: "Istanbul",
    period: "October 2023 – July 2024",
    bullets: [
      "Digital Requirements Discovery: Collaborated with HR and business stakeholders to gather functional requirements and translate them into technology-enabled solutions.",
      "AI-Powered Automation Solution: Designed and implemented an AI-based interview transcription and summarization tool, improving evaluation speed and decision accuracy.",
      "Process Optimization: Analyzed recruitment workflows to identify automation opportunities, contributing to cost and time efficiency.",
      "System Adoption & Change Support: Supported rollout of digital tools through stakeholder communication and training.",
      "Business Impact Recognition: Contributed to a digital transformation initiative recognized with an Internal Innovation Award.",
    ],
  },
  {
    title: "Internal Communications & Corporate Culture Intern",
    company: "Alternatif Bank",
    location: "Istanbul",
    period: "March 2023 – October 2023",
    bullets: [
      "Stakeholder Communication Enablement: Supported internal communication initiatives by aligning messaging with business priorities.",
      "Engagement Analytics: Monitored participation and communication metrics to improve effectiveness of internal platforms.",
      "Cross-Functional Coordination: Worked with HR, corporate communication, and business teams to support adoption of internal programs.",
    ],
  },
];

const AWARDS = [
  {
    title: "Brandon Hall Group HCM Excellence Silver Award",
    year: "2025",
    description:
      "Recognized in the 'Best Use of AI for Talent Acquisition' category for development of the RobotİK AI recruitment platform.",
    icon: "🥈",
    color: "silver",
  },
  {
    title: "Koç Holding Hackathon — First Place",
    year: "2024",
    description:
      "Developed a generative AI-powered candidate analysis system (Speech-to-Text & Image-to-Text) within a low-code framework.",
    icon: "🏆",
    color: "gold",
  },
];

const CERTIFICATIONS = [
  "Developing AI Applications with Python and Flask — IBM",
  "Python for Data Science, AI & Development — IBM",
  "Generative AI with Large Language Models — IBM",
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(11, 15, 26, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e2d4a" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#hero"
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#e2e8f0",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Enes<span style={{ color: "#3b82f6" }}>.</span>
        </a>

        <nav
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#94a3b8",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: "rgba(11, 15, 26, 0.98)",
            borderBottom: "1px solid #1e2d4a",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: "1rem" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section
          id="hero"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 1.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(59,130,246,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              maxWidth: "800px",
              width: "100%",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              className="animate-fade-up"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.25)",
                borderRadius: "20px",
                padding: "0.35rem 1rem",
                fontSize: "0.82rem",
                color: "#60a5fa",
                fontWeight: 600,
                marginBottom: "1.5rem",
                letterSpacing: "0.04em",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              Open to new opportunities
            </div>

            <h1
              className="animate-fade-up delay-100"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Enes Turan</span>
            </h1>

            <p
              className="animate-fade-up delay-200"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                color: "#64748b",
                maxWidth: "600px",
                margin: "0 auto 0.75rem",
                fontWeight: 500,
              }}
            >
              IT & Digital Transformation Consultant
            </p>

            <p
              className="animate-fade-up delay-300"
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                color: "#475569",
                maxWidth: "560px",
                margin: "0 auto 2.5rem",
                lineHeight: 1.7,
              }}
            >
              Bridging business requirements with AI-enabled solutions.
              Experienced in requirements analysis, process optimization,
              and AI-powered system design.
            </p>

            <div
              className="animate-fade-up delay-400"
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="#experience" className="btn-primary">
                View My Work
              </a>
              <a
                href="mailto:enes.turan7@outlook.com"
                className="btn-outline"
              >
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/enes-turan-"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.4; }
            }
          `}</style>
        </section>

        {/* About */}
        <section id="about" style={{ padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px" }}>
              <p className="section-label">About Me</p>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                Building the bridge between{" "}
                <span className="gradient-text">business & technology</span>
              </h2>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                I&apos;m an IT and Digital Transformation professional
                specializing in translating complex business needs into scalable
                digital solutions. With hands-on experience in AI-powered system
                design and enterprise process optimization, I collaborate with
                technical teams and decision-makers to deliver measurable impact.
              </p>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                }}
              >
                My work spans AI-assisted workflow automation, people analytics,
                and technology-enabled process transformation — including
                contributing to an award-winning AI recruitment platform
                recognized globally by the Brandon Hall Group.
              </p>

              <div
                style={{
                  marginTop: "2.5rem",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1.5rem",
                }}
              >
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "2", label: "Industry Awards" },
                  { value: "3", label: "IBM Certifications" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      textAlign: "center",
                      padding: "1.25rem",
                      background: "#131929",
                      border: "1px solid #1e2d4a",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: "#60a5fa",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{ fontSize: "0.82rem", color: "#64748b", marginTop: "0.25rem" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          style={{ padding: "6rem 1.5rem", background: "rgba(19,25,41,0.5)" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p className="section-label">Work Experience</p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: "3rem",
                lineHeight: 1.2,
              }}
            >
              Professional Journey
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {EXPERIENCE.map((job, i) => (
                <div key={i} className="card" style={{ padding: "1.75rem 2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "#e2e8f0",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {job.title}
                      </h3>
                      <p
                        style={{
                          color: "#3b82f6",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                        }}
                      >
                        {job.company}
                        <span style={{ color: "#475569", fontWeight: 400 }}>
                          {" "}
                          · {job.location}
                        </span>
                      </p>
                    </div>
                    <span
                      style={{
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.2)",
                        color: "#60a5fa",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        padding: "0.3rem 0.75rem",
                        borderRadius: "20px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {job.period}
                    </span>
                  </div>

                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    {job.bullets.map((b, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: "0.65rem",
                          color: "#64748b",
                          fontSize: "0.92rem",
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: "#3b82f6", flexShrink: 0, marginTop: "0.1rem" }}>
                          ›
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" style={{ padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p className="section-label">Technical Skills</p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: "2.5rem",
                lineHeight: 1.2,
              }}
            >
              Core Competencies
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {SKILLS.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>

            {/* Education inline */}
            <div style={{ marginTop: "4rem" }}>
              <p className="section-label">Education</p>
              <div
                className="card"
                style={{
                  padding: "1.5rem 2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(59,130,246,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  🎓
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#e2e8f0",
                    }}
                  >
                    Business Administration
                  </h3>
                  <p style={{ color: "#3b82f6", fontWeight: 600, fontSize: "0.9rem" }}>
                    Istanbul University
                    <span style={{ color: "#475569", fontWeight: 400 }}>
                      {" "}
                      · 2018 – 2023
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Certifications */}
        <section
          id="awards"
          style={{ padding: "6rem 1.5rem", background: "rgba(19,25,41,0.5)" }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p className="section-label">Recognition</p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: "3rem",
                lineHeight: 1.2,
              }}
            >
              Awards & Certifications
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.25rem",
                marginBottom: "3rem",
              }}
            >
              {AWARDS.map((award, i) => (
                <div
                  key={i}
                  className="card"
                  style={{ padding: "1.75rem" }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
                    {award.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: award.color === "gold" ? "#fbbf24" : "#94a3b8",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {award.year}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#e2e8f0",
                      marginBottom: "0.6rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {award.title}
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.6 }}>
                    {award.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="section-label">Certifications</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginTop: "0.75rem",
              }}
            >
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.85rem 1.25rem",
                    background: "#131929",
                    border: "1px solid #1e2d4a",
                    borderRadius: "10px",
                  }}
                >
                  <span style={{ color: "#3b82f6" }}>✓</span>
                  <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ padding: "6rem 1.5rem" }}>
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p className="section-label">Contact</p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:enes.turan7@outlook.com"
                className="btn-primary"
                style={{ fontSize: "1rem", padding: "0.75rem 1.75rem" }}
              >
                ✉ enes.turan7@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/enes-turan-"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: "1rem", padding: "0.75rem 1.75rem" }}
              >
                LinkedIn ↗
              </a>
            </div>

            <p
              style={{
                marginTop: "1.5rem",
                color: "#475569",
                fontSize: "0.88rem",
              }}
            >
              📞 +90 544 382 9644
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1e2d4a",
          padding: "2rem 1.5rem",
          textAlign: "center",
          color: "#334155",
          fontSize: "0.82rem",
        }}
      >
        <p>
          © {new Date().getFullYear()} Enes Turan · Built with Next.js & deployed on Vercel
        </p>
      </footer>
    </>
  );
}
