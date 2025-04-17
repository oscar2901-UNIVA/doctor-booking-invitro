import { useStore } from "./store/useStore";
import DoctorDirectory from "./components/DoctorDirectory";
import BookingModal from "./components/BookingModal";
import AppointmentSummary from "./components/AppointmentSummary";

export default function App() {
  const { setSelectedDoctor } = useStore();

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-start ">
      <div className="w-full max-w-6xl px-6 py-10">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-blue-700">
            InVitro Capital – Doctor Booking
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Search for specialists, book an appointment, and manage your
            schedule.
          </p>
        </header>

        <DoctorDirectory onBook={setSelectedDoctor} />
        <AppointmentSummary />
      </div>
      <BookingModal />
    </main>
  );
}
