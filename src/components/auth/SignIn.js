import React, { Component } from 'react';
import '../../styles/_forms.scss';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {

        const { authError, signedIn } = this.props;

        if (signedIn) return (<Redirect to='/dashboard' />);

        return (
            <div className="container">
                <form onSubmit={ this.handleSubmit }>
                    <h5>Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={ this.handleChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={ this.handleChange } />
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0">Sign In</button>
                        <div className="center red-text">
                            { authError ? <p>{ authError }</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        signedIn: state.firebase.auth.uid ? true : false,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);