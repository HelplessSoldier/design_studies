import './Button.css';

export default function Button({ href, text }) {
  return (
    <button className='button1' href={href}>
      {text}
    </button>
  )
}
