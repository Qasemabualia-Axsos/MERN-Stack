import { useState } from "react";

const Show = (props) => {
    return (
        <>
            <div className="show">
                {props.boxes.map((item, index) =>
                    <div
                        key={index}
                        style={{
                            width: item.width + "px",
                            height: item.height + "px",
                            backgroundColor: item.color,
                            border: "1px solid black"
                        }}
                    ></div>
                )}
            </div>
        </>
    );
};

export default Show;
