import React, { Component } from 'react';
import Header from './header';
import Footer from './footercomp';
//import logo from '../logo.svg';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Noob from './noob';
import Noober from './noober';
import { connect } from 'react-redux';
import { fetchManagers, fetchRestaurant } from '../redux/ActionCreators';
import { render } from '@testing-library/react';

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
    fetchManagers: ()=>{dispatch(fetchManagers())},
    fetchRestaurant: ()=>{dispatch(fetchRestaurant())}
  });
class Main extends Component {
    componentDidMount(){
        this.props.fetchManagers();
        this.props.fetchRestaurant();
    }
    
    render(){
       // renders();
         return(
            
            <div>
                {console.log(this.props.managers.managers.filter((manager)=> manager.Manager_ID === 2))}
                <Header/>
                    <div className="center">
                        <h1>HEY HOMIES  </h1>
                    </div>
                    <Switch location={this.props.location}>
                        <Route path="/noober" component={()=><Noober manager={this.props.managers} restaurant={this.props.restaurants} />}/>
                        <Route exact path="/noob" component={Noob}/>
                    </Switch>
                <Footer/>
                
            </div>
            
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));