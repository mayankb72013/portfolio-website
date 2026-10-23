"use client"

import { ExternalLink } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { useInView } from "@/hooks/use-in-view"
import { TechIconRow } from "./tech-icon"

export function Experience() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <SectionHeading number="02" title="Experience" />

        <div className="mt-8">
          <div className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-card/80">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {"Software Engineer Intern"}
                  <span className="text-primary">{" @ Providence India"}</span>
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Hyderabad, India</span>
                  <ExternalLink size={12} className="text-primary/50" />
                </p>
              </div>
              <span className="whitespace-nowrap font-mono text-xs text-muted-foreground">
                {"May 2026 - July 2026"}
              </span>
            </div>

            <ul className="mt-5 flex flex-col gap-3">
              {[
                "Redesigned file transfer in the Data Exchange Platform (DXP), a healthcare secure-transfer app, with chunk-based streaming at constant memory, removing a ~2 GB ceiling that blocked 50 GB+ production transfers.",
                "Implemented resumable FTPS/SFTP transfers with checkpoint recovery (REST offsets, since FTPS streams are not seekable) and atomic .tmp staging with rename, so interrupted jobs resume from the last committed chunk and never leave partial files.",
                "Developed checkpoint persistence in C# and ASP.NET to preserve transfer state across process restarts and execution failures.",
                "Built a T-SQL cron engine (5 stored procedures, 3 scalar functions) with L/W/# syntax and per-job error isolation that scans 2,500+ scheduled jobs against a deployment window in seconds; shipped to production in one week and adopted as the standard pre-release job-impact tool.",
                "Added a per-connection SFTP host-key enforcement toggle so server migrations no longer block jobs; wrote design documents as ADRs and shipped through Agile sprints with full code reviews.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <TechIconRow
                items={[
                  "C#",
                  "ASP.NET",
                  "SQL",
                  "REST APIs",
                  "Git",
                  "Debugging",
                ]}
                size={14}
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-card/80">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {"Full Stack Intern"}
                  <span className="text-primary">{" @ OriginHash"}</span>
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>THub, Hyderabad</span>
                  <ExternalLink size={12} className="text-primary/50" />
                </p>
              </div>
              <span className="whitespace-nowrap font-mono text-xs text-muted-foreground">
                {"May 2025 - Jun 2025"}
              </span>
            </div>

            <ul className="mt-5 flex flex-col gap-3">
              {[
                "Architected and delivered 70% of the Web2 platform in the first month: a React frontend and a Node.js/Express backend on MongoDB, with 15+ REST APIs and MongoDB schemas.",
                "Built a blockchain-based traceability flow with a document verification system, using Merkle tree hashing for instant verification of agreements.",
                "Integrated an OCR model into the Node.js backend for image verification, working directly with the founder and a small team.",
                "Used multer for file storage and document verification operations.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <TechIconRow items={["ExpressJS", "MongoDB", "React", "Node.js", "REST APIs", "TypeScript"]} size={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}