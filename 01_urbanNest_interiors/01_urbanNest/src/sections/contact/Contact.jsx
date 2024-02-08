import "./Contact.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="contactRoot">
      <h1>
        Ready to take the first step towards transforming your space with
        UrbanNest Interiors? We're here to turn your design dreams into reality.
        Contact us today to schedule a consultation or inquire about our
        services.
      </h1>
      <ContactForm />
    </div>
  );
}
