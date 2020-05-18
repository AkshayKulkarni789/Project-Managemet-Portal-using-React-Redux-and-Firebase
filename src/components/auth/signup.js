import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {signUp} from '../../store/actions/authAction'

export class signup extends Component {
    state = {
        email: "",
        password: "",
        firstname: "",
        lastname: ""
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitHandler = (e) =>{
        e.preventDefault()
        this.props.signUp(this.state)
    }
    render() {
        const {auth, authError} = this.props
        if(auth.uid) return <Redirect to="/" />
        return (
            <div className="container">
                <form className="white" onSubmit={this.submitHandler}>
                    <h3>Sign Up</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.changeHandler}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.changeHandler}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" id="firstname" onChange={this.changeHandler}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" id="lastname" onChange={this.changeHandler}></input>
                    </div>
                    <div className="input field">
                        <button className="btn red lighten-2">
                            Register!
                        </button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p>:null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(signup)
