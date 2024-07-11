import mishi5 from '../assets/img/mishi5.jpg';
import PropTypes from  'prop-types';

export const Casquito5 = ({className}) => {
  return (
    <div className={`image-container ${className} `} >
      <img src= {mishi5} alt="Gato Dormilon" className='image'/>
    </div>
  )
}

Casquito5.propTypes = {
  className: PropTypes.string
}
