import React from "react";

const Result=(props)=>{

    return props.tabs.map((item,index)=>{
        return (
            <button key={index} onClick={()=>props.onTabClick(item)}>{item}</button>
        )
    })
}


export default Result