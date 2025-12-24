function DoctorCard({ doctor }) {
  return (
    <div className="card">
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p>⭐ {doctor.rating}</p>
    </div>
  );
}

export default DoctorCard;
