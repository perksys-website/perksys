import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, FormFeedback, Form, FormGroup, Label, Input,UncontrolledAlert } from 'reactstrap'
function UncontrolledAlertFadelessExample() {
  return (
    <div style={{margin: "20px 0px"}}>
      <UncontrolledAlert color="success" fade={false}>
       Message sent successfully, we'll contact you shortly 
      </UncontrolledAlert>
    </div>
  );
}

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
	result:false
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
      'template_v1ubpad',
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
	   <div className="App">
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
              <Input
                type="text"
                name="subject"
                className="form-control"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
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
              Send Message
            </Button>
          </Form>
		  		  {this.state.result ? <UncontrolledAlertFadelessExample /> :''}

		  </div>
      </>
    )
  }
}
export default ContactForm