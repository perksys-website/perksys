import React from 'react';
const CustomConsult = () => (
<div className="main-wrapper ">
   <section className="page-title bg-1">
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <div className="block text-center">
                  <span className="text-white">Custom Consulting Services</span>
                  <h1 className="text-capitalize mb-4 text-lg">Custom Consulting Services</h1>
                  <ul className="list-inline">
                     <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
                     <li className="list-inline-item"><span className="text-white">/</span></li>
                     <li className="list-inline-item"><a href="/services/customconsult" className="text-white-50">Custom Consulting Services</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="main-wrap">
      <div className="container">
         <div className="service-content-2">
            <p>Perk Systems, Inc. provides complete consulting and custom application services. Our management consulting services focus on our client’s most critical issues and opportunities. We take the time to understand your needs carefully and work with you to implement the agreed solutions. With extensive understanding of global and local businesses entity and industry, our simplified, cost-efficient processes provide a customized range of software consulting services to the middle level to multi-national companies. Our services are available over a wide range of geographical area that spans United States.</p>
         </div>
         <div className="row">
            <div className="col-xs-12 col-sm-4 col-lg-4 col-md-4">
               <div className="service-img-2">
                  <img src={require("../../images/about/mainpic.jpg").default} alt="" className="" />
               </div>
            </div>
            <div className="col-xs-12 col-sm-8 col-lg-8 col-md-8">
               <div className="service-contant-2">
                  <p>We have cultivated team of talented consultants who understand business operations and how to bridge that to technical execution. Our expert team size for different segment to make sure that our clients get the best services for their needs.Our approach ensures that the client can be confident in a successful managed delivery.</p>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>
);
export default CustomConsult;