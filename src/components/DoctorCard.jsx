export default function DoctorCard({ doctor, onBook }) {
  return (
    <div
      className="border rounded-lg p-4 shadow-sm bg-white flex flex-col items-center gap-2"
      role="article"
      aria-label={`Doctor ${doctor.name}`}
    >
      <img
        src={doctor.photo}
        alt={`Portrait of ${doctor.name}`}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="text-center">
        <h2 className="text-lg font-semibold">{doctor.name}</h2>
        <p className="text-sm text-gray-700">{doctor.specialty}</p>
        <p className="text-sm text-gray-500">{doctor.location}</p>
        <p className="text-sm text-yellow-600">Rating: {doctor.rating}</p>
        <p className="text-sm text-green-700">
          Availability: {doctor.availability.length > 0 ? "Yes" : "No"}
        </p>
      </div>
      <button
        onClick={() => onBook(doctor)}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        aria-label={`Book appointment with ${doctor.name}`}
      >
        Book Appointment
      </button>
    </div>
  );
}
