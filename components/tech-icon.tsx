"use client"

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiAmazonwebservices,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiTurborepo,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { TbBrandCpp, TbBrandSocketIo } from "react-icons/tb"
import { VscCode } from "react-icons/vsc"
import type { IconType } from "react-icons"

const iconMap: Record<string, { icon: IconType; color: string }> = {
  react: { icon: SiReact, color: "#61DAFB" },
  "next.js": { icon: SiNextdotjs, color: "#ffffff" },
  nextjs: { icon: SiNextdotjs, color: "#ffffff" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  ts: { icon: SiTypescript, color: "#3178C6" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  "tailwind css": { icon: SiTailwindcss, color: "#06B6D4" },
  tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  "node.js": { icon: SiNodedotjs, color: "#339933" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  postgresql: { icon: SiPostgresql, color: "#4169E1" },
  docker: { icon: SiDocker, color: "#2496ED" },
  git: { icon: SiGit, color: "#F05032" },
  "aws cloud": { icon: SiAmazonwebservices, color: "#FF9900" },
  html: { icon: SiHtml5, color: "#E34F26" },
  css: { icon: SiCss3, color: "#1572B6" },
  java: { icon: FaJava, color: "#ED8B00" },
  c: { icon: TbBrandCpp, color: "#A8B9CC" },
  "c++": { icon: TbBrandCpp, color: "#00599C" },
  expressjs: { icon: SiExpress, color: "#ffffff" },
  turborepo: { icon: SiTurborepo, color: "#EF4444" },
  websockets: { icon: TbBrandSocketIo, color: "#25C2A0" },
  "vs code": { icon: VscCode, color: "#007ACC" },
  "ethers.js": { icon: SiJavascript, color: "#F7DF1E" },
  "solana.js": { icon: SiJavascript, color: "#9945FF" },
  "claude ai": { icon: SiReact, color: "#D97757" },
  webcontainers: { icon: SiNodedotjs, color: "#1389FD" },
  sql: { icon: SiPostgresql, color: "#4169E1" },
  "sql (postgresql)": { icon: SiPostgresql, color: "#4169E1" },
  recoil: { icon: SiReact, color: "#3578E5" },
  "rest apis": { icon: SiExpress, color: "#ffffff" },
  monorepos: { icon: SiTurborepo, color: "#EF4444" },
  intellij: { icon: FaJava, color: "#FE315D" },
}

interface TechIconProps {
  name: string
  size?: number
  showLabel?: boolean
  className?: string
}

export function TechIcon({ name, size = 16, showLabel = true, className = "" }: TechIconProps) {
  const key = name.toLowerCase()
  const entry = iconMap[key]

  if (!entry) {
    return showLabel ? (
      <span className={`inline-flex items-center gap-1.5 ${className}`}>
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-primary/20 font-mono text-[9px] font-bold text-primary">
          {name.charAt(0)}
        </span>
        <span className="font-mono text-xs text-secondary-foreground">{name}</span>
      </span>
    ) : null
  }

  const Icon = entry.icon

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <Icon size={size} style={{ color: entry.color }} className="shrink-0" />
      {showLabel && <span className="font-mono text-xs text-secondary-foreground">{name}</span>}
    </span>
  )
}

export function TechIconRow({ items, size = 14 }: { items: string[]; size?: number }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <TechIcon key={item} name={item} size={size} showLabel={true} />
      ))}
    </div>
  )
}
