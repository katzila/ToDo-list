//достаем деструктуризацией useState из react'a
import { useState } from "react";

//компонент отвечающий за добавление новой задачи. Представляет форму с полем для написания заголовка, кнопкой добавления задачи, кнопкой закрытия формы без добавления задачи. А также кнопка для вызова этой формы
function NewTask({ addNewTask }) {
    const [isVisible, setIsVisible] = useState(false);//состояние формы, отображается ли она
    const [lastId, setLastId] = useState(0); // последний использованный ид, lastID всегда будет больше id любой задачи
    const [text, setText] = useState(''); // временное хранилище для поля ввода

    const handleChange = (event) => { // если что-то ввели в поле - обновить text
        setText(event.target.value);
    }
    const handleCliclOnNewTaskButton = () => { //при нажатии на кнопку "новая задача" - показать форму и увеличить ид, для новой задачи
        if (!isVisible) {
            setIsVisible(true);
            setLastId(lastId+1);
        }
    }
    const handleCliclOnAddButton = () => { //при нажатии кнопки добавить, если поле ввода не пусто- добавить задачу, иначе просто закрыть форму
        if (text==''){
            handleCliclOnExitButton();
            return;
        }
        setIsVisible(false);
        addNewTask(lastId, text);
        setText('');
    }
    const handleCliclOnExitButton = () => { //при нажатии на крестик закрыть форму и вернуться к старому lastId, текстовое поле очищается
        setIsVisible(false);
        setLastId(lastId-1);
        setText('');
    }

    const handleEnterPress = (e) => { //если нажать ввод добавляется новая задача, как при нажатии добавить
        if(e.key === "Enter"){
            handleCliclOnAddButton();
        }
    }

    return ( // рендер кнопки новая задача, при нажатии на которую рендерится форма, закрывается по нажатию на крестик, либо добавлении новой задачи
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