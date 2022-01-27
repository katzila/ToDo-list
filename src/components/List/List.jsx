
import NewTask from "../NewTask/NewTask";
import Task from "../Task/Task";

function List({ tasks, addNewTask, changeActiveTo}) {

    const handleClick = (task) => {
        if (task.isActive) return;
        changeActiveTo(task);
    }
    return (
        <ul className="list">
            <header key={0} className="list-header">Задачи: {tasks.length}</header>
            {
                tasks.map((task) =>
                    <Task task={task} key={task.id} handleClick={handleClick}/>
                )
            }
            <NewTask addNewTask={addNewTask} />
        </ul>);
}

export default List;