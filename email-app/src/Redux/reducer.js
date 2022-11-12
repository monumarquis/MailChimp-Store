import { GET_DATA } from "./actionTypes";
import { FILTER_DATA } from './actionTypes'
import { USER_EMAIL} from './actionTypes';

const initState = {
    pages : [],
    sorted : [],
    email : ""
}

const reducer = ( store = initState , {type , payload}) =>{
    switch (type) {
        case GET_DATA : {
                return { ...store , pages : payload , sorted : payload }
        }

        case FILTER_DATA : {
            if( payload == ""){
                return  { ...store , sorted : store.pages }
            }
            
            const filter = store.pages.filter( a =>{
                return a.type == payload
            });
            console.log(filter, "filter")
            return { ...store , sorted : filter }
        }

        case USER_EMAIL : {
                return { ...store , email : payload }
        }
            
        default:
            return store;
    }
}

export {reducer};