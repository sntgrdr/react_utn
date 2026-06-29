import useContactForm from '../hooks/useContactForm'

function Contact() {
  const { formData, handleReset, handleSubmit, handleChange } = useContactForm()

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-100 flex items-center">
      <div className="max-w-2xl mx-auto px-4 w-full">

        {/* Tarjeta de formulario */}
        <div className="bg-white rounded-xl shadow-md p-10 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Ponte en <span className="text-[#1A2E87]">Contacto</span>
            </h1>
            <p className="text-gray-500">¿Tienes alguna pregunta? Nos encantaría escucharte.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1A2E87]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nombre@ejemplo.com"
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1A2E87]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="¿Cómo podemos ayudarte?"
                rows={4}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1A2E87]"
              />
            </div>

            <div className="flex gap-3 pt-2 justify-center">
              <button
                type="submit"
                className="bg-[#4F4C4C] text-white px-6 py-2 font-bold tracking-wide rounded hover:bg-[#1A2E87] transition-colors"
              >
                ENVIAR MENSAJE
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="border border-gray-400 text-gray-600 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
              >
                RESTABLECER
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-md p-10">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold">Nuestra Ubicación</h3>
            <p className="text-gray-500 text-sm">Visítanos en el corazón de la ciudad.</p>
          </div>
          <div className="rounded overflow-hidden shadow-sm mb-4" style={{ height: '350px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6173000000003!2d-73.985428!3d40.748441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1713200000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación Magnific Peluquería"
            ></iframe>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold mb-0">
                <i className="bi bi-geo-alt-fill text-[#1A2E87] mr-2"></i>
                123 Calle del Estilo, Distrito Central
              </p>
              <p className="text-sm text-gray-500 ml-6">Nueva York, NY 10001</p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="border border-gray-800 text-gray-800 text-sm px-3 py-1 rounded hover:bg-gray-800 hover:text-white transition-colors"
            >
              Abrir en Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
