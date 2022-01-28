//деструктуризация и доставние useEffect и useState
import { useEffect, useState } from "react"

function Content({ task, changeStatus, removeTask, changeTaskContent }) {

    const [tempTask, setTempTask] = useState({...task});//временное хранилище для полей с заголовком и текстом содержимым

     useEffect(()=>{
         setTempTask({...task}); // обновляем временное содержимое если task поменялось из вне
    },[task]);

    const handleEnterPress = (e) => { //запрет на ввод enter
        if(e.key === "Enter"){
            e.preventDefault();
        }
    }
    const handleCilickSave=()=>{ //сохранить всё из временного хранилища в основном
        changeTaskContent(task.id, tempTask.label, tempTask.text);
    }
    const handleClickDelete=(id)=>{ // очистить поля и удалить задачу с заданным id
        setTempTask({
            ...tempTask,
            text:"",
            label: ""
        })
        removeTask(id); //послать id задачи на удаление
    }

    const handleHeaderChange = (event) => { //обновить заголовок при вводе
        setTempTask({
            ...tempTask,
            label: event.target.value
        })
    }
    const handleTextChange = (event) => { //обновить текст при вводе
        setTempTask({
            ...tempTask,
            text: event.target.value
        })
    }

    return ( // рендер поля редактирования заголовка, панели с кнопка изменения статуса из сохранения либо удаления задачи, поля редактирования текста
        <div className="content">
            <textarea value={tempTask ? tempTask.label : ''} placeholder="Покормить кота" onChange={handleHeaderChange} className="content-taskheader" onKeyDown={handleEnterPress} />
            <div className="content-buttons">
                <div className="content-buttons-done" onClick={() => { changeStatus(task.id, "done") }}>Выполнена</div>
                <div className="content-buttons-waiting" onClick={() => { changeStatus(task.id, "waiting") }}>Ожидает</div>
                <div className="content-buttons-processing" onClick={() => { changeStatus(task.id, "processing") }}>В процессе</div>
                <div className="content-buttons-save" onClick={() => { handleCilickSave() }}>Сохранить</div>
                <div className="content-buttons-delete" onClick={() => { handleClickDelete(task.id); }}>Удалить</div>
            </div>
            <textarea value={tempTask ? tempTask.text : ""} placeholder="дойти до магазина и купить корм" onChange={handleTextChange} className="content-field"/>
        </div>
    )
}
export default Content; //экспортирую всё это добро