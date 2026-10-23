"use client"

import { ExternalLink, Github, Folder } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { useInView } from "@/hooks/use-in-view"
import { TechIconRow } from "./tech-icon"

const projects = [
  {
    title: "Postgres Job Queue",
    description:
      "A durable background-job queue on PostgreSQL. Workers claim jobs atomically with FOR UPDATE SKIP LOCKED, so no two workers take the same job and none wait on each other. A heartbeat lease, fenced updates and a reaper recover jobs from crashed or stalled workers; failed jobs retry with exponential backoff and jitter and end in a dead state that can be requeued; idempotency keys stop duplicate submissions. Verified with 81 integration tests against a real database, including killed workers, a database outage and graceful shutdown.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
    date: "Oct 2026",
    github: "https://github.com/mayankb72013/postgres-job-queue",
  },
  {
    title: "QuickBolt",
    description:
      "An AI web-app builder (Bolt.new-style). An Express backend uses the Claude API to classify the project type and generate a full project from a prompt; the model's XML output is parsed into file and shell steps, shown in a Monaco file tree, and run in an in-browser WebContainer with live preview and no server-side execution.",
    tech: ["Claude AI", "React", "WebContainers", "Node.js"],
    date: "Aug 2025 - Present",
    github: "https://github.com/mayankb72013/QuickBolt",
  },
  {
    title: "ChatApp",
    description:
      "A real-time, ephemeral chat application with WebSocket-based communication. Features temporary, anonymous chat rooms where all data is automatically erased once users leave.",
    tech: ["MongoDB", "Express", "React", "Node.js", "WebSockets"],
    date: "Mar 2025 - May 2025",
    github: "https://github.com/mayankb72013/",
  },
  {
    title: "HD Wallet Web App",
    description:
      "A multi-chain wallet that derives Ethereum and Solana accounts from a single BIP39 mnemonic (PBKDF2 seed, BIP32 master key, BIP44 derivation paths) using Ethers.js and Solana Web3.js. Published a technical write-up of the derivation on Hashnode.",
    tech: ["Next.js", "TypeScript", "Ethers.js", "Solana.js", "BIP39"],
    date: "Sept 2025 - Oct 2025",
    github: "https://github.com/mayankb72013/web-based-wallet",
  },
  {
    title: "Canvix",
    description:
      "A real-time collaborative whiteboard with multi-user drawing, shape manipulation and room-based sync over WebSockets. A dual-canvas design (a preview layer for active drag, resize and rotate; a committed layer for finished shapes) avoids full-scene re-renders, and event-based undo/redo records shape operations instead of canvas snapshots to cut memory use. Turborepo monorepo with shared TypeScript packages; open-sourced.",
    tech: ["React", "TypeScript", "Canvas API", "WebSockets", "Node.js"],
    date: "Feb 2026 - Present",
    github: "https://github.com/mayankb72013/canvix",
    liveLink: "https://canvix.random-idea.com/"
  },
];

export function Projects() {
  const { ref, isInView } = useInView()

  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading number="03" title="Projects" />

        <div className="mt-8 grid gap-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-card/80"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Folder size={20} />
                </div>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  <a
                    href={project.liveLink || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`External link for ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-2">
                <span className="font-mono text-xs text-muted-foreground/60">
                  {project.date}
                </span>
              </div>

              <div className="mt-4">
                <TechIconRow items={project.tech} size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}