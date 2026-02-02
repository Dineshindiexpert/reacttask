import { useReducer, useState } from "react";

export default function TodoList({ initialTask = "first task" }) {
    // 1. Fixed typos: 'const', 'tasklist', 'setTasklist'
    const [tasklist, dispatch] = useReducer((state, action) => {
        return [...state, action];
    }, [initialTask]); // Initialize with the default task

    // 2. Local state to track what the user is typing
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (inputValue.trim()) {
            dispatch(inputValue);
            setInputValue(""); // Clear input after adding
        }
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            {/* 3. React uses object syntax for 'style' and 'className' for 'class' */}
            <div className="card" style={{ width: "22rem" }}>
                <div className="card-header text-center">
                    <h1>To-Do List</h1>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter task..." 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button 
                            className="btn btn-primary" 
                            onClick={addTask}
                        >
                            Add
                        </button>
                    </div>
                    <ul className="list-group">
                        {tasklist.map((task, index) => (
                            <li className="list-group-item" key={index}>
                                <input className="form-check-input me-2" type="checkbox" id={`task-${index}`} />
                                <label className="form-check-label" htmlFor={`task-${index}`}>{task}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
