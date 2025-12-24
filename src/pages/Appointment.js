function Appointment() {
  return (
    <div>
      <h1>Book Appointment</h1>
      <form>
        <input placeholder="Patient Name" />
        <input type="date" />
        <input type="time" />
        <button>Book</button>
      </form>
    </div>
  );
}

export default Appointment;
