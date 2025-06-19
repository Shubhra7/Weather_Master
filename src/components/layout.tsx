import type { PropsWithChildren } from 'react'
import Header from './header'
import { Github, Linkedin } from "lucide-react"

const Layout = ({children}: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header/>
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
            <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 text-center text-gray-500 space-y-4">
          <p>Created by Shubhrajit © 2025</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Shubhra7"  // replace with your actual username
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubhrajit-ghosh-9ab352288"  // replace with your actual profile link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
