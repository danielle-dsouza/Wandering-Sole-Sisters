import React, { Component } from "react";
import "./Layout.scss";
import Navbar from "../Navigation/Navbar/Navbar";
import Footer from "../Navigation/Footer/Footer";
import SideNav from "../Navigation/SideNav/SideNav";

export default class Layout extends Component {
  state = {
    showSideNav: false,
  };

  handleSideNav = () => {
    this.setState((prevState) => {
      return {
        showSideNav: !prevState.showSideNav,
      };
    });
  };

  render() {
    return (
      <div className="layout-page">
        <div className="layout-content">
          <Navbar sideNavToggleClicked={this.handleSideNav} />
          {this.state.showSideNav ? (
            <SideNav show linkClicked={this.handleSideNav} backdropClicked={this.handleSideNav}/>
          ) : null}
          <main>{this.props.children}</main>
        </div>
        <Footer />
      </div>
    );
  }
}
