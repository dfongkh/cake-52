import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Screens
import HomePage from "./pages/HomePage";
import CakePage from "./pages/CakePage";
import Cart from "./pages/Cart";
import AboutPage from "./pages/AboutPage";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cake/:id" component={CakePage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
