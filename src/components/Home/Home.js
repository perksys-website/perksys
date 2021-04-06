import React, { Component } from "react";
import ImageSlider from "./Slider";
import Counter from "./../../Countup";
import Blogs from "./Blogs.js";
class Home extends Component {
render() {
return(
<div className="main-wrapper ">
   <section className="slider">
      <div className="container">
         <div className="row">
            <div className="col-lg-9 col-md-10">
               <div className="block">
                  <span className="d-block mb-3 text-white text-capitalize">Welcome to</span>
                  <h1 className="animated fadeInUp mb-5">PERK SYSTEMS INC.</h1>
                  <a href ={"/#"} target="_blank" rel="noreferrer" className="btn btn-main animated fadeInUp btn-round-full" >Get started<i className="btn-icon fa fa-angle-right ml-2"></i></a>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="section intro">
      <div className="container">
         <div className="row ">
            <div className="col-lg-8">
               <div className="section-title">
                  <span className="h6 text-color ">We are creative & expert people</span>
                  <h2 className="mt-3 content-title">Our Services</h2>
               </div>
            </div>
         </div>
         <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
               <div className="intro-item mb-5 mb-lg-0">
                  <i className="ti-desktop color-one"></i>
                  <h4 className="mt-4 mb-3">IT Services</h4>
                  <p>Our focus is on meeting your technology needs. We offer a spectrum of services that are appropriate to your requirements.</p>
                  <a href ={"/services/appdevelopment"} className="more-content">Read More &gt;&gt;</a>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="intro-item mb-5 mb-lg-0">
                  <i className="ti-medall color-one"></i> 
                  <h4 className="mt-4 mb-3">Custom Consulting Services</h4>
                  <p>Perk Systems Inc provides complete consulting and custom application services. Our management consulting services focus on.</p>
                  <a href ={"/services/customconsult"} className="more-content">Read More &gt;&gt;</a>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="intro-item">
                  <i className="ti-layers-alt color-one"></i>
                  <h4 className="mt-4 mb-3">Training</h4>
                  <p>In today’s demanding business world, training is of critical importance. Successful training is a planned process to modify attitude.</p>
                  <a href ={"/services/training"} className="more-content">Read More &gt;&gt;</a>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="section about position-relative">
      <div className="container">
         <div className="row">
            <div className="col-lg-6  col-md-6 col-sm-12 col-xs-12 offset-md-0">
			      <div className="bg-about"></div>
			</div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-md-0">
               <div className="about-item ">
                  <span className="h6 text-color">What we are</span>
                  <h2 className="mt-3 mb-4 position-relative content-title">Welcome to Perk Systems, Inc.</h2>
                  <div className="about-content">
                     <p className="mb-5">Perk Systems, Inc. customized technology service provider for a wide variety of clients from different industries. Over the decade we have been offering recruitment, consulting, project outsourcing and unparalleled expertise in delivering solutions.
                        <br />
                        We offer a uniquely comprehensive and innovative solution set that effectively meets the needs of our clients and associates from recruitment to IT Technology solutions. During that time, both the client and the employee have time to evaluate the situation and determine the relationship. 
                     </p>
                     <a href ={"/about"} className="btn btn-main btn-round-full">READ MORE</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="section counter">
      <div className="container">
         <Counter />
      </div>
   </section>
   <section className="section cta">
      <div className="container">
         <div className="row">
            <div className="col-lg-5">
               <div className="cta-item  bg-white p-5 rounded">
                  <span className="h6 text-color">We create for you</span>
                  <h2 className="mt-2 mb-4">Entrust Your Project to Our Best Team of Professionals</h2>
                  <p className="lead mb-4">Have any project on mind? For immidiate support :</p>
                  <h3><i className="ti-mobile mr-3 text-color"></i>214-842-6969</h3>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="section testimonial">
      <div className="container">
         <div className="row">
            <div className="col-lg-7 ">
               <div className="section-title">
                  <span className="h6 text-color">Clients testimonial</span>
                  <h2 className="mt-3 content-title">Check what's our clients say about us</h2>
               </div>
            </div>
         </div>
      </div>
      <div className="container">
      <ImageSlider/>
      </div>
   </section>
   <section className="section latest-blog bg-2">
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
               <div className="section-title">
                  <span className="h6 text-color">Latest News</span>
                  <h2 className="mt-3 content-title text-white">Latest articles to enrich knowledge</h2>
               </div>
            </div>
         </div>
         
           <Blogs  />
      </div>
   </section>
</div>
)
}
}
export default Home;