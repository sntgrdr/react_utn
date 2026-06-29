function Footer() {
  return (
    <footer
      className="bg-[#121212] text-white py-12"
      style={{ borderTop: '5px solid #1A2E87' }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Columna 1 — Marca */}
          <div>
            <h5 className="font-bold mb-4 text-[#1A2E87] text-lg">Magnific Peluquería</h5>
            <p className="text-sm text-gray-400 mb-6">
              Cortes de precisión y cuidado del cabello de lujo para el individuo moderno. Elevando el estilo desde 2015.
            </p>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="text-white hover:text-[#1A2E87] transition-colors opacity-80 hover:opacity-100">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-[#1A2E87] transition-colors opacity-80 hover:opacity-100">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-[#1A2E87] transition-colors opacity-80 hover:opacity-100">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* Columna 2 — Enlaces rápidos */}
          <div className="md:ml-auto">
            <h6 className="font-bold mb-4 text-[#1A2E87]">Enlaces Rápidos</h6>
            <ul className="space-y-2 text-sm list-none p-0">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#1A2E87] transition-all no-underline">Inicio</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#1A2E87] transition-all no-underline">Nosotros</a>
              </li>
              <li>
                <a href="#info" className="text-gray-400 hover:text-[#1A2E87] transition-all no-underline">Cuidado Capilar</a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-[#1A2E87] transition-all no-underline">Reservar</a>
              </li>
            </ul>
          </div>

          {/* Columna 3 — Horarios */}
          <div>
            <h6 className="font-bold mb-4 text-[#1A2E87]">Horarios de Atención</h6>
            <ul className="space-y-2 text-sm text-gray-400 list-none p-0">
              <li className="flex justify-between">
                <span>Lun - Vie</span>
                <span>09:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; 2026 Magnific Peluquería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
