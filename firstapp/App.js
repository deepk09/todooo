import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css"
import Form from "./components/Form";
import Todolist from "./components/Todolist";


function App(){

  const[inputtext,setinputtext]=useState("");
  const[todos,settodos]=useState([]);
  const[status,setstatus]=useState("all");
  const[filteredtodos,setfilteredtodos]=useState([]);

  useEffect(()=>{
    filterHandler();
  },[todos,status]);

  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setfilteredtodos(todos.filter(todo=>todo.completed==true))
        break;
      case 'uncompleted':
        setfilteredtodos(todos.filter(todo=>todo.completed==false))
        break;
      default:
        setfilteredtodos(todos);
        break;
    }
  }
  
  return(
    <div className="App">
      <header>
      <h1>ToDo.</h1>
      </header>
      <Form 
      todos={todos}  
      settodos={settodos} 
      setinputtext={setinputtext} 
      inputtext={inputtext}
      setstatus={setstatus}
      />
      <Todolist 
      todos={todos}
      settodos={settodos}
      filteredtodos={filteredtodos}/>
    </div>
  )
}
export default App;