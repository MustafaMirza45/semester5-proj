import React, { Component } from 'react';

class Noob extends Component{
    render(){
        return(
            <div className="center">
                <h1>this is noob component {requestAnimationFrame((num)=>{console.log(num);})}</h1>
            </div>
        );
    }
}
export  default Noob;