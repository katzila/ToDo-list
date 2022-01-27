import { useState } from "react";

function NewTask({ addNewTask }) {
    const [isVisible, setIsVisible] = useState(false);
    const [lastId, setLastId] = useState(0);
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleCliclOnNewTaskButton = () => {
        if (!isVisible) {
            setIsVisible(true);
            setLastId(lastId+1);
        }
    }
    const handleCliclOnAddButton = () => {
        if (text==''){
            handleCliclOnExitButton();
            return;
        }
        setIsVisible(false);
        addNewTask(lastId, text);
        setText('');
    }
    const handleCliclOnExitButton = () => {
        setIsVisible(false);
        setLastId(lastId-1);
        setText('');
    }

    const handleEnterPress = (e) => {
        if(e.key === "Enter"){
            handleCliclOnAddButton();
        }
    }

    return (
        <div className="newtask">
            <div onClick={handleCliclOnNewTaskButton} className="newtask-button">

                <div className="plus">+</div>
                Новая задача

            </div>
            {isVisible && <div className="newtask-form">

                <div onClick={handleCliclOnExitButton} className="newtask-form-exit">X</div>
                Наименование заметки
                <textarea className="newtask-form-field" placeholder="Покормить кота..." onChange={handleChange} onKeyDown={handleEnterPress} />

                <div onClick={handleCliclOnAddButton} className="newtask-form-add">Добавить</div>

            </div>}
        </div>
    )
}
export default NewTask;