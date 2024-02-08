import './SingleTestimonial.css';

export default function SingleTestimonial({ text, avatarPath }) {
  return (
    <div className='singleTestimonialRoot'>
      <div className='singleTestimonialContainer'>
        <img src={avatarPath} />
        <p>{text}</p>
      </div>
    </div>
  )
}
