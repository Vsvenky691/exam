import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <BrowserRouter>
    <Link to="/" element={<HomePage/>}>HomePage</Link>
    <Link to="/" element={<LoginPage/>}>LoginPage</Link>
      <Router>
         <Route exact path="/" component={HomePage} />
          <Route exact path="/LoginPage" component={LoginPage} />
      </Router>
    </BrowserRouter>
  );
};

export default App;
