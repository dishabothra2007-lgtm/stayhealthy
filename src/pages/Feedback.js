import { useState } from "react";

function Feedback() {
  const [feedback, setFeedback] = useState("");

  return (
    <div>
      <h1>Consultation Feedback</h1>
      <textarea
        placeholder="Share your experience"
        onChange={(e) => setFeedback(e.target.value)}
      />
      <button onClick={() => alert("Feedback Submitted")}>Submit</button>
    </div>
  );
}

export default Feedback;
