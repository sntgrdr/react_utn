import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#121212] w-full">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <NavLink to="/" className="text-white font-bold uppercase tracking-wider text-lg">
          Magnific <span className="text-[#1A2E87]">Peluquería</span>
        </NavLink>
        <ul className="flex items-center gap-6">
          <li>
            <a href="#home" className="uppercase text-sm font-semibold tracking-wide transition-colors text-white hover:text-[#1A2E87]">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="uppercase text-sm font-semibold tracking-wide transition-colors text-white hover:text-[#1A2E87]">
              Galería
            </a>
          </li>
          <li>
            <a href="#contact" className="uppercase text-sm font-semibold tracking-wide transition-colors text-white hover:text-[#1A2E87]">
              Contacto
            </a>
          </li>
          <li>
            <a href="#booking" className="uppercase text-sm font-semibold tracking-wide px-4 py-2 rounded transition-colors bg-[#1A2E87] text-white hover:bg-white hover:text-black">
              Reservar Cita
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
