import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./components/Layout/Layout";
import Home from "./scenes/Home/Home";
import Dashboard from './scenes/Dashboard/Dashboard';
import BlogDetails from "./components/Blog/BlogDetails";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import CreateBlog from "./components/Blog/CreateBlog";
import Wildcard from "./scenes/Wildcard/Wildcard";

function App(props) {
  let routes;

  if (props.signedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/blog/:id" component={BlogDetails} />
        <Route path="/create" component={CreateBlog} />
        <Redirect to="/" component={Home} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/**" component={Wildcard} />
      </Switch>
    );
  }

  return (
    <BrowserRouter>
      <Layout>{routes}</Layout>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    signedIn: state.firebase.auth.uid ? true : false,
  };
};

export default connect(mapStateToProps)(App);
