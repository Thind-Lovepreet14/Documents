import React from "react";
import "./App.css";
import "./icon/flaticon.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import Navbar from "./components/utils/Navbar";
import Footer from "./components/utils/Footer";
import ProductsPage from "./components/ProductsPage";
import ContactsPage from "./components/ContactsPage";
import HomePage from "./components/HomePage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product" component={ProductsPage} />
          <Route exact path="/contact" component={ContactsPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
