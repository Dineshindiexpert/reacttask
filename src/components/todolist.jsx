import { useReducer, useState } from "react";

export default function TodoList({ initialTask = "task wil be empty" }) {

    const [tasklist, dispatch] = useReducer((state, action) => {
        return [...state, action];
    }, [initialTask]);


    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (inputValue.trim()) {
            dispatch(inputValue);
            setInputValue(""); 
        }
    };
   

    return (
        <div className="d-flex justify-content-center mt-5">

            <div className="card" style={{ minWidth: "100%" }}>
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
                        <button className="btn btn-primary" onClick={addTask}>Add</button>
                    </div>
                    <ul className="list-group">
                        {tasklist.map((task, index) => (
                            <li className="list-group-item d-flex " key={index}>
                                <div className="justify-content-start d-flex align-items-center">
                                    <input className="form-check-input me-2 " type="checkbox" id={`task-${index}`} />
                                    <label className="form-check-label" htmlFor={`task-${index}`}>{task}</label>
                                </div>
                                <div className="justify-content-end d-flex align-items-center ms-auto">
                                    <button className="btn btn-outline-danger me-0" onclick="cancel">Remove</button>

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
