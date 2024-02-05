import { useState } from "react"

const Input = ({taskList, setTaskList}) => {
const [input, setInput] = useState("")
const [error, setError] = useState("")
const handleAddTask = (e) => {
    e.preventDefault()
    if (input) {
        setTaskList([...taskList, input])
        setInput("")
        setError("")
    }else{
        setError("Pls enter a task")
    }
}
    return (
        <>
            <form className="flex flex-row items-center gap-3">
                <input
                    className={`border rounded-lg py-1.5 gap-3 ${error ? "border-red-500" : ""} `}
                    type="text"
                    placeholder="Add a task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button 
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 px-3.5 text-center me-2 mb-2" 
                    onClick={handleAddTask}
                >
                    Add
                </button>
            </form>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </>
    )
}

export default Input