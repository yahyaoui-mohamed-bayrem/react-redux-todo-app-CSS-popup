import React, { Component } from 'react';
import './ToDoReactRedux.css';
import { addTodo } from '../reduxSetUp/actions/actionCreators.js';
import {store} from '../reduxSetUp/store/store.js';
import { connect } from 'react-redux';

class ToDoReactRedux extends Component {
    constructor ()
    {
        super()
        this.state = {
            toDoContent: "",
            id: 0,
            isCheked:false
        }
    }
    handleChange = (e) => {
        this.setState({toDoContent: e.target.value});
    }
    addMyTodo = () => {
        this.setState(
            {id: Date.now()},
             ()=>{
                store.dispatch(addTodo(this.state));
                this.setState({toDoContent: ""});
             });
    }
    render() {
        return (
            <div className='to-do-redux'>
                <h3 className='mytitle'>Daily To Do list</h3>
                <div className='controles'>
                    <input value={this.state.toDoContent} onChange={this.handleChange}></input>
                    <button className='add-btn' onClick={this.addMyTodo}>+</button>
                </div>
            </div>
        )
    }
}
export default ToDoReactRedux;