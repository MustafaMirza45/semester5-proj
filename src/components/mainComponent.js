import React, { Component } from 'react';
import Header from './header';
import Footer from './footercomp';
import logo from '../logo.svg';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Noob from './noob';
import Noober from './noober';


class Main extends Component {
    render(){
        return(
            
            <div>
                <Header/>
                    <div className="center">
                        <h1>HEY HOMIES</h1>
                    </div>
                    <Switch location={this.props.location}>
                        <Route path="/noober" component={Noober}/>
                        <Route exact path="/noob" component={Noob}/>
                    </Switch>
                <Footer/>
            </div>
            
        );
    }
}


export default Main;