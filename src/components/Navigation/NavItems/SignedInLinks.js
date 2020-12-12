import React from "react";
import Item from './Item/Item';
import "./NavItems.scss";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <ul>
      <Item link={"/create"}>New Blog</Item>
      <Item link={"/"} onClick={props.signOut}>
        Sign Out
      </Item>
      <li><NavLink to="/" className="btn btn-floating btn-user">{props.profile.initials}</NavLink></li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
