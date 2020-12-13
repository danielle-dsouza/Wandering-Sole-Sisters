import React, { Component } from "react";
import '../../styles/_forms.scss';
import { connect } from "react-redux";
import { createBlog } from "../../store/actions/blogActions";
import { Redirect } from 'react-router-dom';

class CreateBlog extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createBlog(this.state);
    this.props.history.push("/");
  };

  render() {

    const { signedIn } = this.props;

    if (!signedIn) return (<Redirect to='/signin' />)

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>Create Blog</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              className="materialize-textarea"
              id="content"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn z-depth-0">Post</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signedIn: state.firebase.auth.uid ? true : false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBlog: (blog) => dispatch(createBlog(blog)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog);
