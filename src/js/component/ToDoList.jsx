import React, {useState} from "react"

export const ToDoList = () => {
    const [tarea,setTarea]=useState("")
    const [listTarea,setListTarea]=useState(['dos', 'tres'])
    const handleSubmit = (event) => {
        event.preventDefault();
        setListTarea([...listTarea,tarea])
        setTarea('')
    }
    const handleInput = (event) => {
        setTarea(event.target.value)
    }
    const handleDelete = (tareaParam) => {
        
        setListTarea(listTarea.filter((elem)=>{
            return elem != tareaParam
        })) 
    }
    return (
        <div>
            <h1 className="text-center mt-5">Todo List with React</h1>
            <h2 className="text-center">Add Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" value={tarea} onChange={handleInput}/>
            </form>
            <h2 className="text-center">Todo List</h2>
            <ul className="list-group">
                {listTarea.map((item,index) => (
                    <li key={index} className= " d-flex justify-content-between list-group-item">{item}  <span onClick={()=>handleDelete(item)} className="visible text-danger">borrar</span></li>
                ))}
                <li className="list-group-item list-group-item-secondary text-end pe-2">Task {listTarea.length}</li>
            </ul>
        </div>

    )

}