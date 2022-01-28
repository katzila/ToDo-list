

function Task({task,handleClick}) {
    return (
        <li onClick={() => handleClick(task)} key={task.id} className={"task" + (task.isActive ? "-active" : "")}>
            <div className={"circle-" + (task.status)}>
            </div>
            <p>{task.label}</p>
        </li>
    )
}

export default Task;