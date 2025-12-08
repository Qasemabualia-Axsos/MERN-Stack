import React, { useState } from 'react';

const CounterForm = (props) => {
    const [num, setNum] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onCounterChange(num);   // send message to App
        setNum("");                // clear textarea after submit
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Enter a Num</h1>

            <input
                type='number'
                placeholder="Enter your Number here"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                >
            </input> 

            <button type='submit'>Set Number</button>
        </form>
    );
}

export default CounterForm;
