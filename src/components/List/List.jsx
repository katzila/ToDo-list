//импорт реакта
import React from "react";

//и необходимых компонентов
import NewTask from "../NewTask/NewTask";
import Task from "../Task/Task";

//компонент отвечающий за отображение всех оглавлений задач и добавление новых
function List({ tasks, addNewTask, changeActiveTo }) {

    const handleClick = (task) => { //если нажали на оглавление задачи - сделать её активной
        if (task.isActive) return;
        changeActiveTo(task);
    }
    return ( //заголовок "задачи: {N}", кнопка "Новая задача", список содержащий в себе .map для рендера каждого оглавления из tasks, ключ=task.id
        <React.Fragment>
            <header className="list-header">Задачи: {tasks.length}</header>
            <NewTask addNewTask={addNewTask} />
            <ul className="list">
                {
                    tasks.map((task) =>
                        <Task task={task} key={task.id} handleClick={handleClick} />
                    )
                }
            </ul>
        </React.Fragment>
    );

}

export default List; //экспорт для дальнейших нужд