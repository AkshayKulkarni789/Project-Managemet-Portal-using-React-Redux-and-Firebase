import React from 'react'

const Summary =({project})=>{
    return(
        <div className="card">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Posted by : {project.authorFirstName} {project.authorLastName}</p>
            <p className="grey-text text-lighten-2">Posted on : {project.createdAt.toDate().toString().slice(0,24)}</p>
        </div>
    </div>
    )
}

export default Summary