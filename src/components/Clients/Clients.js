import React, { Component } from "react";
class Clients extends Component {
render() {
return (
<div className="main-wrapper ">
   <section className="page-title bg-1">
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <div className="block text-center">
                  <span className="text-white">Clients</span>
                  <h1 className="text-capitalize mb-4 text-lg">Clients</h1>
                  <ul className="list-inline">
                     <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
                     <li className="list-inline-item"><span className="text-white">/</span></li>
                     <li className="list-inline-item"><a href="/clients" className="text-white-50">Clients</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="section portfolio pb-0">
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
            </div>
         </div>
         <div className="jobs-wrapper">
            <div className="job-content">
               <p>Perk Systems Inc proud to have associated with outstanding companies in all sectors and all sizes from fortune 500 companies to individual start up companies. For most of our consultants, this diversity is a key reason for their choice of profession: because this guarantees a broad variety of tasks and challenges. We typically assign a dedicated team of experienced staff members to our clients that will coordinate all matters with respect to your international subsidiaries, so continuity and quality of service are guaranteed.</p>
            </div>
            <div className="list-type">
               <h3>Verticals Served:</h3>
               <ul>
                  <li>Automotive</li>
                  <li>Communications</li>
                  <li>Financial/Banking</li>
                  <li>Manufacturing</li>
                  <li>Retail</li>
                  <li>Health Care</li>
                  <li>Information Technology</li>
               </ul>
            </div>
         </div>
      </div>
   </section>
</div>
)
}
}
export default Clients;