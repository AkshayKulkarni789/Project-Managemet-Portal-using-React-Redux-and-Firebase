import React from 'react'
import { Link } from 'react-router-dom'

const Dashbtn = (props) => {
    return(
        <div className="container center">
            <h4 className="text-white">Hello {props.profile.firstName}</h4>
            <Link to="/dashboard"><button className="btn">Proceed to Dashboard!</button></Link>
        </div>
    )
}

export default Dashbtn