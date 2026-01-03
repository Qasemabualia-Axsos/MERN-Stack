import { useState } from "react"
import { useParams } from "react-router-dom";



const Color = () => {
    const { color1 } = useParams();
    const { color2 } = useParams();
    const { value } = useParams();
    return (
        <>
            <nav style={{ width: "100%", height: "120px", backgroundColor:  color2}} >
                <h1 style={{ color:  color1  }}>The word is :{value}</h1>
            </nav>
        </>
    )
}

export default Color