import { useStore } from "../store/useStore";

export default function AppointmentSummary() {
  const { appointments } = useStore();

  if (appointments.length === 0) {
    return (
      <section aria-label="No appointments" className="mt-12">
        <h2 className="text-xl font-semibold mb-2">Your Appointments</h2>
        <p className="text-sm text-gray-600">
          You have not booked any appointments yet.
        </p>
      </section>
    );
  }

  return (
    <section aria-label="Appointments Summary" className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Your Appointments</h2>
      <ul className="space-y-4">
        {appointments.map((appt, index) => (
          <li key={index} className="border rounded p-4 bg-white shadow-sm">
            <div className="p-[1rem]">
              <p className="font-medium">{appt.name}</p>
              <p className="text-sm text-gray-600">
                {appt.specialty} – {appt.location}
              </p>
              <p className="text-sm">
                Time: <strong>{appt.time}</strong>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
