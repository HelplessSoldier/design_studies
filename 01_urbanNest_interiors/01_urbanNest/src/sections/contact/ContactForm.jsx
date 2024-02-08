import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="contactFormRoot">
      <div className="contactFormLabels">
        <label htmlFor="fullName">Full Name: </label>
        <label htmlFor="email">Email: </label>
        <label htmlFor="phoneNumber">Phone Number: </label>
        <label htmlFor="consultationDate">Preferred Consultation Date: </label>
        <label htmlFor="consultationTime">Preferred Consultation Time: </label>
        <label htmlFor="projectDescription">
          Brief Description of Project:{" "}
        </label>
        <label htmlFor="budget">Budget Range: </label>
        <label htmlFor="commentsAndQuestions">
          Additional Comments or Questions:{" "}
        </label>
      </div>
      <div className="contactFormInputs">
        <input type="text" name="fullName" />
        <input type="email" name="email" />
        <input type="text" name="phoneNumber" />
        <input type="date" name="consultationDate" />
        <input type="time" name="consultationTime" />
        <input type="text" name="projectDescription" />
        <input type="text" name="budget" />
        <input type="text" name="commentsAndQuestions" />
      </div>
    </div>
  );
}
