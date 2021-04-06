import React, { Component } from "react";

class Services extends Component {
    render() {
        return <>
        <section className="page-title bg-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Our services</span>
                  <h1 className="text-capitalize mb-4 text-lg">What We Do</h1>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
                    <li className="list-inline-item"><span className="text-white">/</span></li>
                    <li className="list-inline-item"><a href="/services" className="text-white-50">Our services</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section Services Start */}
        <section className="section service border-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h2 className="mt-3 content-title ">Our Services </h2>
                  <p style={{textAlign: 'center', marginTop: 30}}> Our focus is on meeting your technology needs. We offer a spectrum of services that are appropriate to your requirements – custom product development, application maintenance, system implementation, technical support, and onsite consulting. Whether you are a small company or a Fortune 500 leader, we have the experience and capabilities to work with you. In addition to our technology services, our senior management has extensive expertise in strategy, product innovation, supply chain management, and other areas of business.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5">
                  <i className="ti-desktop" />
                  <h4 className="mb-3">Application Development</h4>
                  <p>Perk Systems, Inc. serving wide variety of areas related to application design and development...</p>
                  <a href ="/services/appdevelopment" className="more-content">Read More &gt;&gt;</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5">
                  <i className="ti-layers" />
                  <h4 className="mb-3">Custom Consulting Services</h4>
                  <p>Perk Systems, Inc. provides complete consulting and custom application services...</p>
                  <a href="/services/customconsult" className="more-content">Read More &gt;&gt;</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5">
                  <i className="ti-bar-chart" />
                  <h4 className="mb-3">Training</h4>
                  <p>In today’s demanding business world, training is of critical importance...</p>
                  <a href="/services/training" className="more-content">Read More &gt;&gt;</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section Services End */}
        <section className="cta-2">
          <div className="container">
            <div className="cta-block p-5 rounded">
              <div className="row justify-content-center align-items-center ">
                <div className="col-lg-7">
                  <span className="text-color">For Every type business</span>
                  <h2 className="mt-2 text-white">Entrust Your Project to Our Best Team of Professionals</h2>
                </div>
                <div className="col-lg-4">
                  <a href ="/contact" className="btn btn-main btn-round-full float-right">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    }
}
export default Services;