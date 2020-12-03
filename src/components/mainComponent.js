import React, { Component } from 'react';
import Header from './header';
import Footer from './footercomp';
//import logo from '../logo.svg';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Noob from './noob';
import Noober from './noober';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchManagers, fetchRestaurant } from '../redux/ActionCreators';
import { render } from '@testing-library/react';
import Register from './Register';

function renders({yes}){
    //console.log(yes.Manager_ID);
    return(
        <div>
            {yes.Manager_ID}
        </div>
    )
}
const mapStateToProps = state=>{
    
    return{
      managers: state.managers,
      restaurants: state.restaurants
    };
  }
  const mapDispatchToProps = dispatch => ({
    fetchManagers: (m)=>{dispatch(fetchManagers(m))},
    fetchRestaurant: (m)=>{dispatch(fetchRestaurant(m))},
    resetregisterform: () => {dispatch(actions.reset('register'))},
  });
class Main extends Component {
    componentDidMount(){
        this.props.fetchManagers(this.props.m);
        this.props.fetchRestaurant(this.props.m);
        
    }
    componentWillUnmount(){
        this.props.fetchManagers(this.props.m);
        this.props.fetchRestaurant(this.props.m);
    }
    render(){
       // renders();
        console.log(this.props.managers.managers[0]);
         return(
            
            <div>
                {console.log(this.props.managers.managers.filter((manager)=> manager.Manager_ID === 2))}
                <Header/>
                    <div className="center">
                        <h1>HEY HOMIES  </h1>
                    </div>
                    <Switch location={this.props.location}>
                        <Route exact path="/register" component={()=><Register  resetregisterform={this.props.resetregisterform}/>}/>
                        <Route path="/noober" component={()=><Noober manager={this.props.managers} restaurant={this.props.restaurants} m={this.props.m}/>}/>
                        <Route exact path="/noob" component={Noob}/>
                    </Switch>
                <Footer/>
                
            </div>
            
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));