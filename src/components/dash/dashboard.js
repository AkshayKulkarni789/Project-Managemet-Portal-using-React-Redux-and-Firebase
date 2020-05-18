import React, { Component } from 'react'
import Notif from "./notif"
import List from "../project/list"
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Dash extends Component{
    render() {
        const {projects, auth, notifications} = this.props
        if(!auth.uid) return <Redirect to='/signin/' />
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6 projectlist">
                        <List projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1 notifs">
                        <Notif notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const MapStatetoProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(MapStatetoProps),
    firestoreConnect([
        { collection: 'projects', orderBy:['createdAt','desc'] },
        { collection: 'notifications', limit: 5, orderBy: ['time','desc']}
    ])
)(Dash)