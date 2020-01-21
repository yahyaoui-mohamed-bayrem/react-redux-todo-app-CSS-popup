import { ADD_TODO, CHECK, DELETE, EDIT } from './types.js';


export function addTodo(newTODO) {
    return {
      type: ADD_TODO,
      payload: newTODO
    }
  }
  export function checkUnchek(id) {
    return {
      type: CHECK,
      payload: id
    }
  }
export function deleteItem(id){
  return {
    type: DELETE,
    payload: id
  }
}
export function editItem(obj){
  return {
    type: EDIT,
    payload: obj
  }
}
