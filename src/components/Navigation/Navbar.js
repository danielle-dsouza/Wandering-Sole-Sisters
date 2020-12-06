import React from "react";
import { Link } from "react-router-dom";

import SignedInLinks from "./NavItems/SignedInLinks";
import SignedOutLinks from "./NavItems/SignedOutLinks";
import { connect } from "react-redux";

import "./Navbar.scss";

const Navbar = (props) => {
  const { authStatus, profile } = props;

  const links = authStatus.uid ? (
    <SignedInLinks className="nav-link" profile={profile} />
  ) : (
    <SignedOutLinks className="nav-link" />
  );

  return (
    <nav className="nav-wrapper navbar">
      <div className="container">
        <Link to="/" className="brand-logo navbar-title">
          Wandering Sole Sisters
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    authStatus: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
