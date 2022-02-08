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
    const handleClickOnNewTaskButton = () => { //при нажатии на кнопку "новая задача" - показать форму и увеличить ид, для новой задачи
        if (!isVisible) {
            setIsVisible(true);
            setLastId(lastId + 1);
        }
    }
    const handleClickOnAddButton = () => { //при нажатии кнопки "добавить", если поле ввода не пустое - добавить задачу, иначе - просто закрыть форму
        if (text == '') {
            handleClickOnExitButton();
            return;
        }
        setIsVisible(false);
        addNewTask(lastId, text);
        setText('');
    }
    const handleClickOnExitButton = () => { //при нажатии на крестик закрыть форму и вернуться к старому lastId, текстовое поле очищается
        setIsVisible(false);
        setLastId(lastId - 1);
        setText('');
    }

    const handleEnterPress = (e) => { //если нажать "Enter" добавляется новая задача, аналогично нажатию кнопки "добавить"
        if (e.key === "Enter") {
            handleClickOnAddButton();
        }
    }

    return ( // рендер кнопки "новая задача", при нажатии на которую рендерится форма, которая закрывается по нажатию на крестик, либо добавлении новой задачи по нажатию "добавить"
        <div className="newtask">
            <div onClick={handleClickOnNewTaskButton} className="newtask-button">

                <div className="plus">+</div>
                Новая задача

            </div>
            {isVisible && <div className="newtask-form">

                <div onClick={handleClickOnExitButton} className="newtask-form-exit">X</div>
                Наименование заметки
                <input className="newtask-form-field" placeholder="Покормить кота..." onChange={handleChange} onKeyDown={handleEnterPress} />

                <div onClick={handleClickOnAddButton} className="newtask-form-add">Добавить</div>

            </div>}
        </div>
    )
}
export default NewTask;