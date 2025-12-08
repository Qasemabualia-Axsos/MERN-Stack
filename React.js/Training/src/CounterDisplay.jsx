import React from 'react';

const CounterDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <pre>{props.count}</pre>
        </>
    );
}

export default CounterDisplay;
