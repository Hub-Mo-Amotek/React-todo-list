const Board = ({task, index, taskList, setTaskList}) => {

    const handleDelete = () => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
    }

    return (
        <div className="max-w-md rounded-xl flex flex-col items-center justify-center border text-center text-lg pt-3 px-4 md:px-6">
        <p>{task}</p>
        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-2 py-2 text-center me-2 mb-2 mt-4"
                onClick={handleDelete} 
                >
            Delete
        </button>
        </div>
    )
}

export default Board;