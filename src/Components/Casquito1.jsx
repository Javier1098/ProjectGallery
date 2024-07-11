import mishi1 from '../assets/img/mishi1.jpg'
import PropTypes from  'prop-types'; 

export const Casquito1 = ({className}) => {
  return (
    <div className={`image-container ${className} `} >
      <img src= {mishi1} alt="Gato Dormilon" className='image'/>
    </div>
  )
}

Casquito1.propTypes = {
  className: PropTypes.string
}