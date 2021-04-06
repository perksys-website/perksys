import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer extends React.Component{
  render(){
    return (
    <footer className="footer section">
	<div className="container">
		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget">
					<h4 className="text-capitalize mb-4">Company</h4>

					{/*<ul className="list-unstyled footer-menu lh-35">
						<li><a href="#">Terms  Conditions</a></li>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Support</a></li>
						<li><a href="#">FAQ</a></li>
					</ul>*/}

					<ul className="list-unstyled footer-menu lh-35">
						<li><a href="/">Home</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="/contact">Contact</a></li>
					</ul>
				</div>
			</div>
			
			<div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget">
					<h4 className="text-capitalize mb-4">Quick Links</h4>
					<ul className="list-unstyled footer-menu lh-35">
						<li><a href={"/services/appdevelopment"}>App Development</a></li>
						<li><a href={"/services/training"}>Training</a></li>
						<li><a href={"/services/customconsult"}>Custom Consult </a></li>
					</ul>
				</div>
			</div>
			
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget">
					<h4 className="text-capitalize mb-4">Subscribe Us</h4>
					<p>Subscribe to get latest news article and resources  </p>
					<form action="/#" className="sub-form">
            		<input type="text" className="form-control mb-3" placeholder="Subscribe Now ..." />
            		<a href={"/#"} className="btn btn-main btn-small">subscribe</a>
          			</form>
				</div>
			</div>

			<div className="col-lg-3 ml-auto col-sm-6">
				<div className="widget">
					<div className="logo mb-4">
						<h3>Perk System<span> Inc.</span></h3>
					</div>
					<h6><a href="mailto:info@perksys.com" >info@perksys.com</a></h6>
					<a href="tel:214-842-6969"><span className="text-color h4">214-842-6969</span></a>
				</div>
			</div>

		</div>
	

		<div className="footer-btm pt-4">
			<div className="row">
				<div className="col-lg-6">
					<div className="copyright">
						&copy; Copyright Reserved to <span className="text-color">Perks System Inc.</span> 
					</div>
				</div>
				<div className="col-lg-6 text-left text-lg-right">
					<ul className="list-inline footer-socials">
						<li className="list-inline-item"><a href="https://www.facebook.com/"><i className="ti-facebook mr-2"></i>Facebook</a></li>
						<li className="list-inline-item"><a href="https://twitter.com/"><i className="ti-twitter mr-2"></i>Twitter</a></li>
						<li className="list-inline-item"><a href="https://www.linkedin.com/"><i className="ti-linkedin mr-2 "></i>Linkedin</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
            
</footer>
    )
  }
}
export default Footer;