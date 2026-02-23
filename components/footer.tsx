import { Github, Linkedin, Mail, Phone } from "lucide-react"

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/mayankb72013/",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mayank-balmoori/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:balmoorimayank@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+918143108659",
    icon: Phone,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {"Built by Mayank Balmoori"}
        </p>
      </div>
    </footer>
  )
}
