import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,useParams
} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import {Image} from 'react-bootstrap';
import "./style/themify-icons.css";
import "./style/magnific-popup.css";
import "./style/slick.css";
import "./style/slick-theme.css";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import AppDevelopment from './components/AppDevelopment';
import CustomConsult from './components/CustomConsult';
import Training from './components/Training';
import Jobs from './components/Jobs';
import Blog from './components/Blog';

class Header extends React.Component
{
  render()
  {
	  

    return (
<header className="navigation">
   <div className="header-top ">
      <div className="container">
         <div className="row justify-content-between align-items-center">
            <div className="col-lg-2 col-md-4">
               <div className="header-top-socials text-center text-lg-left text-md-left">
                  <Router>
                     <a href ="https://www.facebook.com/" aria-label="facebook">
                     <i className="fa fa-facebook-f"></i></a>
                     <a href="https://www.twitter.com/" aria-label="twitter">
                     <i className="fa fa-twitter"></i></a>
                     <a href="https://www.github.com/" aria-label="github">
                     <i className="fa fa-github"></i></a>
                  </Router>
               </div>
            </div>
            <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
               <div className="header-top-info mb-2 mb-md-0">
                  <Router>
                     <a href="tel:214-842-6969">
                     Call Us : <span>214-842-6969</span></a>
                     <a href="mailto:info@perksys.com">
                     <i className="fa fa-envelope mr-2"></i><span>info@perksys.com</span></a>
                  </Router>
               </div>
            </div>
         </div>
      </div>
   </div>
   <Router>
      <div id="navbar">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg px-0 py-4">
                     <Link className="navbar-brand" to="/">
                     Perk Systems<span> inc.</span>
                     </Link>
                     <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="fa fa-bars"></span>
                     </button>
                     <div className="collapse navbar-collapse text-center" id="navbarsExample09">
                        <ul className="navbar-nav ml-auto">
                           <li>
                              <Link to={'/'} className="nav-item nav-link">
                              Home </Link>
                           </li>
                           <li>
                              <Link to={'/about'} className="nav-link nav-link">
                              About</Link>
                           </li>
                           {/*
                           <li>
                              <Link to={'/services'} className="nav-item nav-link">
                              Services </Link>
                           </li>
                           */}
                           <li className="nav-item dropdown">
                              <Link to="#" className="nav-item nav-link dropdown-toggle" id="dropdown05" data-toggle="dropdown"  aria-expanded="false">
                              Services</Link>
                              <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                 <li>
                                    <Link to={'/services/appdevelopment'} className="dropdown-item" >
                                    APPLICATION DEVELOPMENT</Link>
                                 </li>
                                 <li>
                                    <Link to={'/services/customconsult'} className="dropdown-item" >
                                    CUSTOM CONSULTING SERVICES</Link>
                                 </li>
                                 <li>
                                    <Link to={'/services/training'} className="dropdown-item" >
                                    TRAINING</Link>
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <Link to={'/clients'} className="nav-link nav-link">
                              Clients</Link>
                           </li> 
						   <li>
                              <Link to={'/career'} className="nav-link nav-link">
                              Career</Link>
                           </li>
                           <li>
                              <Link to={'/contact'} className="nav-link nav-link">
                              Contact</Link>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </div>
	  <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/about' component={About} />
         <Route path='/services' component={Services} >
			 <Route path='/services/appdevelopment' component={AppDevelopment} />
			 <Route path='/services/customconsult' component={CustomConsult} />
			 <Route path='/services/training' component={Training} />
          </Route>
         <Route path='/clients' component={Clients} />
         <Route path='/career' component={Jobs} />
         <Route path='/contact' component={Contact} />
         <Route path='/blog/:id' component={Blog} />
      </Switch>
   </Router>
</header>
		
    )
  }
}
export default Header;