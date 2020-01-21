import { ADD_TODO, CHECK, DELETE, EDIT } from '../actions/types';
import { store } from '../store/store';



const addReducer = (state = [], action) => {
    switch (action.type){
        case ADD_TODO :
            return [...state, action.payload];
        case CHECK :
            let arr=[...state];
            arr.map(el=>el.id===action.payload? el.isCheked = !el.isCheked : el)
            return arr;
        case DELETE :
            let arr2=[...state];
            arr2=arr2.filter(el=>el.id!=action.payload); 
            return arr2;
        case EDIT :
            let arr3=[...state];
            arr3.map(el=>el.id===action.payload.x? el.toDoContent = action.payload.val : el)
            return arr3;  
        default : return state;
    }
}

export default addReducer;

// const intiateState = {
//     list:[],
//     payload: ""
// };

// const myList = [
//     {
//         id: 0,
//         toDoContent: 'qsdflmkjqdsmfj',
//         togle: false
//     },
//     {
//         id: 2,
//         toDoContent: 'sdfgg',
//         togle: false
//     },
//     {
//         id: 3,
//         toDoContent: 'aaarrrrrrrrrttttttttt',
//         togle: false
//     }
// ]
