"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail, Phone, FileDown } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.78 0.12 175) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.12 175) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 font-mono text-sm text-primary md:text-base">
            {"Hi, my name is"}
          </p>
        </div>

        <div
          className={`transition-all delay-100 duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
            <span className="text-balance">Mayank Balmoori.</span>
          </h1>
        </div>

        <div
          className={`transition-all delay-200 duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl md:text-6xl">
            <span className="text-balance">I build full-stack web apps.</span>
          </h2>
        </div>

        <div
          className={`transition-all delay-300 duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {"I'm a Full Stack Developer and Computer Science student at "}
            <span className="text-foreground">
              {"VIT, Vellore"}
            </span>
            {". I specialize in building modern, performant web applications with React, Next.js, and the wider JavaScript ecosystem."}
          </p>
        </div>

        <div
          className={`mt-10 flex flex-wrap items-center gap-5 transition-all delay-[400ms] duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="/Mayank_Balmoori_Resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-md border border-primary bg-transparent px-5 py-2.5 font-mono text-sm text-primary transition-all hover:bg-primary/10"
          >
            <FileDown size={16} className="transition-transform group-hover:-translate-y-0.5" />
            Resume
          </a>
        </div>

        <div
          className={`mt-6 flex items-center gap-5 transition-all delay-500 duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="https://github.com/mayankb72013/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/mayank-balmoori/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:balmoorimayank@gmail.com"
            className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="tel:+918143108659"
            className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
            aria-label="Phone"
          >
            <Phone size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-all hover:text-primary ${
          mounted ? "animate-bounce opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
