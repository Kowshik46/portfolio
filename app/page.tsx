import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Download,
  Link2,
  Mail,
  Radar,
  ServerCog,
  Sparkles,
  Workflow,
} from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolio-data";

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#architecture", label: "Architecture" },
  { href: "#contact", label: "Contact" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioData.person.name,
  jobTitle: portfolioData.person.title,
  email: portfolioData.person.email,
  url: portfolioData.person.website,
  sameAs: [portfolioData.person.linkedin, portfolioData.person.github],
  knowsAbout: portfolioData.skills.flatMap((category) => category.items),
  alumniOf: portfolioData.education,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[160px]" />

        <header className="fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-slate-950/80 shadow-[0_12px_48px_rgba(2,8,23,0.28)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
            <Link href="#" className="text-sm font-semibold tracking-[0.24em] text-slate-100 uppercase">
              {portfolioData.person.name}
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
              {sectionLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-20 pt-28 lg:px-8 sm:pt-32">
          <AnimatedSection className="grid gap-10 pt-10 sm:pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                <Badge variant="accent">Senior AI Engineer</Badge>
                <Badge>Agent Systems</Badge>
                <Badge>GenAI + ML Platforms</Badge>
              </div>

              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  {portfolioData.person.altTitle}
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                  <span className="text-gradient">{portfolioData.person.name}</span>
                </h1>
                <p className="max-w-3xl text-xl leading-8 text-slate-300 sm:text-2xl">
                  {portfolioData.person.tagline}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#projects">
                    View Projects
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="/api/resume" download>
                    Download Resume
                    <Download />
                  </a>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {portfolioData.heroHighlights.map((item) => (
                  <Card key={item} className="rounded-2xl border-white/8 bg-white/[0.03]">
                    <CardContent className="flex items-start gap-3 p-4">
                      <Sparkles className="mt-0.5 size-4 text-sky-300" />
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="glass-border overflow-hidden rounded-[2rem] bg-slate-950/55">
              <CardHeader className="border-b border-white/8">
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="accent">Architecture Lens</Badge>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">AI Systems at Scale</p>
                </div>
                <CardTitle className="text-2xl">Enterprise AI that ships, not just demos.</CardTitle>
                <CardDescription className="max-w-md">
                  From retrieval-aware copilots to optimization engines and edge ML, the throughline is
                  the same: build systems people rely on and outcomes leadership can measure.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {portfolioData.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-300/30"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{metric.label}</p>
                      <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-sky-300/10 bg-sky-400/6 p-5">
                  <p className="text-sm font-medium text-sky-200">What I build best</p>
                  <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <Workflow className="size-4 text-sky-300" />
                      Agent orchestration
                    </div>
                    <div className="flex items-center gap-2">
                      <BrainCircuit className="size-4 text-sky-300" />
                      RAG and NLQ systems
                    </div>
                    <div className="flex items-center gap-2">
                      <ServerCog className="size-4 text-sky-300" />
                      ML deployment patterns
                    </div>
                    <div className="flex items-center gap-2">
                      <Radar className="size-4 text-sky-300" />
                      Observability and evals
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection id="about" delay={0.05} className="space-y-10">
            <SectionHeading
              eyebrow="About Me"
              title="AI architect mindset with delivery-first execution"
              description="Your resume was transformed into a sharper story focused on systems, leverage, and leadership instead of generic responsibility bullets."
            />

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <Card className="rounded-[2rem]">
                <CardContent className="space-y-6 p-8">
                  <p className="text-lg leading-8 text-slate-300">{portfolioData.about.summary}</p>
                  <div className="grid gap-4">
                    {portfolioData.about.focus.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem]">
                <CardHeader>
                  <Badge variant="muted" className="w-fit">
                    Education + Foundations
                  </Badge>
                  <CardTitle>Built on data science, applied ML, and product delivery</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {portfolioData.education.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm text-slate-300">
                      {item}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          <AnimatedSection id="skills" delay={0.08} className="space-y-10">
            <SectionHeading
              eyebrow="Skill Stack"
              title="Built for modern AI delivery across model, data, and systems layers"
              description="The stack is organized around how architect-level AI work actually gets delivered in production."
            />

            <div className="grid gap-5 lg:grid-cols-5">
              {portfolioData.skills.map((category) => (
                <Card
                  key={category.title}
                  className="rounded-[1.75rem] transition duration-300 hover:-translate-y-1 hover:border-sky-300/25"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge key={skill} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="projects" delay={0.1} className="space-y-10">
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects framed as AI case studies"
              description="These are not bullet-point projects. Each one is presented as a business problem, system design decision, and measurable outcome."
            />

            <div className="grid gap-6 xl:grid-cols-2">
              {portfolioData.projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="rounded-[2rem] transition duration-300 hover:-translate-y-1 hover:border-sky-300/25"
                >
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <Badge variant={index < 2 ? "accent" : "muted"}>
                        {index < 2 ? "Flagship Case Study" : "Applied System"}
                      </Badge>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                        Project {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.strapline}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.26em] text-slate-500">Problem Statement</p>
                      <p className="text-sm leading-7 text-slate-300">{project.problem}</p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.26em] text-slate-500">Solution Architecture</p>
                      <ul className="space-y-3 text-sm leading-7 text-slate-300">
                        {project.architecture.map((item) => (
                          <li key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.26em] text-slate-500">Impact</p>
                      <div className="grid gap-3">
                        {project.impact.map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-sky-300/10 bg-sky-400/6 p-4 text-sm leading-6 text-slate-200"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.26em] text-slate-500">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((item) => (
                          <Badge key={item}>{item}</Badge>
                        ))}
                      </div>
                    </div>

                    {project.learnings ? (
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                        <p className="text-xs uppercase tracking-[0.26em] text-slate-500">Key Learning</p>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{project.learnings}</p>
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="experience" delay={0.12} className="space-y-10">
            <SectionHeading
              eyebrow="Experience Timeline"
              title="Career progression shaped by delivery, scale, and increasing architecture ownership"
              description="The timeline focuses on outcomes and leverage created in each role, not generic responsibilities."
            />

            <div className="relative space-y-6 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-white/10 sm:before:left-5">
              {portfolioData.experience.map((item) => (
                <div key={`${item.company}-${item.role}`} className="relative pl-12">
                  <div className="absolute left-[9px] top-8 size-3 rounded-full border border-sky-200/50 bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.75)]" />
                  <Card className="rounded-[2rem]">
                    <CardHeader>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-2">
                          <CardTitle>{item.role}</CardTitle>
                          <CardDescription className="text-base text-slate-300">
                            {item.company} · {item.location}
                          </CardDescription>
                        </div>
                        <Badge variant="muted">{item.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm leading-7 text-slate-300">
                        {item.achievements.map((achievement) => (
                          <li key={achievement} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection id="architecture" delay={0.14} className="space-y-10">
            <SectionHeading
              eyebrow="AI System Design & Architecture"
              title="How I think about architect-level AI systems"
              description="This section positions the portfolio around system design judgment: orchestration, retrieval, deployment realities, and observability."
            />

            <div className="grid gap-6 xl:grid-cols-2">
              {portfolioData.architecture.map((pillar) => (
                <Card key={pillar.title} className="rounded-[2rem]">
                  <CardHeader>
                    <CardTitle>{pillar.title}</CardTitle>
                    <CardDescription>{pillar.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {pillar.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="rounded-[2rem] overflow-hidden">
              <CardHeader className="border-b border-white/8">
                <Badge variant="accent" className="w-fit">
                  Operating Principles
                </Badge>
                <CardTitle>What shapes my design decisions</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 pt-6 md:grid-cols-2">
                {portfolioData.operatingPrinciples.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-sm leading-7 text-slate-300">
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection id="contact" delay={0.16} className="pb-8">
            <Card className="glass-border rounded-[2.25rem] bg-slate-950/60">
              <CardContent className="flex flex-col gap-8 p-8 sm:p-10">
                <div className="space-y-4">
                  <Badge variant="accent" className="w-fit">
                    Contact
                  </Badge>
                  <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Looking for someone who can design the AI system and ship the product around it?
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                    Reach out for senior IC, lead engineer, or architect-level opportunities across GenAI,
                    applied ML, platform engineering, and decision intelligence systems.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button asChild size="lg">
                    <a href={`mailto:${portfolioData.person.email}`}>
                      <Mail />
                      {portfolioData.person.email}
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href={portfolioData.person.linkedin} target="_blank" rel="noreferrer">
                      <BriefcaseBusiness />
                      LinkedIn
                      <ArrowUpRight />
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href={portfolioData.person.github} target="_blank" rel="noreferrer">
                      <Link2 />
                      GitHub
                      <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </main>
      </div>
    </>
  );
}
