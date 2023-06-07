import React from "react";
import Todo from "./Todo";

function Todolist({todos,settodos,filteredtodos}){
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredtodos.map((todo)=>(
                    <Todo key={todo.id} todo={todo} text={todo.text} todos={todos} settodos={settodos}/>
                ))}
            </ul>
        </div>
    )
}

export default Todolist;