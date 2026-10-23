"use client"

import { GraduationCap } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { useInView } from "@/hooks/use-in-view"

export function About() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <SectionHeading number="01" title="About Me" />

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="leading-relaxed text-muted-foreground">
              {"I'm a final-year Computer Science student at "}
              <span className="text-foreground font-medium">VIT, Vellore</span>
              {" (graduating 2027) with a CGPA of "}
              <span className="text-foreground font-medium">8.97 / 10</span>
              {". I like working across the whole stack, from polished user interfaces to robust backend systems."}
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              {"Right now I'm doing "}
              <span className="font-medium text-foreground">independent research under Dr. Nivitha K</span>
              {" (B.Tech Project-I), working on a journal manuscript about scheduling jobs on cloud GPU clusters, deciding which GPU should run each incoming job while balancing energy use against deadline risk."}
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              {"This summer I was a "}
              <span className="font-medium text-foreground">Software Engineer Intern at Providence India</span>
              {", working on a healthcare secure file-transfer platform. I redesigned transfers to stream in chunks at constant memory, made FTPS/SFTP transfers resumable from checkpoints, and built a T-SQL cron engine that the team adopted as its pre-release job-impact tool."}
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              {"Before that, as a "}
              <span className="font-medium text-foreground">Full Stack Intern at OriginHash (T-Hub)</span>
              {", I built much of the company's Web2 platform: a React frontend and a Node.js/Express backend on MongoDB with 15+ REST APIs."}
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              {"I'm most interested in backend engineering, distributed systems and reliable background processing, developer tools, and cloud infrastructure. I was also a finalist at the Caterpillar Hackathon 2026, one of fewer than 110 final-round teams."}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">VIT, Vellore</p>
                  <p className="text-xs text-muted-foreground">B.Tech CSE</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs text-muted-foreground">2023 - 2027</span>
                <span className="font-mono text-sm font-semibold text-primary">
                  {"8.97 CGPA"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}