import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Link } from "react-router-dom";

<<<<<<< HEAD
class EmployeePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <Form id="formContent">
      <FormGroup>
        <Label for="name">Employee Full Name</Label>
        <Input type="text" name="name" id="name" placeholder="Full Name" />
      </FormGroup>
      <FormGroup>
        <Label for="temperature">Temperature</Label>
        <Input type="number" step="0.1" name="temperature" id="temperature" placeholder="Temperature" />
      </FormGroup>
      <FormGroup>
        <Label for="vaccinated">Vaccinated?</Label>
        <Input type="select" name="vaccinated" id="vaccine">
          <option>YES</option>
          <option>NO</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Notes:</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button><Link id="buttons" to="">Submit</Link></Button>
    </Form>
=======
const EmployeePage = () => {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <link rel="shortcut icon" type="image/png" href="tempslogo.png" />
        <meta name="google" content="notranslate" />
        <style dangerouslySetInnerHTML={{__html: "\n\n\t\th1 {\n\t   \ttext-align: center;\n\t\t\tfont-family: fantasy;\n\t    font-size: 3em;\n      color:rgb(205, 240, 6);\n      width: auto;\n\n}\n\n\nh3 {\n\t\t\ttext-align: center;\n\t\t}\n\t\tcaption {\n\t\t\tfont-size: 160%;\n\t\t}\n\t\ttable {\n\t\t\tmargin-left: 130px;\n\t\t}\n\t\t.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 20%;\n}\n.container {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\tVertical-align:center;\n\tbackground-color:#ECEE4E;\n\n\n\n}\n\n\n.style {\ntext-align: center;\nheight:auto;\n  width:100%;\n  margin:0;\n  padding:0;\n  position:absolute;\n\n  left:50%;\n  transform:translate(-50%,-120%);\n  font-family:Arial;\n  line-height:2em;\n  \n\n font-size:20px;\n  background-color:#ECEE4E;\n  color:black;\n\n\n}\n\n\n.topnav {\n  overflow: hidden;\n  background-color:#e2e5eb8a ;\n}\n\n.topnav a {\n  float: right;\n  color:black;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.topnav a:hover {\n  background-color: #F9FC15;\n  color: black;\n}\n\nbody {\n  background-image: url(\"background.jpg\");\n  \n}\n\n#title-Tag-Line {\n  font-size: 20px;\n}\n/* .card-item__bg{\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  display: block;\n  position: relative;\n  margin: 30px auto;\n  transform: translate(0px, 50px);\n  z-index: 5;\n} */\n\n/* form animation starts */\n.form {\n  background: #fff;\n  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);\n  border-radius: 5px;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  left: 0;\n  right: 0;\n  position: absolute;\n  border-top: 5px solid #0e3721;\n/*   z-index: 1; */\n  animation: bounce 1.5s infinite;\n}\n::-webkit-input-placeholder {\n  font-size: 1.5em;\n}\n\n.title{\n  display: block;\n  font-family: sans-serif;\n  margin: 10px auto 5px;\n  width: 300px;\n}\n.termsConditions{\n  margin: 0 auto 5px 90px;\n}\n\n.pageTitle{\n  font-size: 2em;\n  font-weight: bold;\n}\n.secondaryTitle{\n  color: grey;\n}\n\n.name {\n  background-color: #ebebeb;\n  color: rgb(10, 9, 9);\n}\n.name:hover {\n  border-bottom: 5px solid #0e3721;\n  height: 30px;\n  width: 380px;\n  transition: ease 0.5s;\n}\n\n.temprature {\n  background-color: #ebebeb;\n  height: 2em;\n}\n\n.temprature:hover {\n  border-bottom: 5px solid #0e3721;\n  height: 30px;\n  width: 380px;\n  transition: ease 0.5s;\n}\n\n.time {\n  background-color: #ebebeb;\n  height: 2em;\n}\n\n.time:hover {\n  border-bottom: 5px solid #0e3721;\n  height: 30px;\n  width: 380px;\n  transition: ease 0.5s;\n}\n\n.notes {\n  background-color: #ebebeb;\n  overflow: hidden;\n  height: 10rem;\n}\n\n.notes:hover {\n  border-bottom: 5px solid #0e3721;\n  height: 12em;\n  width: 380px;\n  transition: ease 0.5s;\n}\n\n.formEntry {\n  display: block;\n  margin: 30px auto;\n  min-width: 300px;\n  padding: 10px;\n  border-radius: 2px;\n  border: none;\n  transition: all 0.5s ease 0s;\n}\n\n.submit {\n  width: 200px;\n  color: white;\n  background-color: #0e3721;\n  font-size: 20px;\n}\n\n.submit:hover {\n  box-shadow: 15px 15px 15px 5px rgba(78, 72, 77, 0.219);\n  transform: translateY(-3px);\n  width: 300px;\n  border-top: 5px solid #0e5d8f;\n  border-radius: 0%;\n}\n\n.container2 {\n  display: block;\n  position: relative;\n  text-align: center;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n\n.container2 input {\n  position: center;\n  opacity: 0;\n  cursor: pointer;\n}\n\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left:5;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50%;\n}\n\n\n.container2:hover input ~ .checkmark {\n  background-color: #ccc;\n}\n\n\n.container2 input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n\n.container2 input:checked ~ .checkmark:after {\n  display: block;\n}\n\n\n.container2 .checkmark:after {\n \ttop: 9px;\n\tleft: 9px;\n\twidth: 8px;\n\theight: 8px;\n\tborder-radius: 50%;\n\tbackground: white;\n}\n\n" }} />
        <title> Temps Employee</title>  
        <div className="text-center">
          <h1>Welcome to Temps Employee</h1>
        </div>
        <div className="topnav">
          <a href="#index.html" target="_blank">News</a>
          <a href="#index.html" target="_blank">Vaccine Finder</a>
          <a href="#index.html" target="_blank">Home</a>
        </div>
        <div className="wrapper">
          <form className="form">
            <div className="pageTitle title">Employee Questionnaire Page</div>
            <div className="secondaryTitle title">Please fill out this form completely!</div>
            <input type="text" className="name formEntry" placeholder="Name" />
            <input type="text" className="temprature formEntry" placeholder="Temprature (Number Only!)" />
            <input type="text" className="time formEntry" placeholder="Time (Please indicate 'AM' or 'PM')" />
            <h3>Did you take the Vaccine?</h3>
            <label className="container2">Yes
              <input type="radio" defaultChecked="checked" name="radio" />
              <span className="checkmark" />
            </label>
            <label className="container2">No
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
            <textarea className="notes formEntry" placeholder="Notes" defaultValue={""} />
            <input type="checkbox" className="termsConditions" defaultValue="Term" />
            <label style={{color: 'grey'}} htmlFor="terms">  I Accept the <span style={{color: '#0e3721'}}>Terms of Use</span> &amp; <span style={{color: '#0e3721'}}>Privacy Policy</span>.</label><br />
            <button className="submit formEntry" onclick="Thanks()">Submit</button>
          </form>
        </div>
      </div>
>>>>>>> main
    );
  }
}

export default EmployeePage;