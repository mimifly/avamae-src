import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
