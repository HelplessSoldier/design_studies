import './SingleService.css';

export default function SingleService({ serviceName, serviceDescription }) {
  return (
    <div className='singleServiceContainer'>
      <h3>{serviceName}</h3>
      <p>{serviceDescription}</p>
    </div>
  )
}
