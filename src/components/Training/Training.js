import React from 'react';
const Training = () => (
<div className="main-wrapper ">
   <section className="page-title bg-1">
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <div className="block text-center">
                  <span className="text-white">Training</span>
                  <h1 className="text-capitalize mb-4 text-lg">Training</h1>
                  <ul className="list-inline">
                     <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
                     <li className="list-inline-item"><span className="text-white">/</span></li>
                     <li className="list-inline-item"><a href="/services/training" className="text-white-50">Training</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="main-wrap">
      <div className="container">
         <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12">
               <div className="service-img-3">
                  <img src={require("../../images/about/Application.jpg").default} alt="" className="" />
               </div>
            </div>
            <div className="col-lg-8 col-md-8 col-xs-12">
               <div className="service-content-3">
                  <p>In today’s demanding business world, training is of critical importance. successful training is a planned process to modify attitude, knowledge or skill behavior through learning experience to achieve effective performance. Training focuses on learning the necessary skills and acquiring the knowledge required to perform the job. It deals with the design and delivery of learning to improve organization performance.</p>
               </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12">
               <div className="full-width">
                  <p>Perk Systems, Inc. provide more economic and convenient training solution for individuals & groups as well. Our training use leading edge, high quality course manuals in all courses that we train. Advanced training can provide fully customized training needs analysis, course programs, course outlines and evaluation forms that incorporates software applications and modules specific to growing technology trends & requirements.</p>
               </div>
            </div>
         </div>
         <div className="main-list-div">
            <div className="row">
               <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="list-type">
                     <h3>Our training methodology:</h3>
                     <ul>
                        <li>Train in a comfortable, ready-to-learn environment</li>
                        <li>Interact face-to-face with peers and expert instructors</li>
                        <li>Study topical, results-oriented course content</li>
                        <li> Use state-of-the-art equipment</li>
                        <li>Get hands-on labs practice</li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="list-type">
                     <h3>We provide regular trainings on below Technologies:</h3>
                     <ul>
                        <li>Java/J2EE</li>
                        <li>.NET</li>
                        <li>QA testing</li>
                        <li> Business analysis</li>
                        <li>SQL server development</li>
                        <li>UI developers</li>
                        <li>Datapower and hadoop technologies</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>
);
export default Training;