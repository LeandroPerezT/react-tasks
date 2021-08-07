import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAddTask }) =>{

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAddTask ? 'tomato' : 'steelblue'} text={showAddTask ? 'Cerrar' : 'Añadir'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps={
  title: 'Tareas pendientes!'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
