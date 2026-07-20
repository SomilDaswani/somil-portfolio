import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});


const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React 18", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "HTML/CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    group: "AI & Automation",
    items: ["LLM Integration", "RAG", "MCP", "Retell AI", "n8n", "Gemini", "GPT-4.1"],
  },
  {
    group: "Platform",
    items: ["Supabase", "Firebase", "Vercel", "Edge Functions", "REST", "Git"],
  },
];

const PROJECTS = [
  {
    n: "01",
    title: "iDesk",
    tagline: "AI Voice IT Helpdesk Agent",
    year: "2025",
    body: "Voice AI that triages IT issues through natural conversation — categorizes, diagnoses, attempts fixes, and schedules callbacks. Serverless Express backend handles Retell token auth; a post-call n8n pipeline logs tickets to Sheets and confirms via Gmail.",
    stack: ["React 18", "Node/Express", "Retell AI", "GPT-4.1 Nano", "n8n", "Vercel"],
    links: [
      { label: "Live", href: "https://idesk-ai.vercel.app/" },
      { label: "Code", href: "https://github.com/SomilDaswani/iDesk" },
    ],
  },
  {
    n: "02",
    title: "Marketeer AI",
    tagline: "Meta Ad Campaign Generator",
    year: "2025",
    body: "AI platform generating complete Facebook & Instagram ad campaigns — targeting, budget allocation, creative direction, and structure. Supabase handles auth and data; Edge Functions run serverless Gemini logic. Top 10 at GDG Kolachi Build with AI Hackathon.",
    stack: ["React", "TypeScript", "Supabase", "Gemini", "shadcn/ui"],
    links: [{ label: "Code", href: "https://github.com/SomilDaswani/Marketeer-AI" }],
  },
  {
    n: "03",
    title: "PainPals",
    tagline: "AI Chronic Pain Management",
    year: "2025",
    body: "Cross-platform mobile app delivering AI-driven lifestyle, ergonomic and diet guidance for chronic pain sufferers. Gemini-powered symptom chatbot, pain logging with pattern detection, and a peer support forum. Google Solution Challenge submission.",
    stack: ["React Native", "FastAPI", "Gemini", "Firebase", "Google PSE"],
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=EeYeeCv_dgA" },
      { label: "Code", href: "https://github.com/ShanzayKn/PainPals-GSC" },
    ],
  },
  {
    n: "04",
    title: "TaskFlow",
    tagline: "Task Management, done right",
    year: "2024",
    body: "Full-featured task manager with auth, CRUD, status filtering and realtime updates. Row-level security on Supabase enforces strict per-user data isolation. A study in shipping small, sharp tools with sane defaults.",
    stack: ["React", "TypeScript", "Tailwind", "Supabase"],
    links: [{ label: "Code", href: "https://github.com/SomilDaswani/TaskFlow" }],
  },
];

const HONORS = [
  {
    year: "2025",
    title: "Top 10 — Build with AI Hackathon",
    org: "GDG Kolachi",
    note: "Recognized for Marketeer AI among dozens of teams.",
  },
  {
    year: "2025",
    title: "APAC Solution Challenge Participant",
    org: "Google Developer Groups",
    note: "Regional participation across Asia-Pacific.",
    href: "https://certificate.hack2skill.com/user/apacparticipation/2025H2S03ASC-P00751",
  },
  {
    year: "2026",
    title: "BS Computer Science",
    org: "DHA Suffa University, Karachi",
    note: "GPA 3.4 / 4.0 — expected July 2026.",
  },
];

function useClock() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Karachi",
        hour12: false,
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}



function Portfolio() {
  const time = useClock();

  return (
    <div className="grain relative min-h-screen font-sans text-ink">
      <TopBar time={time} />

      <main className="relative mx-auto max-w-[1400px] px-5 pt-20 sm:px-8 sm:pt-24 lg:px-16">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Honors />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────── Chrome ─────────────────────────────── */

function TopBar({ time }: { time: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-paper/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] sm:px-8 sm:py-4 sm:text-[11px] lg:px-16">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-paper">
            <span className="font-serif text-[13px] italic leading-none">s</span>
          </span>
          <span className="truncate">Somil Raj</span>
          <span className="hidden truncate text-muted-foreground sm:inline">/ Portfolio ’26</span>
        </a>
        <div className="flex shrink-0 items-center gap-3 text-muted-foreground sm:gap-4">
          <span className="hidden md:inline">Karachi, PK</span>
          <span className="hidden md:inline">·</span>
          <span className="tabular-nums text-ink">
            {time || "—"} <span className="text-muted-foreground">PKT</span>
          </span>
          <span className="hidden items-center gap-1.5 md:inline-flex">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-moss/60" />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-moss" />
            </span>
            <span className="text-ink">Available for work</span>
          </span>
        </div>
      </div>
    </header>
  );
}


/* ──────────────────────────────── Hero ──────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative pt-16 sm:pt-24">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px] sm:tracking-[0.24em]">
          <span className="truncate">N° 001 — Est. 2026</span>
          <span className="hidden sm:inline">Full-Stack · AI · Automations</span>
          <span className="shrink-0">Vol. I</span>
        </div>

        <div className="col-span-12 mt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-copper-deep sm:text-xs">
            Software Developer, Karachi
          </p>
          <h1 className="mt-4 font-serif text-[22vw] leading-[0.86] tracking-[-0.03em] sm:text-[16vw] lg:text-[11.5rem]">
            Somil
            <br />
            <span className="italic text-copper-deep">Raj</span>
            <span className="text-ink">.</span>
          </h1>
        </div>


        <div className="col-span-12 mt-10 grid grid-cols-12 gap-6 border-t border-ink/15 pt-8">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              A short manifesto
            </p>
            <p className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">
              I build <em className="text-copper-deep">quietly ambitious</em> software —
              AI agents, automations, and web apps that behave like they were made by
              someone who cares.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Currently
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>Shipping iDesk v2</li>
              <li>Reading about MCP servers</li>
              <li>Open to grad roles ’26</li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a
                  className="link-underline"
                  href="https://github.com/SomilDaswani"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  className="link-underline"
                  href="https://linkedin.com/in/somil-raj"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a className="link-underline" href="mailto:somilraj34@gmail.com">
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── Marquee ────────────────────────────── */

function Marquee() {
  const words = [
    "React",
    "TypeScript",
    "AI Agents",
    "Supabase",
    "n8n",
    "Retell",
    "FastAPI",
    "RAG",
    "MCP",
    "Automations",
    "Full-Stack",
    "Gemini",
    "Edge Functions",
  ];
  return (
    <div
      aria-hidden
      className="ticker-fade relative mt-20 overflow-hidden border-y border-ink/15 py-4"
    >
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[...words, ...words].map((w, i) => (
          <span
            key={i}
            className="mx-6 font-serif text-3xl italic text-ink/80 sm:text-4xl"
          >
            {w}
            <span className="mx-6 text-copper">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────── About ─────────────────────────────── */

function SectionHeader({ num, kicker, title }: { num: string; kicker: string; title: string }) {
  return (
    <div className="mb-14 flex items-end justify-between gap-8 border-b border-ink/15 pb-6">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          § {num} — {kicker}
        </p>
        <h2 className="mt-3 font-serif text-5xl leading-none tracking-[-0.02em] sm:text-6xl">
          {title}
        </h2>
      </div>
      <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground sm:inline">
        scroll ↓
      </span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28">
      <SectionHeader num="01" kicker="About" title="Notes on the maker." />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <p className="font-serif text-3xl leading-[1.25] tracking-[-0.01em] sm:text-4xl">
            I’m a full-stack developer who lives at the seam between{" "}
            <span className="italic text-copper-deep">product</span> and{" "}
            <span className="italic text-copper-deep">plumbing</span> — writing the
            frontend, the backend, and the small, obsessive glue that makes them feel
            like one thing.
          </p>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground">
            Right now that means shipping AI agents and automation systems: voice
            helpdesks that actually resolve tickets, ad-campaign generators that reason
            about targeting, chatbots that log symptoms and spot patterns. I care about
            typography, error states, and the boring 20% that separates a demo from
            software.
          </p>
        </div>

        <aside className="col-span-12 md:col-span-4 md:col-start-9">
          <dl className="divide-y divide-ink/15 border-y border-ink/15 font-mono text-xs uppercase tracking-[0.18em]">
            {[
              ["Based", "Karachi, PK"],
              ["Role", "Full-Stack Dev"],
              ["Focus", "AI · Automations"],
              ["Education", "DSU · CS ’26"],
              ["Stack", "TS / Py / SQL"],
              ["Status", "Available"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between py-3">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

/* ─────────────────────────────── Skills ─────────────────────────────── */

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-28">
      <SectionHeader num="02" kicker="Toolkit" title="Instruments, well-kept." />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {SKILLS.map((s, i) => (
          <div
            key={s.group}
            className="group relative overflow-hidden border border-ink/15 bg-paper-warm/40 p-8 transition-colors hover:bg-paper-warm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-3xl tracking-[-0.01em]">
                  {s.group}
                </h3>
              </div>
              <span className="font-serif text-2xl italic text-copper opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                ✦
              </span>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li
                  key={it}
                  className="border border-ink/20 bg-paper px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────── Work ──────────────────────────────── */

function Work() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <section id="work" className="scroll-mt-24 py-28">
      <SectionHeader num="03" kicker="Selected work" title="Things I shipped." />
      <ol className="divide-y divide-ink/15 border-y border-ink/15">
        {PROJECTS.map((p) => (
          <li
            key={p.n}
            onMouseEnter={() => setHovered(p.n)}
            onMouseLeave={() => setHovered(null)}
            className="group grid grid-cols-12 items-start gap-6 py-10 transition-colors"
          >
            <div className="col-span-2 md:col-span-1">
              <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
            </div>
            <div className="col-span-10 md:col-span-6">
              <div className="flex items-baseline gap-3">
                <h3
                  className={`font-serif text-4xl leading-none tracking-[-0.02em] transition-colors sm:text-5xl ${
                    hovered && hovered !== p.n ? "text-ink/30" : "text-ink"
                  }`}
                >
                  {p.title}
                </h3>
                <span className="font-serif text-2xl italic text-copper-deep">
                  — {p.tagline}
                </span>
              </div>
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">
                {p.stack.map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="flex flex-wrap items-center gap-4 md:justify-end">
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline font-mono text-xs uppercase tracking-[0.2em]"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ─────────────────────────────── Honors ─────────────────────────────── */

function Honors() {
  const ref = useRef<HTMLOListElement>(null);
  return (
    <section id="honors" className="scroll-mt-24 py-28">
      <SectionHeader num="04" kicker="Honors & credentials" title="For the record." />
      <ol ref={ref} className="relative border-l border-ink/20 pl-8">
        {HONORS.map((h, i) => (
          <li key={i} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[37px] top-2 grid h-4 w-4 place-items-center">
              <span className="h-2 w-2 rotate-45 border border-copper-deep bg-paper" />
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-copper-deep">
              {h.year} · {h.org}
            </p>
            <h3 className="mt-2 font-serif text-3xl tracking-[-0.01em]">{h.title}</h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">{h.note}</p>
            {h.href && (
              <a
                href={h.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-2 inline-block font-mono text-[11px] uppercase tracking-[0.2em]"
              >
                View certificate ↗
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ────────────────────────────── Contact ─────────────────────────────── */

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-28">
      <SectionHeader num="05" kicker="Contact" title="Say hello, or hire me." />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <p className="font-serif text-4xl leading-[1.1] tracking-[-0.02em] sm:text-6xl">
            Have a project that needs
            <span className="italic text-copper-deep"> care</span>,
            <br />
            an agent that needs
            <span className="italic text-copper-deep"> a brain</span>,
            <br />
            or a workflow that needs
            <span className="italic text-copper-deep"> to disappear</span>?
          </p>
          <a
            href="mailto:somilraj34@gmail.com"
            className="mt-10 inline-flex items-center gap-3 border border-ink bg-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.24em] text-paper transition-colors hover:bg-copper-deep hover:border-copper-deep"
          >
            somilraj34@gmail.com
            <span aria-hidden>→</span>
          </a>
        </div>

        <aside className="col-span-12 md:col-span-4 md:col-start-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Channels
          </p>
          <ul className="mt-4 divide-y divide-ink/15 border-y border-ink/15">
            {[
              { k: "Email", v: "somilraj34@gmail.com", href: "mailto:somilraj34@gmail.com" },
              { k: "Phone", v: "+92 334 7354490", href: "tel:+923347354490" },
              { k: "GitHub", v: "@SomilDaswani", href: "https://github.com/SomilDaswani" },
              { k: "LinkedIn", v: "in/somil-raj", href: "https://linkedin.com/in/somil-raj" },
            ].map((c) => (
              <li key={c.k} className="flex items-center justify-between py-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {c.k}
                </span>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-sm text-ink"
                >
                  {c.v}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

/* ─────────────────────────────── Footer ─────────────────────────────── */

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-ink/20 bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-8 sm:px-10 lg:px-16">
        <p className="font-serif text-[18vw] leading-[0.82] tracking-[-0.03em] sm:text-[14vw] lg:text-[13rem]">
          Let’s build.
        </p>
        <div className="mt-10 grid grid-cols-12 gap-6 border-t border-paper/20 pt-8 font-mono text-[11px] uppercase tracking-[0.2em]">
          <div className="col-span-12 md:col-span-4">
            <p className="text-paper/50">© 2026 Somil Raj</p>
            <p className="mt-1 text-paper/50">All rights, well, reserved.</p>
          </div>
          <div className="col-span-6 md:col-span-4">
            <p className="text-paper/50">Design & code</p>
            <p className="mt-1">
              Made with obsession by{" "}
              <a
                href="https://github.com/SomilDaswani"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-copper"
              >
                Somil Raj
              </a>
            </p>
          </div>
          <div className="col-span-6 md:col-span-4 md:text-right">
            <p className="text-paper/50">Set in</p>
            <p className="mt-1">Instrument Serif · Work Sans · JetBrains Mono</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
