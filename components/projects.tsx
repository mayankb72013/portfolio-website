"use client"

import { ExternalLink, Github, Folder } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { useInView } from "@/hooks/use-in-view"
import { TechIconRow } from "./tech-icon"

const projects = [
  {
    title: "Bolt.new Clone",
    description:
      "A Bolt.new clone that turns natural language prompts into full-stack web apps using Claude AI. Features in-browser code editing with real-time file generation and execution using WebContainers.",
    tech: ["Claude AI", "React", "WebContainers", "Node.js"],
    date: "Aug 2025 - Present",
    github: "https://github.com/mayankb72013/",
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
      "A multi-chain web wallet supporting both Ethereum and Solana accounts derived from a single BIP39 seed phrase. Implements HD wallet key derivation and mnemonic-based account generation.",
    tech: ["Next.js", "TypeScript", "Ethers.js", "Solana.js", "BIP39"],
    date: "Sept 2025 - Oct 2025",
    github: "https://github.com/mayankb72013/",
  },
]

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
                    href={project.github}
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
