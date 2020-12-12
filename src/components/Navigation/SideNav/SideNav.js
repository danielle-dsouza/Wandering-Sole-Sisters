import React, { Component } from "react";
import "./SideNav.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import SignedInItems from "../NavItems/SignedInLinks";
import SignedOutItems from "../NavItems/SignedOutLinks";
import { connect } from "react-redux";

class SideNav extends Component {
  render() {
    const { auth, profile } = this.props;
    const navItems = auth.uid ? (
      <SignedInItems profile={profile} user={auth} />
    ) : (
      <SignedOutItems />
    );

    return (
      <div>
        <div onClick={this.props.backdropClicked}>
          <Backdrop show={this.props.show} />
        </div>
        <div className="side-drawer">
          <div onClick={this.props.linkClicked}>{navItems}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(SideNav);
