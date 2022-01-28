import { useEffect, useState } from "react"

function Content({ task, changeStatus, removeTask, changeTaskContent }) {

    const [tempTask, setTempTask] = useState({...task});

     useEffect(()=>{
         setTempTask({...task});
    },[task]);

    const handleEnterPress = (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            handleCilickSave();
        }
    }
    const handleCilickSave=()=>{
        changeTaskContent(task.id, tempTask.label, tempTask.text);
    }
    const handleClickDelete=(id)=>{
        setTempTask({
            ...tempTask,
            text:"",
            label: ""
        })
        removeTask(id)
    }

    const handleHeaderChange = (event) => {
        setTempTask({
            ...tempTask,
            label: event.target.value
        })
    }
    const handleTextChange = (event) => {
        setTempTask({
            ...tempTask,
            text: event.target.value
        })
    }

    return (
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
export default Content;