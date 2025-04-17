import { useEffect, useRef } from "react";
import { useStore } from "../store/useStore";

export default function BookingModal() {
  const { selectedDoctor, addAppointment, clearSelectedDoctor } = useStore();
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (selectedDoctor && dialog) {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog?.close();
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") clearSelectedDoctor();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedDoctor, clearSelectedDoctor]);

  if (!selectedDoctor) return null;

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black/40 rounded-2xl w-med max-w-lg p-0 border-none  shadow-xl open:flex open:flex-col open:items-stretch"
      aria-labelledby="booking-title"
      aria-modal="true"
    >
      <form method="dialog" className="relative w-full p-6 md:p-8">
        <button
          type="button"
          onClick={clearSelectedDoctor}
          className=" top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>

        <h2
          id="booking-title"
          className="text-2xl font-semibold text-gray-800 mb-1"
        >
          Book an Appointment
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          with {selectedDoctor.name} • {selectedDoctor.specialty} –{" "}
          {selectedDoctor.location}
        </p>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Available Time Slots:
          </h3>
          {selectedDoctor.availability.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {selectedDoctor.availability.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className="py-2 px-3 text-sm border rounded-md bg-gray-50 hover:bg-blue-50 transition text-gray-800 border-gray-300 hover:border-blue-400"
                  onClick={() => {
                    addAppointment({ ...selectedDoctor, time: slot });
                    clearSelectedDoctor();
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No available time slots</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={clearSelectedDoctor}
            className="text-sm text-red-500 hover:text-red-600  font-medium"
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
}
