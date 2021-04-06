import React, { Component } from "react";
 import ContactForm from './ContactUS';
class Contact extends Component {
  render() {
    return  <div className="main-wrapper ">
				<section className="page-title bg-1">
				  <div className="container">
					<div className="row">
					  <div className="col-md-12">
						<div className="block text-center">
						  <span className="text-white">Contact Us</span>
						  <h1 className="text-capitalize mb-4 text-lg">Get in Touch</h1>
						  <ul className="list-inline">
							<li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
							<li className="list-inline-item"><span className="text-white">/</span></li>
							<li className="list-inline-item"><a href="/contact" className="text-white-50">Contact Us</a></li>
						  </ul>
						</div>
					  </div>
					</div>
				  </div>
				</section>
				<section className="contact-form-wrap section">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <ContactForm />  
                   
               
            </div>

            <div className="col-lg-5 col-sm-12">
                <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                    <span className="text-muted">We are Professionals</span>
                    <h2 className="mb-5 mt-2">Don’t Hesitate to contact with us for any kind of information</h2>

                    <ul className="address-block list-unstyled">
                        <li>
                            <i className="ti-direction mr-3"></i>Perk Systems, Inc.
								8505, Freeport Parkway, Suite#385
								Irving, TX-75063
                        </li>
                        <li>
                            <i className="ti-email mr-3"></i>Email: info@perksys.com
                        </li>
                        <li>
                            <i className="ti-mobile mr-3"></i>Phone:214-842-6969
                        </li>
                    </ul>

                    <ul className="social-icons list-inline mt-5">
                        <li className="list-inline-item">
                            <a href="http://www.facebook.com"><i className="fa fa-facebook-f"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="http://www.twitter.com"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="http://www.linkedin.com"><i className="fa fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<div className="google-map">
   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d859708.9391450051!2d-97.103158!3d32.679715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb2c58e6e943cd846!2sPERK%20SYSTEMS!5e0!3m2!1sen!2sin!4v1615360521783!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
</div>
			</div>;
	}
}

export default Contact;
