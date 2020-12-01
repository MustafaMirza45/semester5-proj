import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Managers } from './managers';
import { Restaurant } from './restaurant';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
       
       combineReducers({
         managers: Managers,
         restaurants: Restaurant
         /*...createForms({
            register: InitialRegister
         })*/
       }) ,composeWithDevTools(applyMiddleware(thunk,logger))
       

    );
    return store;
    
}
