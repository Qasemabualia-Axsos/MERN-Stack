import React, {useState} from 'react'

const Box=(props)=>{
    const [color,setColor]=useState("");
    const [width,setWidth]=useState("");
    const [height,setHeight]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.addBox(color,width,height);
        setColor("");
        setHeight("");
        setWidth("");
        }

        return (
            <>
            <form onSubmit={handleSubmit}>
                <label>Color:</label>
                <input type="text" value={color} onChange={(e)=>setColor(e.target.value)}/>
                <label>Width:</label>
                <input type="number" value={width} onChange={(e)=>setWidth(e.target.value)}/>
                <label>Height:</label>
                <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)}/>
                <button>Sumbit</button>
            </form>
            </>
        )
    
}

export default Box