import mishi4 from '../assets/img/mishi4.jpg'
import PropTypes from  'prop-types'; 

export const Casquito4 = ({className}) => {
  return (
    <div className={`image-container ${className} `} >
      <img src= {mishi4} alt="Gato Dormilon" className='image'/>
    </div>
  )
}

Casquito4.propTypes = {
  className: PropTypes.string
}
