import Carousel from "../Carousel";
import ContactForm from "../ContactUs";
import "../ContactUs.css"; // Ensure this path is correct relative to this file
function ContactPage() {
  return (
    <div className="contactPageclass">
      <h1>Contact Me</h1>
      <p>
        If you have any questions or would like to get in touch, please fill out
        the form below:
      </p>
      <ContactForm />
      <Carousel />
    </div>
  );
}

export default ContactPage;
