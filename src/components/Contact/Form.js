import React from "react";
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    } 
    
    handleSubmit(e){
		e.preventDefault(
			fetch("http://15.207.66.131/petproject/public/api/contact",{
				method:'POST',
				headers: {'Content-type':'application/json'},
				body:JSON.stringify(this.state)
			}).then(r=>r.json()).then(res=>{
				if(res.success){
					this.setState({resultmessage:'Your Message has been sent. Thanks for contacting Us',color:'green',name: '',email:'',phone:'','message':''});
				}else{
					 this.setState({resultmessage:'Message not sent'});
				}
			})
		);
    }
    
    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }
  
    render() {
      return(
        <div className="App">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <span className="text-color">Send a message</span>
            <h3 className="text-md mb-4">Contact Form</h3>
            <div className="form-group">
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)}   placeholder="Your Name"/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)}  placeholder="Email Address" />
            </div>  
            <div className="form-group">
              <input type="text" className="form-control" value={this.state.phone} onChange={this.onPhoneChange.bind(this)}   placeholder="Phone No." />
            </div>
            <div className="form-group-2 mb-4">
              <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)}   placeholder="Your Message" />
            </div>
            <button type="submit" className="btn btn-main">SEND MESSAGE</button>  
			<p style={{'color':this.state.color}}>{this.state.resultmessage}</p>
          </form>
        </div>
      );
    }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
    onPhoneChange(event) {
        this.setState({phone: event.target.value})
      }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
  }
  export default Form;