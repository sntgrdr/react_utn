# Magnific Peluquería — UTN Frontend Final Project

React SPA for a fictional hair salon, built as the final project for the UTN Frontend Development course. Originally maquetted in HTML/CSS and fully migrated to React with Vite.

## What the app does

A single-page website for "Magnific Peluquería" with four sections reachable via the sticky navbar:

- **Home** — video hero, two feature cards (cuts & treatments), and client reviews.
- **Gallery** — grid of services with a hover reveal effect (name + price overlay).
- **Contact** — controlled form for sending messages; logs data to console on submit and resets on demand.
- **Booking** — multi-step appointment flow: pick a service from an infinite carousel → pick a date from a calendar → fill out a booking form that replaces the calendar panel on confirm.

---

## Tech stack

| Tool | Role |
|---|---|
| React 19 + Vite | Project base |
| React Router v6 | Routing + one-page section anchors |
| Tailwind CSS v4 | All component styling |
| shadcn/ui | Calendar and Carousel components |
| Bootstrap Icons | Icon set (`bi bi-*` classes) |
| PropTypes | Prop validation on all components that receive props |

---

## Project structure

```
react_web/
└── src/
    ├── App.jsx                  # Root — connects all pages via Router
    ├── main.jsx                 # Entry point — mounts BrowserRouter
    ├── assets/                  # Static images and video
    │   └── services_imgs/       # One image per service
    ├── components/
    │   ├── Navbar.jsx           # Sticky nav with anchor links
    │   ├── Footer.jsx           # Reusable footer
    │   ├── ServiceCard.jsx      # Card component — receives name, price, src as props
    │   ├── ServicePicker.jsx    # Renders services array as a ServiceCard grid
    │   ├── ServicesCarousel.jsx # Infinite drag carousel for service selection
    │   ├── BookingCalendar.jsx  # shadcn Calendar wrapper — disabled past dates
    │   ├── BookingForm.jsx      # Confirmation form — receives service + date as props
    │   └── ui/                  # shadcn/ui generated components (calendar, carousel, button)
    ├── data/
    │   └── services.js          # Service catalog array (id, name, price, src)
    ├── hooks/
    │   └── useContactForm.jsx   # Custom hook — manages name/email/message state
    └── pages/
        ├── Home.jsx
        ├── Gallery.jsx
        ├── Contact.jsx
        └── Booking.jsx
```

---

## Getting started

```bash
cd react_web
npm install
npm run dev
```

---

## Acceptance criteria

### 1. React project structure

| Requirement | Implementation |
|---|---|
| New project using Vite | Bootstrapped with `npm create vite@latest -- --template react` |
| `src/components/` | Navbar, Footer, ServiceCard, ServicePicker, ServicesCarousel, BookingCalendar, BookingForm |
| `src/assets/` | Images (`home_professional_cut.jpg`, `home_professional_treatment.jpg`, `services_imgs/`) and video (`home_hairsalon_video.mp4`) |
| `src/hooks/` | `useContactForm.jsx` — encapsulates `formData` state, `handleChange`, `handleSubmit`, `handleReset` |
| `App.jsx` as root connector | `App.jsx` renders all four pages inside a single `Route path="/"` so they share one scroll context |

### 2. Componentization

| Requirement | Implementation |
|---|---|
| **Navbar** | `Navbar.jsx` — sticky, reusable, uses `<a href="#section">` anchor links and `NavLink` for the logo |
| **Home** | `Home.jsx` — hero with video, two feature cards with images and text, reviews section |
| **Cards** | `ServiceCard.jsx` — receives `name` (string), `price` (number), `src` (string) as props; PropTypes declared |
| **Gallery** | `Gallery.jsx` → `ServicePicker.jsx` → `ServiceCard.jsx` — services array from `data/services.js` passed as spread props to each card |
| **Contact** | `Contact.jsx` — fully controlled form; all input values live in `useContactForm` state |
| **Footer** | `Footer.jsx` — reusable footer component |
| **PropTypes** | `ServiceCard` (name, price, src), `BookingCalendar` (selectedDate: `Date`, onSelectDate: `func`), `BookingForm` (service: `object`, date: `Date`, onConfirm/onCancel: `func`), `ServicesCarousel` (selected: `object`, onSelect: `func`) |

### 3. React interactivity

| Requirement | Implementation |
|---|---|
| `useState` for form inputs | `useContactForm.jsx` manages `{ name, email, message }` with a single `useState` |
| Submit handling | `handleSubmit` calls `event.preventDefault()`, logs all field values to console |
| Reset handling | `handleReset` resets `formData` to empty strings; wired to the "Restablecer" button |
| `event.preventDefault()` | Present in `useContactForm.jsx` — prevents page reload on form submit |
| Additional state management | `Booking.jsx` manages `selectedService`, `selectedDate`, and `showForm` — conditional rendering switches between the calendar panel and `BookingForm` based on user selections |

### 4. Styles

| Requirement | Implementation |
|---|---|
| Component styles | Tailwind CSS v4 utility classes applied directly in JSX — no component exceeds 10 custom CSS rules, so no separate CSS files are needed |
| Up to 2 library components | **shadcn/ui Calendar** (date picker in `BookingCalendar.jsx`) and **shadcn/ui Carousel** (service selector in `ServicesCarousel.jsx`), fulfilling the same role as the 2 allowed Bootstrap components |

> Note: Bootstrap was not used. shadcn/ui was chosen as a more React-native alternative — it copies component source directly into the project rather than adding an external dependency.

### 5. Navigation

| Requirement | Implementation |
|---|---|
| React Router v6 | `BrowserRouter` wraps the app in `main.jsx`; `Routes` and `Route` defined in `App.jsx` |
| Section navigation | `Navbar.jsx` uses `<a href="#home">`, `<a href="#about">`, `<a href="#contact">`, `<a href="#booking">` — smooth scroll via `scroll-behavior: smooth` in `index.css` |
| 404 route | `<Route path="*">` renders a not-found message for any unknown URL |
| Combined approach | React Router satisfies the routing requirement; anchor links enable one-page section travel as an alternative to separate routes |

---

## Delivery

Public GitHub repository submitted as the final project for UTN Frontend Development.
