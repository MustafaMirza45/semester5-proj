import * as ActionTypes from './ActionTypes';

const baseUrl='http://localhost:3003/'



export const fetchManagers = () => (dispatch) => {

    dispatch(managersLoading(true));

    return fetch(baseUrl + 'manager')
        .then(response =>{
            if(response.ok){
                console.log("response ok");
                return response;
            }else{
                var error =new Error('Error '+ response.status + ': ' + response.statusText);
                console.log('Error '+ response.status + ': ' + response.statusText);
                error.response=response;
                throw error;
            }
        },
        error =>{
            var errmess= new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then((data)=> {
            dispatch(addmanager(data))})
        .catch(error => dispatch(managerfailed(error.message)));
};

export const managersLoading= ()=>({
    type: ActionTypes.MANAGER_LOADING
});
export const managerfailed= (errmess)=>({
    type:ActionTypes.MANAGER_FAILED,
    payload: errmess
});
export const addmanager = (managers) => 
   {
    return(
        {
            type: ActionTypes.ADD_MANAGER,
             payload: managers
        }
    );
    
};


export const fetchRestaurant = () => (dispatch) => {

    dispatch(restaurantLoading(true));

    return fetch(baseUrl + 'restaurant')
        .then(response =>{
            if(response.ok){
                console.log("response ok");
                return response;
            }else{
                var error =new Error('Error '+ response.status + ': ' + response.statusText);
                console.log('Error '+ response.status + ': ' + response.statusText);
                error.response=response;
                throw error;
            }
        },
        error =>{
            var errmess= new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then((data)=> {
            dispatch(addrestaurant(data))})
        .catch(error => dispatch(restaurantfailed(error.message)));
};

export const restaurantLoading= ()=>({
    type: ActionTypes.RESTAURANT_LOADING
});
export const restaurantfailed= (errmess)=>({
    type:ActionTypes.RESTAURANT_FAILED,
    payload: errmess
});
export const addrestaurant = (restaurant) => 
   {
    
    return(
        {
            type: ActionTypes.ADD_RESTAURANT,
             payload: restaurant
        }
    );
    
};