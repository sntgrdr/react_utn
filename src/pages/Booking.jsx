import { useState } from 'react'
import ServicesCarousel from '../components/ServicesCarousel'
import BookingCalendar from '../components/BookingCalendar'
import BookingForm from '../components/BookingForm'

function Booking() {
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [showForm, setShowForm] = useState(false)

  return (
    <section id="booking" className="min-h-screen py-20 flex items-center bg-white">
      <div className="max-w-5xl mx-auto px-4 w-full">

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-3">
            Reserva tu <span className="text-[#1A2E87]">Cita</span>
          </h2>
          <p className="text-gray-500">Elegí un servicio y una fecha para tu próxima visita.</p>
        </div>

        {/* Carrusel de servicios */}

        {!showForm ? (
          <>
            <ServicesCarousel selected={selectedService} onSelect={setSelectedService} />
            {/* Panel de calendario e información */}
            <div className="rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Panel izquierdo — oscuro */}
                <div className="bg-[#121212] text-white p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Tu <span className="text-[#1A2E87]">Experiencia</span> Premium
                    </h3>
                    <p className="text-gray-400 mb-8">
                      Seleccioná un servicio del carrusel y elegí el día que prefieras en el calendario.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <i className="bi bi-patch-check text-[#1A2E87] text-2xl"></i>
                      <span className="text-sm font-semibold">Satisfacción garantizada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="bi bi-clock-history text-[#1A2E87] text-2xl"></i>
                      <span className="text-sm font-semibold">Puntualidad y profesionalismo</span>
                    </div>
                  </div>
                </div>

                {/* Panel derecho — calendario */}
                <div className="bg-white">
                  <BookingCalendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
                </div>

              </div>
            </div>

            {/* Botón de reserva */}
            {selectedService && selectedDate && (
              <div className="text-center mt-8">
                <p className="text-gray-500 text-sm mb-3">
                  {selectedService.name} — {selectedDate.toLocaleDateString('es-ES', {
                    day: 'numeric', month: 'long', year: 'numeric',
                  })}
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-[#1A2E87] text-white px-10 py-3 rounded-lg font-bold tracking-wide hover:bg-[#121212] transition-colors text-lg"
                >
                  Reservar
                </button>
              </div>
            )}
          </>
        ) : (
          <BookingForm
            service={selectedService}
            date={selectedDate}
            onConfirm={() => {
              setShowForm(false)
              setSelectedService(null)
              setSelectedDate(null)
            }}
            onCancel={() => {
              setShowForm(false)
              setSelectedDate(null)
            }}
          />
        )}

      </div>
    </section>
  )
}

export default Booking
