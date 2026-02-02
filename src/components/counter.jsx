import React, { useReducer, Fragment } from "react";

const Counter = () => {
    const initialState = 10;

    // Reducer defined outside or inside; usually outside is better for performance
    function reducer(state, action) {
        switch (action.type) {
            case "INCREMENT":
                
                return state + 1;
            case "DECREMENT":
                if (state<1){
                    alert("can't be negative")
                    return state;
                }
                else{
                    return state - 1;
                }
               
            default:
                return state;  
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
        return initial;
    });

    return (
        <>
            <div className="d-flex flex-column justify-content-center m-5 ms-5">
                <h1 className="text-center my-4 text-white bg-primary p-5 rounded-2">Current value of count = {state}</h1>
                <div className="d-flex justify-content-center gap-5">
                    <div>
                        <button className="btn btn-success p-4 fs-3" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                    </div>
                    <div>
                        <button className="btn btn-danger p-4 fs-3" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Counter;
