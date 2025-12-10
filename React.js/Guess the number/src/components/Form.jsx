import React, { useState } from "react";



const Form = (props) => {

    const [guess, setGuess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.checkGuess(guess);
        setGuess("");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label >Add Your Number:</label>
                <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} />
                <button>sumbit</button>
            </form>
        </>
    )
}

export default Form