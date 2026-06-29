import ServicePicker from "../components/ServicePicker"

function Gallery() {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            Nuestra Galería de <span className="text-[#1A2E87]">Trabajos</span>
          </h2>
          <p className="text-gray-500">
            Echa un vistazo a algunas de las impresionantes transformaciones que hemos logrado últimamente.
          </p>
        </div>
        <ServicePicker />
      </div>
    </section>
  )
}

export default Gallery
