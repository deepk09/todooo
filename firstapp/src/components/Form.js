import React from "react";


function Form({setinputtext,inputtext,todos,settodos,setstatus,}){
    const inputtexthandler=(e)=>{
        setinputtext(e.target.value);
    }
    const submittodohandler=(e)=>{
        e.preventDefault();
        settodos([
                ...todos,{text:inputtext,completed:false,id:Math.random()*1000}
        ])
        setinputtext('');
    }
    const statusHandler=(e)=>{
        setstatus(e.target.value);

    }
    return(
        <form>
            <input onChange={inputtexthandler} type='text' className="todo-input" value={inputtext} placeholder="type here..."/>
            <button className="todo-button" type="submit" onClick={submittodohandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" onChange={statusHandler} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
export default Form;