import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isnavopen: false,
            ismodalopen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        //this.toggleModal = this.toggleModal.bind(this);
        //this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isnavopen: !this.state.isnavopen

        });
    }
   /* toggleModal(){
        this.setState({
            ismodalopen: !this.state.ismodalopen

        });
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }*/
    render(){
        /*<NavItem>
                                <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg">
                                    </span> Contact Us
                                </NavLink>
        </NavItem>*///for contactus link in header
        //login model line 96
        return(
            <React.Fragment>
                <Navbar dark expand="md"> 
                    <div className="container justify-content">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand className="mr-auto text" href="/" ><b>Foodville</b>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isnavopen} navbar> 
                        <Nav navbar>
                            <NavItem >
                                <NavLink className="nav-link" to="/noob">
                                <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/noober'>
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'>
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/map'>
                                    <span className="fa fa-map fa-lg"></span> Map
                                </NavLink>
                            </NavItem>
                            
                        </Nav>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to='/register'>
                                   <span className="fa fa-hand-grab-o fa-lg"></span>  Register
                                </NavLink>
                            </NavItem>
                            {/*<NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>*/}
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                {/*<Jumbotron>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-6">
                                <h1><b>Welcome to VAALO</b></h1>
                                <p>We welcome you to exquisite delicacies in the comfort of your work environment</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                
                <Modal className=" tfont shadows" isOpen={this.state.ismodalopen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody className=" shadows">
                        <Form  onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>*/}

            </React.Fragment>
        );
    }
}
export default Header;