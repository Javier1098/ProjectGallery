import mishi2 from '../assets/img/mishi2.jpg'
import PropTypes from  'prop-types'; 

export const Casquito2 = ({className}) => {
  return (
    <div className={`image-container ${className} `} >
      <img src= {mishi2} alt="Gato Dormilon" className='image'/>
    </div>
  )
}

Casquito2.propTypes = {
  className: PropTypes.string
}