# Doctor Booking UI – InVitro Capital

This project is a responsive and accessible front-end module for appointment booking, developed for InVitro Capital. It allows users to browse a directory of doctors, filter by specialty and availability, book appointments, and view a summary of scheduled consultations. All data is mocked locally with no backend integration.

---

## Features

### Doctor Directory

- Displays a list of doctors with photo, name, specialty, location, rating, and availability
- Filter options for specialty and availability
- Responsive layout with accessible interaction elements

### Booking Modal

- Opens upon clicking "Book Appointment"
- Shows the doctor's name and mock time slots
- Users can select a time slot and confirm their appointment

### Appointment Summary

- Lists all confirmed appointments with name, specialty, time, and location
- Updates dynamically upon new bookings

---

## Technology Stack

- React with Vite for efficient development and performance
- Tailwind CSS for responsive, utility-first styling
- Zustand for managing global state in a minimal and scalable way
- JavaScript (ES6+)

---

## Accessibility Considerations

- Full keyboard navigation support (tab, enter, escape)
- Use of semantic HTML and appropriate ARIA attributes
- Interactive elements accessible via screen readers
- Layout adapts to mobile, tablet, and desktop resolutions
- Basic compliance verified with Lighthouse and axe DevTools

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/doctor-booking-invitro.git
cd doctor-booking-invitro

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## Project Structure

```
src/
├── components/          # UI components (DoctorCard, BookingModal, etc.)
├── data/                # Mocked doctor data
├── store/               # Global state (Zustand)
├── App.jsx              # Main application
└── index.css            # Tailwind base styles
```

---

## Limitations

- All data is mocked and stored in memory
- No backend or persistent data storage
- No user authentication or account handling
- Booked appointments are lost on page reload

---

## Future Improvements

- Implement localStorage for client-side persistence
- Connect to a real API or backend for dynamic data
- Add calendar view and support appointment cancellation
- Enable user login and profile-specific booking

---

## License

This project is licensed under the MIT License. It is open for educational and internal development purposes.

## Live Demo

https://doctor-booking-invitro.vercel.app/
