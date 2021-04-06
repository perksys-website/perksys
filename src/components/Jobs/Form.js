import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, FormFeedback, Form, FormGroup, Label, Input,Alert,UncontrolledAlert  } from 'reactstrap'
import firebase from './../../firebase';
function UncontrolledAlertFadelessExample() {
  return (
    <div style={{margin: "20px 0px"}}>
      <UncontrolledAlert color="success" fade={false}>
       Applied successfully, we'll contact you shortly 
      </UncontrolledAlert>
    </div>
  );
}
class ContactForm extends Component {
  constructor(props) {
		super(props);
		this.state = { jobs: [],name: '',
			email: '',
			subject: '',
			message: '', 
			result:''}
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
 
	handleSubmit(e) {
		e.preventDefault()
		const { name, email, subject, message } = this.state
		let templateParams = {
		  from_name: name,
		  to_name: 'Perk Systems',
		  subject: subject,
		  message: message,
		 }
		 emailjs.send(
		  'service_muc7lk9',
		  'template_genzbck',
		   templateParams,
		  'user_cA6Ct8IF89hMUPaw9M8iI'
		 )
        this.setState({result:true});
	

		 this.resetForm()
	 }
	resetForm() {
		this.setState({
		  name: '',
		  email: '',
		  subject: '',
		  message: '',
		  
		})
	  }
	handleChange = (param, e) => {
		this.setState({ [param]: e.target.value })
	  }
	  
	
render() {
    return (
      <>
<div className="container" style={{margin: "20px 20px"}}>
	   <h3>Job Application Form</h3>
		<Form onSubmit={this.handleSubmit.bind(this)}>
		  <FormGroup controlId="formBasicName">
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="form-control"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Your Name"
              />
            </FormGroup>
        
            <FormGroup controlId="formBasicEmail">
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="form-control"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Email Address"
              />
            </FormGroup>

			<FormGroup controlId="formBasicSubject">
			
				
				<Input type="select" name="job"  onChange={this.handleChange.bind(this, 'subject')} value={this.state.subject} id="exampleSelectMulti" >
					<option >Select Job</option>
					{this.state.jobs.map(data => {
						return (
							 <option value={data.title}>{data.title}</option>
						)
					})}
				</Input>
             
            </FormGroup>
			<FormGroup controlId="formBasicMessage">
              <Input
                type="textarea"
                name="message"
                className="form-control"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
				placeholder="Enter Message" style={{height: "200px"}}
              />
            </FormGroup>
			<Button variant="primary" className="btn btn-main" type="submit" style={{border: "none"}}>
              Apply Now
            </Button>
          </Form>
		  {this.state.result ? <UncontrolledAlertFadelessExample /> :''}
		  </div>
      </>
    )
  }
}
export default ContactForm