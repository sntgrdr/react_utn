import { services } from '../data/services'
import ServiceCard from './ServiceCard'

function ServicePicker() {
  return (
    <div
      className="gap-4"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {services.map(service =>
        <ServiceCard key={service.id} {...service} />
      )}
    </div>
  )
}

export default ServicePicker
