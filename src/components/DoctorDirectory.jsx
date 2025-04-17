import { useState } from "react";
import DoctorCard from "./DoctorCard";
import { doctors } from "../data/doctors";

export default function DoctorDirectory({ onBook }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const specialties = [...new Set(doctors.map((d) => d.specialty))];

  const filteredDoctors = doctors.filter((doctor) => {
    const specialtyMatch = selectedSpecialty
      ? doctor.specialty === selectedSpecialty
      : true;
    const availabilityMatch = onlyAvailable
      ? doctor.availability.length > 0
      : true;
    return specialtyMatch && availabilityMatch;
  });

  return (
    <section className="mb-8">
      <div className="flex justify-between gap-4 p-[1rem]">
        <div className="w-1/2">
          <select
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            value={selectedSpecialty}
            aria-label="Filter by specialty"
          >
            <option value="">All Specialties</option>
            {specialties.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        <div className="w-1/2 flex items-center justify-end">
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={() => setOnlyAvailable((prev) => !prev)}
              aria-label="Filter only available doctors"
            />
            Only Available
          </label>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 ">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} onBook={onBook} />
        ))}
      </div>
    </section>
  );
}
