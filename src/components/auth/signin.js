import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authAction'
import {Redirect} from 'react-router-dom'

export class signin extends Component {
    state = {
        email: "",
        password: ""
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitHandler = (e) =>{
        e.preventDefault()
        this.props.signIn(this.state)
    }
    render() {
        const { authError, auth } = this.props
        if(auth.uid) return <Redirect to="/" />
        return (
            <div className="container">
                <form className="white" onSubmit={this.submitHandler}>
                    <h3>Sign In</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.changeHandler}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.changeHandler}></input>
                    </div>
                    <div className="input field">
                        <button className="btn red lighten-2">
                            Login
                        </button>
                    </div>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(
            signIn(creds)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(signin)
