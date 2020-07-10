import React from "react";

function Project({completionStatus,description,color}){
    const projectStyle = {
        width : `${completionStatus}%`,
        ariaValuenow : "100",
        ariaValuemin : "0",
        ariaValuemax : "100"
    }
    return (
        <>
            <h4 className="small font-weight-bold">
                {description}<span className="float-right">
                {completionStatus===100?"Complete!":`${completionStatus}%`}</span></h4>
                <div className="progress mb-4">
                    <div
                        className={color?("progress-bar " + color):"progress-bar"}
                        role="progressbar"
                        style={projectStyle}
                    ></div>
                </div>
        </>
    )
}

export default Project;