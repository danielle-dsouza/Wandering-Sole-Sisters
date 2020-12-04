import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import BlogDetails from './components/blog/BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Dashboard } />
          <Route path="/blog/:id" component={ BlogDetails } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
