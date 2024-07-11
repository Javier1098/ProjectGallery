import mishi3 from '../assets/img/mishi3.jpg'
import PropTypes from  'prop-types'; 

export const Casquito3 = ({className}) => {
  return (
    <div className={`image-container ${className} `} >
      <img src= {mishi3} alt="Gato Dormilon" className='image'/>
    </div>
  )
}

Casquito3.propTypes = {
  className: PropTypes.string
}
