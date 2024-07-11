import mishi6 from '../assets/img/mishi6.jpg';
import PropTypes from  'prop-types';

export const Casquito6 = ({className}) => {
  return (
    <div className={`image-container ${className} `} >
      <img src= {mishi6} alt="Gato Dormilon" className='image'/>
    </div>
  )
}

Casquito6.propTypes = {
  className: PropTypes.string
}
