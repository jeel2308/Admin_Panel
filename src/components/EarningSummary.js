import React from "react";
import {Line} from "react-chartjs-2";
import {useState,useEffect} from "react";
import {plotConfig,options} from "../config/earning_summary";

const dataLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data = [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000];


function EarningSummary(){
    const [labels,setLabels] = useState([]);
    const initialDataSet = [{
        ...plotConfig,
        data: [],
    }];
    const dropDownClass = "dropdown-menu dropdown-menu-right shadow animated--fade-in";
    const [datasets,setdatasets] = useState(initialDataSet);
    const [actionVisible,setActionVisibility] = useState(false);

    function handleDisplay() {
        setActionVisibility(!actionVisible);
    }

    useEffect(()=>{
        setLabels(dataLabels);
        setdatasets([{
            ...plotConfig,
            data
        }]);
        window.addEventListener('click',function(e){
            const classList = Array.from(e.target.classList);
            const id = Number(e.target.getAttribute("data-id"));
            if(!classList.includes("fa-ellipsis-v") || id!==1){
                setActionVisibility(false);
            }
        });
    },[]);

    const actionStyle = {
        "position": "absolute",
        "transform": `translate3d(${-157}px, ${18}px, ${0}px)`,
        "top": `${0}px`,
        "left": `${0}px`,
        "willChange": "transform"
    }

    return (
        <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                    <div className={actionVisible?"dropdown no-arrow show":"dropdown no-arrow"}>
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded={actionVisible?"true":"false"}>
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"
                               onClick={handleDisplay}
                               data-id={1}
                            ></i>
                        </a>
                        <div className={actionVisible?(dropDownClass + " show"):dropDownClass}
                             aria-labelledby="dropdownMenuLink"
                             style = {actionVisible?actionStyle:{}}
                             x-placement={actionVisible?"bottom-end":""}
                        >
                            <div className="dropdown-header">Dropdown Header:</div>
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="chart-area">
                        <Line data={{
                            labels,
                            datasets
                        }}
                              options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EarningSummary;