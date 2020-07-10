import React from "react";
import Project from "./Project";
function ProjectList(){
    const projectList = [
        {
            completionStatus : 20,
            description : "Server Migration",
            color : "bg-danger"
        },
        {
            completionStatus: 40,
            description: "Sales Tracking",
            color : "bg-warning"
        },
        {
            completionStatus: 60,
            description: "Customer Database",
            color : ""
        },
        {
            completionStatus: 80,
            description: "Payout Details",
            color : "bg-info"
        },
        {
            completionStatus: 100,
            description: "Account Setup",
            color : "bg-success"
        }
    ];
    return (
        <div className='col-lg-6 mb-4'>
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
                {projectList.map((obj)=>{
                    return <Project {...obj}/>
                })}
                {/*<h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>*/}
                {/*<div className="progress mb-4">*/}
                {/*    <div className="progress-bar bg-danger" role="progressbar" style={{*/}
                {/*        width: "20%",*/}
                {/*         ariaValuenow:"100",*/}
                {/*         ariaValuemin:"0",*/}
                {/*        ariaValuemax:"100"*/}
                {/*    }}*/}
                {/*    ></div>*/}
                {/*</div>*/}
                {/*<h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40%</span></h4>*/}
                {/*<div className="progress mb-4">*/}
                {/*    <div className="progress-bar bg-warning" role="progressbar" style=*/}
                {/*        {{width: "40%",*/}
                {/*         ariaValuenow:"100",*/}
                {/*         ariaValuemin:"0",*/}
                {/*        ariaValuemax:"100"*/}
                {/*    }}*/}
                {/*    ></div>*/}
                {/*</div>*/}
                {/*<h4 className="small font-weight-bold">Customer Database <span className="float-right">60%</span></h4>*/}
                {/*<div className="progress mb-4">*/}
                {/*    <div className="progress-bar" role="progressbar" style=*/}
                {/*        {{width: "60%",*/}
                {/*         ariaValuenow:"100",*/}
                {/*         ariaValuemin:"0",*/}
                {/*        ariaValuemax:"100"*/}

                {/*    }}></div>*/}
                {/*</div>*/}
                {/*<h4 className="small font-weight-bold">Payout Details <span className="float-right">80%</span></h4>*/}
                {/*<div className="progress mb-4">*/}
                {/*    <div className="progress-bar bg-info" role="progressbar" style=*/}
                {/*        {{width: "80%",*/}
                {/*         ariaValuenow:"100",*/}
                {/*         ariaValuemin:"0",*/}
                {/*        ariaValuemax:"100"*/}

                {/*    }}></div>*/}
                {/*</div>*/}
                {/*<h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>*/}
                {/*<div className="progress">*/}
                {/*    <div className="progress-bar bg-success" role="progressbar" style={{width: "100%",*/}
                {/*         ariaValuenow:"100",*/}
                {/*         ariaValuemin:"0",*/}
                {/*        ariaValuemax:"100"*/}
                {/*    }}></div>*/}
                {/*</div>*/}
            </div>
        </div>
        </div>
    );
}

export default ProjectList;