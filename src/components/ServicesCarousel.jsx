import PropTypes from 'prop-types'
import { services } from '../data/services'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

function ServicesCarousel({ selected, onSelect }) {
  return (
    <div className="relative mb-8 px-10">
      <Carousel opts={{ loop: true, dragFree: true }}>

        <CarouselContent>
          {services.map((service) => {
            const isSelected = selected?.id === service.id

            return (
              <CarouselItem
                key={service.id}
                className="basis-1/5 cursor-pointer"
                onClick={() => onSelect(isSelected ? null : service)}
              >
                <div
                  className={`rounded-xl overflow-hidden border shadow-sm hover:-translate-y-1 transition-all duration-300 ${isSelected
                    ? 'border-[#1A2E87] ring-2 ring-[#1A2E87]'
                    : 'border-gray-200'
                    }`}
                >
                  <img src={service.src} alt={service.name} className="w-full h-24 object-cover" />
                  <div className="p-2 bg-white text-center">
                    <p className="text-xs font-bold truncate">{service.name}</p>
                    <p className="text-xs text-[#1A2E87] font-semibold">${service.price}</p>
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />

      </Carousel>
    </div>
  )
}

ServicesCarousel.propTypes = {
  selected: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
}

export default ServicesCarousel
