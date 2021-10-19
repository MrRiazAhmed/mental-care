import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContuctUs from './components/ContuctUs/ContuctUs';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/contact">
          <ContuctUs></ContuctUs>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
