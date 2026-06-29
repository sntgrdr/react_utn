import PropTypes from 'prop-types'

function ServiceCard({ name, price, src }) {
  return (
    <div className="relative h-[300px] overflow-hidden rounded border border-gray-200 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <img
        src={src}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-400">
        <span className="text-white uppercase font-bold tracking-widest text-lg opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 text-center">
          {name}
        </span>
      </div>
    </div>
  )
}

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
}

export default ServiceCard
