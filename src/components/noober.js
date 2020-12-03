import React, { Component } from 'react';
import { Card, CardImg, 
    CardTitle, CardHeader, Breadcrumb, BreadcrumbItem, CardBody, CardText ,Button} from 'reactstrap';
function Rendermanagersitem({manager, rest}){
    if(rest){
        
        return(
            <Card className="cards shadows">   
                <CardBody>
                        <CardTitle>{manager.Manager_Name}</CardTitle>
                        <CardText>{manager.Manager_Email}</CardText>
                        
                        {rest.map((res)=>{
                        return(
                            <div key={res.Restaurant_ID} >
                                <CardText>{res.Rest_Name}</CardText>
                                <CardText>{res.Website}</CardText>
                            </div>)
                        })}
                        
                        
                </CardBody>
        </Card>
        )
    }else 
    return(
        <Card className="cards shadows">   
                <CardBody>
                          <CardTitle>{manager.Manager_Name}</CardTitle>
                          <CardText>{manager.Manager_Email}</CardText>
                </CardBody>
        </Card>
    );
}
const Noober = (props) =>{// same as making a  menu function
    const noob = props.manager.managers.map((manager) => {
        let restaurant=props.restaurant.restaurants.filter((res)=> res.Manager_ID === manager.Manager_ID);
        return (
          <div key={manager.Manager_ID} className="col-12 col-md-5 m-1">
              {console.log((restaurant[0])?restaurant:null)}
            <Rendermanagersitem manager={manager} rest={(restaurant[0])?restaurant:null}/>
          </div>
        );
    });
    return(
        <div>
            {noob}
        </div>
    )



}
export  default Noober;