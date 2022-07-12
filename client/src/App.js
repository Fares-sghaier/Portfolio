import "./App.css";
// import Home from "././Container/Home/Home.jsx";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Container/ScrollToTop";
import Navbar from "./Container/Navbar/Navbar";
import Services from './Container/Services/Services';
import Products from './Container/Products/Products.jsx';
import Home from "./Container/HomePage/Home.jsx";
import Resume from "./Container/Resume/Resume";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
         <Route path="/" exact component={Home}></Route>
         <Route path="/resume" component={Resume}></Route>
         <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
      </Switch>
    </Router>
  );
}
