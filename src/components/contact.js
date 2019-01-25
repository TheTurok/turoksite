import React, { Component } from 'react';
import '../styles/style.css'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';


export default class Contact extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit - this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }) ;
  }

/*  async handleSubmit(e) {
    e.preventDefault();

    const {name, email, message} = this.state;

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    });
  } */

  /*
  <Form onSubmit = {this.handleSubmit}>
    <FormGroup className = "col-md-6 col-md-offset-3">
      <Label for ="name" s>Name</Label>
      <Input
        type = "text"
        name = "name"
        onChange = {this.handleChange} />
      <Label for ="email">Email</Label>
      <Input
        type = "text"
        name = "email"
        onChange = {this.handleChange} />
      <Label for ="message">Message</Label>
      <Input
        type = "textarea"
        name = "message"
        onChange = {this.handleChange} />
      <Button>Submit</Button>
    </FormGroup>
  </Form>  */

  render() {
    return (
      <div className = "content">
        <div id = "icons">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

          <a href="mailto:turokchoi@gmail.com" target = "_blank" class="fa fa-envelope"></a>
          <a href="https://www.linkedin.com/in/turokchoi/" target = "_blank" class="fa fa-linkedin"></a>
          <a href="https://www.instagram.com/tworocksimagination/" target = "_blank" class="fa fa-instagram"></a>
          <a href="https://github.com/TheTurok" target = "_blank" class="fa fa-github"></a>
        </div>


      </div>
    );
  }
}
