import React from 'react'
import {connect} from 'react-redux'
import Dashbtn from './btndash'
import Lgnlinks from './lgnlinks'

const home = (props) => {
    const {auth, profile} = props
    const links = auth.uid ? <Dashbtn profile={profile}/> : <Lgnlinks /> 
    return(
        <div>
            <br/><br/><br/><br/>
            <h2 className="center text-white">Welcome to the Project Portal</h2>
            <br /> <br/>
            {auth.isLoaded && links}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(home)