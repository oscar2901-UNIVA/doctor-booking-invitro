import { useStore } from './store/useStore';
import DoctorDirectory from './components/DoctorDirectory';
import BookingModal from './components/BookingModal';
import AppointmentSummary from './components/AppointmentSummary';

export default function App() {
  const { setSelectedDoctor } = useStore();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-blue-700">InVitro Capital – Doctor Booking</h1>
        <p className="text-sm text-gray-600 mt-1">
          Search for specialists, book an appointment, and manage your schedule.
        </p>
      </header>

      <DoctorDirectory onBook={setSelectedDoctor} />
      <BookingModal />
      <AppointmentSummary />
    </main>
  );
}
