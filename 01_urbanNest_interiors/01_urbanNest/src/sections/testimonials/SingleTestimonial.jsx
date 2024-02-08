import './SingleTestimonial.css';

export default function SingleTestimonial({ text, avatarPath }) {
  return (
    <div className='singleTestimonialRoot'>
      <div className='singleTestimonialContainer'>
        <img src={avatarPath} className='testimonialImage' />
        <p className='testimonialText'>{text}</p>
      </div>
    </div>
  )
}
