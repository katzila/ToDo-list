//деструктуризация и доставание useEffect и useState
import { useEffect, useState } from "react"

function Content({ task, changeStatus, removeTask, changeTaskContent }) {

    const [tempTask, setTempTask] = useState({ ...task });//временное хранилище для полей с заголовком и текстом

    useEffect(() => {
        setTempTask({ ...task }); // обновляем временное содержимое, если task поменялось извне
    }, [task]);

    const handleCilickSave = () => { //сохранить всё из временного хранилища в основное
        changeTaskContent(task.id, tempTask.label, tempTask.text);
    }

    const handleClickDelete = (id) => { // очистить поля и удалить задачу с заданным id
        setTempTask({
            ...tempTask,
            text: "",
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

    return ( // рендер поля для редактирования заголовка, поля редактирования текста, панели с кнопками : изменения статуса, сохранения задачи, удаления задачи
        <div className="content">
            <input value={tempTask ? tempTask.label : ''} placeholder="Покормить кота" onChange={handleHeaderChange} className="content-taskheader" />
            <div className="content-buttons">
                <div className="content-buttons-done" onClick={() => { changeStatus(task.id, "done") }}>Выполнена</div>
                <div className="content-buttons-waiting" onClick={() => { changeStatus(task.id, "waiting") }}>Ожидает</div>
                <div className="content-buttons-processing" onClick={() => { changeStatus(task.id, "processing") }}>В процессе</div>
                <div className="content-buttons-save" onClick={() => { handleCilickSave() }}>Сохранить</div>
                <div className="content-buttons-delete" onClick={() => { handleClickDelete(task.id); }}>Удалить</div>
            </div>
            <textarea value={tempTask ? tempTask.text : ""} placeholder="дойти до магазина и купить корм" onChange={handleTextChange} className="content-field" />
        </div>
    )
}
export default Content; //экспортирую всё это добро