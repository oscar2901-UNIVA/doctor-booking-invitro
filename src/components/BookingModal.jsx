import { useEffect } from "react";
import { useStore } from "../store/useStore";

export default function BookingModal() {
  const { selectedDoctor, addAppointment, clearSelectedDoctor } = useStore();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") clearSelectedDoctor();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [clearSelectedDoctor]);

  if (!selectedDoctor) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-label={`Booking appointment with ${selectedDoctor.name}`}
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-2">{selectedDoctor.name}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {selectedDoctor.specialty} – {selectedDoctor.location}
        </p>
        <p className="mb-2 font-medium">Select a time slot:</p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {selectedDoctor.availability.length > 0 ? (
            selectedDoctor.availability.map((slot) => (
              <button
                key={slot}
                className="border rounded py-1 px-2 hover:bg-blue-100 focus:outline-none focus:ring"
                onClick={() => {
                  addAppointment({
                    ...selectedDoctor,
                    time: slot,
                  });
                  clearSelectedDoctor();
                }}
              >
                {slot}
              </button>
            ))
          ) : (
            <p className="col-span-2 text-gray-500 text-sm">
              No available time slots
            </p>
          )}
        </div>

        <button
          onClick={clearSelectedDoctor}
          className="text-sm text-red-500 underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
