import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authAction'

const Signin = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/create">Create Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating red lighten-2">{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(Signin)