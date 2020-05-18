import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createProject } from "../../store/actions/projectActions"
import {Redirect} from 'react-router-dom'

export class create extends Component {
    state = {
        title: "",
        content: ""
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitHandler = (e) =>{
        e.preventDefault()
        //console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push("/")
    }
    render() {
        const {auth} = this.props
        if(!auth.uid) return <Redirect to='/signin/' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.submitHandler}>
                    <h3>New Project</h3>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.changeHandler}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.changeHandler}></textarea>
                    </div>
                    <div className="input field">
                        <button className="btn red lighten-2">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(create)
