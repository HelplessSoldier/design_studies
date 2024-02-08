import SingleTestimonial from "./SingleTestimonial";
import "./Testimonials.css";

const testimonialText1 =
  '"Working with UrbanNest Interiors was an absolute delight! From the initial consultation to the final reveal, they listened attentively to my ideas and preferences and translated them into a stunning design that exceeded my expectations. Their attention to detail and commitment to sustainability truly sets them apart. I couldn\'t be happier with the results!" - Emily S.';

const testimonialText2 =
  '"UrbanNest Interiors transformed my outdated living room into a stylish and functional space that I\'m proud to show off to friends and family. Their designers are incredibly talented and have a keen eye for design trends. I appreciated their professionalism and ability to stay within my budget without compromising on quality. I highly recommend them to anyone looking to elevate their home\'s interior!\" - David L.'

const testimonialText3 =
  '"UrbanNest Interiors transformed my outdated kitchen into a modern oasis that I never want to leave. From the initial consultation to the final installation, their team was professional, creative, and attentive to every detail. They seamlessly integrated my personal style with practical design solutions, resulting in a space that feels both luxurious and functional. I\'m beyond thrilled with the outcome and highly recommend UrbanNest Interiors to anyone looking to elevate their home.\" - Sarah W.'

export default function Testimonials() {
  return (
    <div className="testimonialsRoot">
      <SingleTestimonial
        text={testimonialText1}
        avatarPath={"./images/emilyS.png"}
      />
      <SingleTestimonial
        text={testimonialText2}
        avatarPath={"./images/davidL.png"}
      />
      <SingleTestimonial
        text={testimonialText3}
        avatarPath={"./images/sarahW.png"}
      />
    </div>
  );
}
