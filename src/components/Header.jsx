import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "About", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-slate-200 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4">
        <Link to="/">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-slate-500">Arun</span>
            <span className="text-slate-700">Raja K</span>
          </h1>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to = {item.href}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-200 transition-colors text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}  
        >
          {isMenuOpen ? <X size = {24} /> : <Menu size = {24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-200 border-t border-slate-300">
          <nav className="px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key = {item.name} >
                  <Link
                    to = {item.href}
                    className="block text-slate-700 hover:text-blue-400 font-medium transition-colors duration-200 py-2"
                    onClick = {() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
