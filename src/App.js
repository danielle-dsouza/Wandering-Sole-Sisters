import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/Navigation/Navbar";
import Home from './scenes/Home/Home';
import Dashboard from "./components/dashboard/Dashboard";
import BlogDetails from "./components/blog/BlogDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateBlog from "./components/blog/CreateBlog";

function App(props) {
  let routes;

  if (props.signedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/blog/:id" component={BlogDetails} />
        <Route path="/create" component={CreateBlog} />
        {/* <Route path="/**" component={Wildcard} /> */}
        {/* <Redirect to="/" component={Dashboard} /> */}
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        {/* <Route path="/signin" component={SignIn} /> */}
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/**" component={Wildcard} /> */}
      </Switch>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {routes}
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    signedIn: state.firebase.auth.uid ? true : false,
  };
};

export default connect(mapStateToProps)(App);
