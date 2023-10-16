import './LandingPageStyle.css'
import {NavLink} from 'react-router-dom'
function LandingPage() {
  return (
    <div className='landing'>
<h1>Our Services</h1>

    <NavLink to="/add"><button className='LandingBtn'>Adding New Student</button></NavLink><br/>
    <NavLink to="/edit"><button className='LandingBtn' >Registeration for new Course</button></NavLink><br/>
    <NavLink to="/attend"><button className='LandingBtn'>Attending Students</button></NavLink><br/>
  </div>
  )
}

export default LandingPage