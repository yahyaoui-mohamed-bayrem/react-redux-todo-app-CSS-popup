import React from 'react';
import './App.css';
import ToDoReactRedux from './components/ToDoReactRedux.js';
// import store from './reduxSetUp/store/store.js';
import { useSelector, connect } from 'react-redux';
import ToDoItemRender from './components/ToDoItemRender.js';



function App() {
  const myList= useSelector(state => state.list);
  return (
      <div className="App">
        <ToDoReactRedux/>
        {myList.map((el,i)=><ToDoItemRender todoItem={el} mykey={i}/>)}
      </div>
  );
}

export default App;
