import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import AuthProvider from './components/ContextApi/AuthProvider';
import Details from './components/Details/Details';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';

import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import SignUp from './components/Signup/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
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
            <ContactUs></ContactUs>
          </Route>
          <PrivateRoute path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>

          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
