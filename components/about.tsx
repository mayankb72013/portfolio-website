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
              {"I'm a Computer Science student at "}
              <span className="text-foreground font-medium">VIT, Vellore</span>
              {" with a current CGPA of "}
              <span className="text-foreground font-medium">8.97 / 10</span>
              {". I love working across the entire stack, from crafting polished user interfaces to designing robust backend systems."}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {"Currently, I'm working as a "}
              <span className="font-medium text-foreground">Software Engineer Intern at Providence India</span>
              {", where I'm contributing to enterprise healthcare technology systems, implementing resilient file-transfer workflows, and learning how large-scale production systems are designed and maintained."}
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              {"Previously, I worked as a "}
              <span className="font-medium text-foreground">Full Stack Intern at OriginHash</span>
              {", where I built and shipped end-to-end features across the frontend and backend, helping develop a significant portion of the company's Web2 platform. "}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{"I'm particularly interested in backend engineering, developer tools, cloud infrastructure, distributed systems, and building products that solve real-world problems."}</p>
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
