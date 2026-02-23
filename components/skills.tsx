"use client"

import { SectionHeading } from "./section-heading"
import { useInView } from "@/hooks/use-in-view"
import { TechIcon } from "./tech-icon"

const skillCategories = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "C", "C++", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Next.js", "Recoil", "Tailwind CSS"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Dev & Build",
    items: ["Monorepos", "Turborepo", "Docker", "WebSockets", "REST APIs"],
  },
  {
    title: "Tools & Cloud",
    items: ["Git", "AWS Cloud", "VS Code", "IntelliJ"],
  },
  {
    title: "Computer Science",
    items: ["Data Structures", "Algorithms"],
  },
]

export function Skills() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading number="04" title="Technical Skills" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/30"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2.5">
                {category.items.map((skill) => (
                  <TechIcon
                    key={skill}
                    name={skill}
                    size={16}
                    showLabel={true}
                    className="rounded-md bg-secondary px-2.5 py-1.5 text-xs transition-colors hover:bg-primary/10"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
