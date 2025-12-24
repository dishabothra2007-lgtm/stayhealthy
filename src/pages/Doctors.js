import { useState } from "react";
import doctors from "../data/doctors";
import DoctorCard from "../components/DoctorCard";

function Doctors() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Doctors</h1>
      <input
        placeholder="Search doctor"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}

export default Doctors;
