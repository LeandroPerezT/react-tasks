import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
  return(
    <button 
      style={{ backgroundColor: color }} 
      className='btn'
      onClick={onClick}
    >
    {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'Steel Blue',
  text: 'No prop given to me'
}

Button.propTypes = {
  color: PropTypes.string
}

export default Button
