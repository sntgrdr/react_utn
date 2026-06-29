import PropTypes from 'prop-types'
import useContactForm from '../hooks/useContactForm'

function BookingForm({ service, date, onConfirm, onCancel }) {
  // El hook maneja name, email y message — usamos message para el teléfono
  const { formData, handleChange, handleReset } = useContactForm()

  const handleConfirm = (e) => {
    e.preventDefault()

    // Loguea toda la información de la reserva
    console.log('Reserva confirmada:', {
      servicio: service.name,
      precio: service.price,
      fecha: date,
      nombre: formData.name,
      email: formData.email,
      telefono: formData.message,
    })

    onConfirm()   // avisa al padre que se confirmó
  }

  return (
    <div className="mt-8 max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-md p-8">
      <h3 className="text-xl font-bold mb-1 text-center">Datos para la reserva</h3>

      {/* Resumen de lo elegido */}
      <p className="text-center text-sm text-gray-500 mb-6">
        {service.name} — {date.toLocaleDateString('es-ES', {
          day: 'numeric', month: 'long', year: 'numeric',
        })}
      </p>

      <form onSubmit={handleConfirm} className="space-y-4">

        <div>
          <label className="block text-sm font-semibold mb-1">Nombre completo</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1A2E87]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nombre@ejemplo.com"
            required
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1A2E87]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Teléfono</label>
          <input
            type="tel"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="+54 11 1234 5678"
            required
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1A2E87]"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-[#1A2E87] text-white py-2 rounded font-bold hover:bg-[#121212] transition-colors"
          >
            Confirmar
          </button>
          <button
            type="button"
            onClick={() => { handleReset(); onCancel() }}
            className="flex-1 border border-gray-400 text-gray-600 py-2 rounded hover:bg-gray-100 transition-colors"
          >
            Cancelar
          </button>
        </div>

      </form>
    </div>
  )
}

BookingForm.propTypes = {
  service: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default BookingForm
