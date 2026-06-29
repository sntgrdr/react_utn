import video from '../assets/home_hairsalon_video.mp4'
import professionalCut from '../assets/home_professional_cut.jpg'
import professionalTreatment from '../assets/home_professional_treatment.jpg'

function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 text-center w-full">

        {/* Portada */}
        <div
          className="relative mx-auto mb-16 rounded-xl overflow-hidden flex items-center justify-center"
          style={{ width: '80%', height: '33.33vh', backgroundColor: '#000' }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div
            className="relative z-10 px-16 py-8 text-white text-center"
            style={{
              border: '2px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(0,0,0,0.3)',
              borderRadius: '80px',
            }}
          >
            <h1 className="font-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>
              Eleva tu <span className="text-[#1A2E87]">Estilo</span>
            </h1>
            <p className="mb-0" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.25rem)' }}>
              La máxima experiencia de cuidado personal en el corazón de la ciudad.
            </p>
          </div>
        </div>

        {/* Tarjetas destacadas */}
        <div className="grid grid-cols- md:grid-cols-2 gap-40 justify-center max-w-3xl mx-auto mb-20">
          {/* Tarjeta 1 */}
          <div className="rounded-xl border-0 shadow-md hover:-translate-y-2 transition-transform duration-300 overflow-hidden flex flex-col">
            <img src={professionalCut} alt="Cortes Profesionales" className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col bg-white text-left flex-1">
              <h3 className="text-lg font-bold mb-2">Cortes Profesionales</h3>
              <p className="text-gray-500 text-sm mb-4">
                Barberos y estilistas expertos dedicados a crear tu look perfecto con precisión y cuidado.
              </p>
              <a
                href="#about"
                className="mt-auto border-2 border-[#1A2E87] text-[#1A2E87] px-4 py-2 rounded text-sm font-semibold hover:bg-[#1A2E87] hover:text-white transition-colors text-center"
              >
                Saber Más
              </a>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="rounded-xl border-0 shadow-md hover:-translate-y-2 transition-transform duration-300 overflow-hidden flex flex-col">
            <img src={professionalTreatment} alt="Cuidado de Lujo" className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col bg-white text-left flex-1">
              <h3 className="text-lg font-bold mb-2">Cuidado de Lujo</h3>
              <p className="text-gray-500 text-sm mb-4">
                Servicio completo de arreglo de barba, afeitado con toalla caliente y tratamientos relajantes para el individuo moderno.
              </p>
              <a
                href="#booking"
                className="mt-auto border-2 border-[#1A2E87] text-[#1A2E87] px-4 py-2 rounded text-sm font-semibold hover:bg-[#1A2E87] hover:text-white transition-colors text-center"
              >
                Reservar Ahora
              </a>
            </div>
          </div>
        </div>

        {/* Mapa + Reseñas */}
        <div className="mx-auto" style={{ width: '80%' }}>
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center text-center">
            {/* Reseñas */}
            <div className="px-2">
              <h4 className="font-bold mb-6">Lo Que Dicen Nuestros Clientes</h4>
              <div
                className="mb-4 p-4 bg-gray-100 rounded hover:translate-x-1 transition-transform"
                style={{ borderLeft: '4px solid #1A2E87' }}
              >
                <div className="flex items-center mb-2 gap-1">
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <span className="ml-2 font-bold text-sm">Alex Morgan</span>
                </div>
                <p className="text-sm italic mb-0">
                  "El mejor corte de cabello que he tenido en años. La atención al detalle no tiene igual. ¡Muy recomendado!"
                </p>
              </div>
              <div
                className="p-4 bg-gray-100 rounded hover:translate-x-1 transition-transform"
                style={{ borderLeft: '4px solid #1A2E87' }}
              >
                <div className="flex items-center mb-2 gap-1">
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <span className="ml-2 font-bold text-sm">Jamie Smith</span>
                </div>
                <p className="text-sm italic mb-0">
                  "Ambiente profesional y buena música. Es más que un simple corte, es una experiencia."
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
