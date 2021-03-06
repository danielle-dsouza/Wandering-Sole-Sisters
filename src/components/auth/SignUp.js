import React, { Component } from 'react';
import '../../styles/_forms.scss';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
    
  };

    render() {

        const { authError, signedIn } = this.props;

        if (signedIn) return (<Redirect to='/dashboard' />);

        return (
            <div className="container">
                <form onSubmit={ this.handleSubmit }>
                    <h5>Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={ this.handleChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={ this.handleChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={ this.handleChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={ this.handleChange } />
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0">Sign Up</button>
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
        signedIn: state.firebase.auth.uid ? true : false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);