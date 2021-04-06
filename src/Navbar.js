import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
  <nav className="navbar navbar-expand-lg px-0 py-4">
            <a className="navbar-brand" href="index.html">
              Mega<span>kit.</span>
            </a>
      
            <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
			<span className="fa fa-bars"></span>
		  </button>
      
            <div className="collapse navbar-collapse text-center" id="navbarsExample09">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item @@home">
				 <NavLink className="navbar-item nav-link" activeClassName="is-active" to="/">
				  Home
				</NavLink>
                </li>
                <li className="nav-item dropdown @@about">
                    <NavLink
					className="navbar-item nav-link"
					activeClassName="is-active"
					to="/about"
					>
					  About
					</NavLink>
                </li>
                <li className="nav-item @@service"><NavLink
					className="navbar-item nav-link"
					activeClassName="is-active"
					to="/services"
					>
					  Services
					</NavLink>
          </li> 
				<li className="nav-item @@clients"><NavLink
					className="navbar-item nav-link"
					activeClassName="is-active"
					to="/clients"
					>
					  Clients
					</NavLink>
          </li>

        
				<li className="nav-item @@contact"><NavLink
					className="navbar-item nav-link"
					activeClassName="is-active"
					to="/contact"
					>
					  Contact Us
					</NavLink></li>
               </ul>
      
             
            </div>
          </nav>
  
  );
};

export default Navbar;