import PropTypes from 'prop-types';

export default function Button({ children, handleClick, value, name }) {
  return (
    <button onClick={handleClick} name={name} value={value} className='bg-orange-300 ml-4 p-1 px-4 mb-4 text-slate-50'>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string
}


