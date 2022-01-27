

function Task({task,handleClick}) {
    return (
        <li onClick={() => handleClick(task)} key={task.id} className={"task" + (task.isActive ? "-active" : "")}>
            <div className={"circle-" + (task.status)}>
            </div>
            {task.label.length<12?task.label:task.label.substring(0,11)+'...'}
        </li>
    )
}

export default Task;