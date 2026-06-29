# Magnific Peluquería — Proyecto Final UTN Frontend

SPA en React para una peluquería ficticia, desarrollada como proyecto final del ciclo de Desarrollo Frontend en UTN. Originalmente maquetada en HTML/CSS y migrada completamente a React con Vite.

## Sobre el proyecto

Sitio web de una sola página para "Magnific Peluquería" con cuatro secciones accesibles desde la barra de navegación fija:

- **Home** — hero con video, dos tarjetas destacadas (cortes y tratamientos) y reseñas de clientes.
- **Galería** — grilla de servicios con efecto hover (superposición con nombre y precio).
- **Contacto** — formulario controlado para enviar mensajes; los datos se muestran por consola al enviar y se puede resetear.
- **Reservas** — flujo de reserva en múltiples pasos: elegir un servicio del carrusel infinito → elegir una fecha en el calendario → completar un formulario que reemplaza el panel del calendario al confirmar.

---

## Tecnologías utilizadas

| Herramienta | Rol |
|---|---|
| React 19 + Vite | Base del proyecto |
| React Router v6 | Enrutamiento + anclas de navegación dentro de la página |
| Tailwind CSS v4 | Estilos de todos los componentes |
| shadcn/ui | Componentes Calendar y Carousel |
| Bootstrap Icons | Iconografía (`bi bi-*`) |
| PropTypes | Validación de props en todos los componentes que las reciben |

---

## Estructura del proyecto

```
src/
├── App.jsx                  # Raíz — conecta todas las páginas mediante Router
├── main.jsx                 # Punto de entrada — monta BrowserRouter
├── assets/                  # Imágenes estáticas y video
│   └── services_imgs/       # Una imagen por cada servicio
├── components/
│   ├── Navbar.jsx           # Barra de navegación fija con anclas
│   ├── Footer.jsx           # Footer reutilizable
│   ├── ServiceCard.jsx      # Componente tarjeta — recibe name, price, src como props
│   ├── ServicePicker.jsx    # Renderiza el array de servicios como grilla de ServiceCard
│   ├── ServicesCarousel.jsx # Carrusel infinito con arrastre para seleccionar servicio
│   ├── BookingCalendar.jsx  # Wrapper del Calendar de shadcn — deshabilita fechas pasadas
│   ├── BookingForm.jsx      # Formulario de confirmación — recibe servicio y fecha como props
│   └── ui/                  # Componentes generados por shadcn/ui (calendar, carousel, button)
├── data/
│   └── services.js          # Array de servicios (id, name, price, src)
├── hooks/
│   └── useContactForm.jsx   # Custom hook — maneja el estado name/email/message
└── pages/
    ├── Home.jsx
    ├── Gallery.jsx
    ├── Contact.jsx
    └── Booking.jsx
```

---

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

---

## Criterios de aceptación

### 1. Estructura principal en React

| Requisito | Implementación |
|---|---|
| Proyecto nuevo con Vite | Inicializado con `npm create vite@latest -- --template react` |
| `src/components/` | Navbar, Footer, ServiceCard, ServicePicker, ServicesCarousel, BookingCalendar, BookingForm |
| `src/assets/` | Imágenes (`home_professional_cut.jpg`, `home_professional_treatment.jpg`, `services_imgs/`) y video (`home_hairsalon_video.mp4`) |
| `src/hooks/` | `useContactForm.jsx` — encapsula el estado `formData`, `handleChange`, `handleSubmit`, `handleReset` |
| `App.jsx` como conector principal | `App.jsx` renderiza las cuatro páginas dentro de un único `Route path="/"` para que compartan el mismo contexto de scroll |

### 2. Componentización

| Requisito | Implementación |
|---|---|
| **Navbar** | `Navbar.jsx` — fija, reutilizable, usa `<a href="#seccion">` para navegar entre secciones y `NavLink` para el logo |
| **Home** | `Home.jsx` — hero con video, dos tarjetas con imágenes y texto, sección de reseñas |
| **Cards** | `ServiceCard.jsx` — recibe `name` (string), `price` (number), `src` (string) como props; PropTypes declarados |
| **Gallery** | `Gallery.jsx` → `ServicePicker.jsx` → `ServiceCard.jsx` — el array de servicios de `data/services.js` se pasa como spread props a cada tarjeta |
| **Contact** | `Contact.jsx` — formulario completamente controlado; todos los valores de los inputs viven en el estado de `useContactForm` |
| **Footer** | `Footer.jsx` — componente footer reutilizable |
| **PropTypes** | `ServiceCard` (name, price, src), `BookingCalendar` (selectedDate: `Date`, onSelectDate: `func`), `BookingForm` (service: `object`, date: `Date`, onConfirm/onCancel: `func`), `ServicesCarousel` (selected: `object`, onSelect: `func`) |

### 3. Interactividad con React

| Requisito | Implementación |
|---|---|
| `useState` para inputs del formulario | `useContactForm.jsx` maneja `{ name, email, message }` con un único `useState` |
| Manejo del submit | `handleSubmit` llama a `event.preventDefault()` y muestra todos los valores por consola |
| Manejo del reset | `handleReset` resetea `formData` a strings vacíos; conectado al botón "Restablecer" |
| `event.preventDefault()` | Presente en `useContactForm.jsx` — evita la recarga de la página al enviar el formulario |
| Estado adicional | `Booking.jsx` maneja `selectedService`, `selectedDate` y `showForm` — el renderizado condicional alterna entre el panel del calendario y `BookingForm` según las selecciones del usuario |

### 4. Estilos

| Requisito | Implementación |
|---|---|
| Estilos por componente | Clases utilitarias de Tailwind CSS v4 aplicadas directamente en el JSX — ningún componente supera las 10 reglas CSS propias, por lo que no se requieren archivos CSS separados |
| Hasta 2 componentes de librería | **shadcn/ui Calendar** (selector de fecha en `BookingCalendar.jsx`) y **shadcn/ui Carousel** (selector de servicio en `ServicesCarousel.jsx`), cumpliendo el mismo rol que los 2 componentes de Bootstrap permitidos |

> Nota: no se utilizó Bootstrap. Se eligió shadcn/ui como alternativa más nativa para React — copia el código fuente del componente directamente en el proyecto en lugar de agregar una dependencia externa.

### 5. Navegación

| Requisito | Implementación |
|---|---|
| React Router v6 | `BrowserRouter` envuelve la app en `main.jsx`; `Routes` y `Route` definidos en `App.jsx` |
| Navegación entre secciones | `Navbar.jsx` usa `<a href="#home">`, `<a href="#about">`, `<a href="#contact">`, `<a href="#booking">` — scroll suave via `scroll-behavior: smooth` en `index.css` |
| Ruta 404 | `<Route path="*">` muestra un mensaje de página no encontrada para cualquier URL desconocida |
| Enfoque combinado | React Router satisface el requisito de enrutamiento; los enlaces de anclaje permiten la navegación entre secciones como alternativa a rutas separadas |

---

## Entrega

Repositorio público de GitHub entregado como proyecto final del ciclo de Desarrollo Frontend de UTN.
