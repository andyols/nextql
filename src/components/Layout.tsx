import Link from "next/link"
import React from "react"

interface LayoutProps {
  link?: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ link = "home", children }) => {
  return (
    <div className="container pt-16 mx-auto">
      <Link href={link === "home" ? "/" : `/${link}`}>
        <a className="hover:underline hover:cursor-pointer font-semibold">{link}</a>
      </Link>
      {children}
    </div>
  )
}
