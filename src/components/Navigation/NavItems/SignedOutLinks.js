import React from "react";
import Item from "./Item/Item";
import "./NavItems.scss";

const SignedOutLinks = () => {
  return (
    <ul className="nav-link">
      <Item link={"/signup"}>Sign Up</Item>
      <Item link={"/signin"}>Sign In</Item>
    </ul>
  );
};

export default SignedOutLinks;
