import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "../NavItems/SignedInLinks";
import SignedOutLinks from "../NavItems/SignedOutLinks";
import SideNavToggle from "../SideNav/SideNavToggle/SideNavToggle";
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
        <span className="mobile-only">Sole Sisters</span>
          <span className="desktop-only">Wandering Sole Sisters</span>
        </Link>
        <SideNavToggle clicked={props.sideNavToggleClicked} />
        <div className="desktop-only">{links}</div>
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
