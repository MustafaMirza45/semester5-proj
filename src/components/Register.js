import React , { Component } from 'react';
import { Card, CardText, CardBody, Button, Row,  Label, Col} from 'reactstrap';//CardImg, CardTitle, CardSubtitle, CardHeader,
import { Control, Form, Errors } from 'react-redux-form';//, actions
import { sendmanager } from '../redux/ActionCreators';
import { connect } from 'react-redux';
//import { FadeTransform } from 'react-animation-components';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => {if(val>0){
    return  val && (val.length >= len);
}else{
    return true;
}

};
const isNumber = (val) => !isNaN(Number(val));
 
const validEmail = (val) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
};

const mapDispatchToProps = dispatch => ({
   sendmanager: (a)=>{dispatch(sendmanager(a))}
});
class Register extends Component{
        constructor(props){
            super(props);

            
            this.handleSubmit = this.handleSubmit.bind(this);
            
            
        }

      
        
        
        handleSubmit(values) {
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
            this.props.resetregisterform();
            this.props.sendmanager(values);
        }
        /*<Row className="form-group">
        <Label htmlFor="message" md={2}>Your Feedback</Label>
        <Col md={10}>
            <Control.textarea model=".message" id="message" name="message"
                rows="12"
                className="form-control" />
        </Col>
        </Row> for message box in form*/ 
        render(){
            return(
                
                <ReactCSSTransitionGroup transitionName = "example"
                    transitionAppear = {true} transitionAppearTimeout = {10000}
                    transitionEnter = {true} transitionEnterTimeout={1000} transitionLeave = {true} transitionLeaveTimeout={1000}>
                    <div className="container padd1">
                        <div className="Row justify-content-center">
                            <div className="col-8 col-md-8 mx-auto">
                                <Card className="cards2">
                                    <CardBody >
                                    <CardText className="col-12 col-sm-6 mx-auto center "><h3><b><u>Welcome!! Lets get you registered</u></b></h3></CardText>
                                    <div className="row row-content">
                                        <div className="col-12 col-md-9">
                                            <Form model="register" onSubmit={(values) => this.handleSubmit(values)}>
                                            <Row className="form-group">
                                                    <Label htmlfor="firstName" md={4}><b>First Name</b></Label>
                                                    <Col md={8}>
                                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                                            placeholder="First Name"
                                                            className="form-control"
                                                            validators={{
                                                                required,minLength: minLength(3),maxLength:  maxLength(15)
                                                            }}
                                                            />
                                                            <Errors
                                                            className="text-danger"
                                                            model=".firstname"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required\n',
                                                                minLength: 'Must be greater than 2 characters',
                                                                maxLength: 'must be 15 characters or less'
                                                            }}/>
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Label htmlFor="lastname" md={4}><b>Last Name</b></Label>
                                                        <Col md={8}>
                                                            <Control.text model=".lastname" id="lastname" name="lastname"
                                                                placeholder="Last Name"
                                                                className="form-control"
                                                                validators={{
                                                                    required,minLength: minLength(3),maxLength:  maxLength(15)
                                                                }}
                                                                />
                                                                <Errors
                                                                    className="text-danger"
                                                                    model=".lastname"
                                                                    show="touched"
                                                                    messages={{
                                                                        required: 'Required\n',
                                                                        minLength: 'Must be greater than 2 characters',
                                                                        maxLength: 'must be 15 characters or less'
                                                                }}/>
                                                            
                                                        </Col>                        
                                                </Row>
                                                <Row className="form-group">
                                                    <Label htmlFor="telnum" md={4}><b>Contact Tel.</b></Label>
                                                        <Col md={8}>
                                                            <Control.text model=".telnum" id="telnum" name="telnum"
                                                                placeholder="Tel. number"
                                                                className="form-control"
                                                                validators={{
                                                                    required,minLength: minLength(3),maxLength:  maxLength(20), isNumber
                                                                }}
                                                                />
                                                                <Errors
                                                                    className="text-danger"
                                                                    model=".telnum"
                                                                    show="touched"
                                                                    messages={{
                                                                        required: 'Required\n',
                                                                        minLength: 'Must be greater than 2 numbers',
                                                                        maxLength: 'must be 15 numbers or less',
                                                                        isNumber: 'Should only be numbers'
                                                                }}/>
                                                                
                                                        </Col>
                                                </Row>
                                                <Row className="form-group">
                                                        <Label htmlFor="email" md={4}><b>Email</b></Label>
                                                        <Col md={8}>
                                                            <Control.text model=".email" id="email" name="email"
                                                                placeholder="Email"
                                                                className="form-control"
                                                                validators={{
                                                                    required,validEmail
                                                                }}
                                                            />
                                                            <Errors
                                                                    className="text-danger"
                                                                    model=".email"
                                                                    show="touched"
                                                                    messages={{
                                                                        required: 'Required\n',
                                                                        validEmail: 'Invalid Email address'
                                                                    
                                                                }}/>
                                                                
                                                        </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Col md={{size: 6, offset: 2}}>
                                                        <div className="form-check">
                                                            <Label check>
                                                                <Control.checkbox model=".agree"
                                                                    name="agree"
                                                                    className="form-check-input"
                                                                /> {' '}
                                                                <strong>May we contact you?</strong>
                                                            </Label>
                                                        </div>
                                                    </Col>
                                                    <Col md={{size: 3, offset: 1}}>
                                                        <Control.select model=".contactType" name="contactType"
                                                            className="form-control">
                                                            <option>Tel.</option>
                                                            <option>Email</option>
                                                        </Control.select>
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Col md={{size: 10, offset: 6}}>
                                                        <Button type="submit" color="primary">
                                                            <b>Register</b>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Form>     
                                        </div>

                                    </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>   
                    </div>
                </ReactCSSTransitionGroup>
               
            );
       }
            
       
    
    }

export default connect(null,mapDispatchToProps)(Register);
