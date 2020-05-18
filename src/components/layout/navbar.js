import React from 'react'
import { Link } from 'react-router-dom'
import Signin from './signinnav'
import Signout from "./signoutnav"
import {connect} from 'react-redux'

const Navbar = (props) => {
    const {auth, profile} = props
    const links = auth.uid ? <Signin profile={profile}/> : <Signout />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Project Portal</Link>
                {auth.isLoaded && links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)