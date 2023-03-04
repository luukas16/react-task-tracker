import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    const onClick = () => {
        console.log("click")
    }
  return (
    <header className='header'>
        <h1 className="main-header"> {title}</h1>
        <Button onClick={onClick} text="Button" />
    </header>  
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// Header.propTypes = {
//     title: PropTypes.String.isRequired,
// }

const headingStyle = {
    color: 'red' , 
    backgroundColor: 'black'
}

export default Header
