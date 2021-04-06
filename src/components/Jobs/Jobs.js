import React from 'react';
import firebase from './../../firebase';
import ContactForm from './Form'

	
class Jobs extends React.Component {
	constructor(props) {
		super(props);
		this.state = { jobs: [],showForm:false }
		this.onClick = this.onClick.bind(this);
	}

	componentDidMount() {
		firebase.database().ref("jobs").on("value", snapShot => {
			let job = [];
			snapShot.forEach(snap => {
				job.push(snap.val());
			});
			this.setState({jobs:job});
		});
	}
	onClick () {
		if(this.state.showForm == true){
			this.setState({showForm:false});
		}else{
			this.setState({showForm:true});
		}
    }
	

	render() {
		return (
				<div className="main-wrapper ">
					<section className="page-title bg-1">
					  <div className="container">
						<div className="row">
						  <div className="col-md-12">
							<div className="block text-center">
							  <span className="text-white">Latest jobs</span>
							  <h1 className="text-capitalize mb-4 text-lg">Career</h1>
							  <ul className="list-inline">
								<li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
								<li className="list-inline-item"><span className="text-white">/</span></li>
								<li className="list-inline-item"><a href="/career" className="text-white-50">Latest jobs</a></li>
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
									<div className="section-title">
										<span className="h6 text-color">Our works</span>
										<h2 className="mt-3 content-title ">Current Jobs</h2>
									</div>
								</div>
							</div>
						
							<div className="jobs-wrapper row justify-content-center">
							
								{this.state.jobs.map(data => {
									return (
										<div className="job-content">
											<h3>{data.title}</h3>
											<p><span className="job_title">Requirements: </span>{data.requirements}</p>
											<p><span className="job_title">Description: </span>{data.description}</p>
											
										</div>
									)
								})}
								 <button onClick={this.onClick} className="btn btn-main btn-small">Apply for Job</button>
								      { this.state.showForm ? <ContactForm /> : '' }

							</div>
							
						</div>
					</section>
				</div>
			)
		}
	};
export default Jobs;