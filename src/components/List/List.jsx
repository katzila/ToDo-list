
import React from "react";
import NewTask from "../NewTask/NewTask";
import Task from "../Task/Task";

function List({ tasks, addNewTask, changeActiveTo }) {

    const handleClick = (task) => {
        if (task.isActive) return;
        changeActiveTo(task);
    }
    return (
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

export default List;