import React, { useState } from "react";

import List from "./components/List/List";
import Content from "./components/content/Content";


function App() {
    const [tasks, setTasks] = useState([]);
    const [currTask,setCurrTask]=useState({})

    const addNewTask = (newId, newLabel) => {
        setTasks(tasks.map((task) => {
            task.isActive = false;
        }))
        const newTask = {
            id: newId,
            label: newLabel,
            text: "",
            isActive: true,
            status: 'waiting'
        };
        setTasks([...tasks, newTask]);
        setCurrTask({id:newId,label:newLabel,text:""})
    }
    const changeTaskContent=(id,newlabel,newtext)=>{
        setTasks([
            ...tasks.map((task) => 
                task.id === id ? { ...task, label: newlabel, text:newtext } : { ...task }
            )
        ])
    }
    const removeTask = (id) => {
        setTasks([
            ...tasks.filter((task) => task.id !== id)
        ])
        changeActiveTo(null);
        setCurrTask(null);
    }
    const changeStatus = (id, newStatus) => {
        setTasks([
            ...tasks.map((task) => 
                task.id === id ? { ...task, status: newStatus } : { ...task }
            )
        ])
    }
    const changeActiveTo = (taskToChange) => {
        if(taskToChange===null) return
        setTasks([
            ...tasks.map((task) => 
                task.id === taskToChange.id ? { ...task, isActive: true } : { ...task, isActive: false }
            )
        ])
        setCurrTask({id:taskToChange.id, label:taskToChange.label, text:taskToChange.text})
    }
    return (
        <div className='app'>
            <div className='app-leftbar'>
                <List tasks={tasks} addNewTask={addNewTask} changeActiveTo={changeActiveTo} />
            </div>
            <Content task={currTask} changeTaskContent={changeTaskContent} changeStatus={changeStatus} removeTask={removeTask} />
        </div>
    )
}

export default App;