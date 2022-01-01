import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

 
import Navbar from "./components/Navbar";

import HomePage from "./routes/Homepage";
import AboutPage from "./routes/Aboutpage";
import SinglePage from "./routes/tv_shows";
import NameSearch   from './routes/tv_shows_name'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/tv-shows/details/:id" component={SinglePage} />
          <Route path='/tv-shows/:name' component={NameSearch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
