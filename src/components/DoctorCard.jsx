export default function DoctorCard({ doctor, onBook }) {
  return (
    <div
      className="flex items-center gap-6 w-full max-w-3xl mx-auto border rounded-xl p-6 shadow-md bg-white mt-4"
      role="article"
      aria-label={`Doctor ${doctor.name}`}
    >
      <div className="p-[1rem]">
        <img
          src={doctor.photo}
          alt={`Portrait of ${doctor.name}`}
          className="w-24 h-24 rounded-full object-cover border"
        />
      </div>

      <div className="flex flex-1 justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{doctor.name}</h2>
          <p className="text-sm text-gray-700">{doctor.specialty}</p>
          <p className="text-sm text-gray-500">{doctor.location}</p>
          <p className="text-sm text-yellow-600">Rating: {doctor.rating}</p>
          <p className="text-sm text-green-700">
            Availability: {doctor.availability.length > 0 ? "Yes" : "No"}
          </p>
        </div>
        <div className="p-[1rem]">
          <button
            onClick={() => onBook(doctor)}
            className="ml-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium p-[1rem]"
            aria-label={`Book appointment with ${doctor.name}`}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}
