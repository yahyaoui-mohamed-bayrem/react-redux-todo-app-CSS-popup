import React, { Component } from 'react';
import './ToDoItemRender.css';
import { checkUnchek, deleteItem, editItem } from '../reduxSetUp/actions/actionCreators.js';
import {store} from '../reduxSetUp/store/store.js';
import Popup from "reactjs-popup";

class ToDoItemRender extends Component {
    constructor(props){
        super(props)
    }
    checkIt = (x)=>{
        store.dispatch(checkUnchek(x))
    }
    deleteTheDirtyFuker = (x)=>{
        store.dispatch(deleteItem(x))
    }
    modifyIt = (x, event) =>{
        let val= event.target.value;
        let comb ={ val, x };
        store.dispatch(editItem(comb));
    }
    render() {
        return (
            <div className='item-container' style={{backgroundColor: this.props.mykey%2==0?'rgba(43, 42, 105, 0.726)':'seagreen'}}>
                <label className="container">
                    <input type="checkbox"  onChange={()=>this.checkIt(this.props.todoItem.id)}/>
                    <span className="checkmark"></span>
                </label>
                <h3 className='todo-item' style={{textDecoration:this.props.todoItem.isCheked?'line-through':''}}>{this.props.todoItem.toDoContent}</h3>
                <div className='btn-container'>                    
                    <Popup trigger={<button className='modify-btn'></button>} position="right center">
                        <div>New content</div>
                        <input className='popup-input' onChange={(e)=>this.modifyIt(this.props.todoItem.id, e)}></input>
                    </Popup>
                    <button className='delete-btn' onClick={()=>this.deleteTheDirtyFuker(this.props.todoItem.id)}></button>
                </div>
            </div>
        )
    }
}
export default ToDoItemRender;