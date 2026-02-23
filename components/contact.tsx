"use client"

import { Mail } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { useInView } from "@/hooks/use-in-view"

export function Contact() {
  const { ref, isInView } = useInView()

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-xl text-center transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeading number="05" title="Get In Touch" />

        <p className="mt-6 leading-relaxed text-muted-foreground">
          {"I'm currently looking for new opportunities and my inbox is always open. Whether you have a question, want to collaborate on a project, or just want to say hi, feel free to reach out!"}
        </p>

        <a
          href="mailto:balmoorimayank@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-8 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/10"
        >
          <Mail size={16} />
          Say Hello
        </a>
      </div>
    </section>
  )
}
