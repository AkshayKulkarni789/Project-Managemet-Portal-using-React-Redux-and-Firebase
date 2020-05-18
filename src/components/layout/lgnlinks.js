import React from 'react'
import { Link } from 'react-router-dom'

const Lgnlinks = (props) => {
    return(
        <div className="container center">
            <h4 className="text-white">Hello! Seems like you aren't logged in. Please log in or sign up!</h4>
            <Link to="/signin"><button className="btn">Login</button></Link>
            <Link to="/signup"><button className="btn">Sign Up</button></Link>
        </div>
    )
}

export default Lgnlinks