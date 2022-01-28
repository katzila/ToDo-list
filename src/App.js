//подключение react и деструтктуризация, достаём useState
import React, { useState } from "react";

//подключение используемых тут компонентов
import List from "./components/List/List";
import Content from "./components/content/Content";


function App() {// основной функциональный компонент приложения
    const [tasks, setTasks] = useState([]);  //в состоянии основной функции хранится массив объектов - наши задачи
    const [currTask,setCurrTask]=useState({}) // задача выбранная как isActive

    //добавление новой задачи из формы newTask, на вход приходит уникальный id новой задачи и её заголовок
    const addNewTask = (newId, newLabel) => {
        setTasks(tasks.map((task) => { //установка всех нынешних задач как не выбранных
            task.isActive = false;
        }))
        const newTask = {
            id: newId, //уникальный ид новой задачи
            label: newLabel, //заголовок
            text: "", //пока-что пустое содержание
            isActive: true,// пометили только-что добавленную задачу как выбранную
            status: 'waiting' // по-умолчанию статус задачи = ожидает
        };
        setTasks([...tasks, newTask]); //добавляем новую задачу в массив
        setCurrTask({id:newId,label:newLabel,text:""}) //устанавливаем её как текущую
    }
    const changeTaskContent=(id,newlabel,newtext)=>{ // обновление заголовка и содержания задачи пришедные из компонента content
        setTasks([
            ...tasks.map((task) => 
                task.id === id ? { ...task, label: newlabel, text:newtext } : { ...task } //ищем нужную задачу по ид и обновляем её
            )
        ])
    }
    const removeTask = (id) => { //удаление задачи по id пришедшему из content
        setTasks([
            ...tasks.filter((task) => task.id !== id) //фильруем массив и возвращаем его-же, но без задачи с id
        ])
        changeActiveTo(null); //нет активных задач
        setCurrTask(null); //нынешняя удалена
    }
    const changeStatus = (id, newStatus) => { // меняем статус задачи с task.id==id на статус пришедный из компонента content
        setTasks([
            ...tasks.map((task) => 
                task.id === id ? { ...task, status: newStatus } : { ...task }  //в копии массива ищем нужную задачу по id, если нашли - меняем статус, иначе возвращаем обратно как было
            )
        ])
    }
    const changeActiveTo = (taskToChange) => { //меняем активную задачу на пришедшую
        if(taskToChange===null) return // если пришло ничего- ничего не делать
        setTasks([
            ...tasks.map((task) => 
                task.id === taskToChange.id ? { ...task, isActive: true } : { ...task, isActive: false }  // в копии массива ищем задачу с id как у нашей и активируем, остальные дизактивируем
            )
        ])
        setCurrTask({id:taskToChange.id, label:taskToChange.label, text:taskToChange.text})  //делаем пришедную задачу текущей 
    }
    return (  //в основном div'e app - 2 div'а. leftbar- колонка с заголовками задач и кнопкой создания новой задачи, слева. content- основной блок для всех взаимодействий с текущей задачей
        <div className='app'>
            <div className='app-leftbar'> 
                <List tasks={tasks} addNewTask={addNewTask} changeActiveTo={changeActiveTo} />
            </div>
            <Content task={currTask} changeTaskContent={changeTaskContent} changeStatus={changeStatus} removeTask={removeTask} /> 
        </div>
    )
}

export default App; //экпортируем компонент, для дальнейшого пользования