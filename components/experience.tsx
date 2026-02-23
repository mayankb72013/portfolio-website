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
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading number="02" title="Experience" />

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
                "Developed a REST API using ExpressJS and MongoDB to store data.",
                "Collaborated directly with the founder and a small team to drive product and tech decisions.",
                "Developed and shipped end-to-end features across frontend and backend.",
                "Built 70% of the Web2 platform within the first month, including key pages and core functionality.",
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
