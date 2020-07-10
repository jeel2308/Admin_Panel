import React, {useEffect, useState} from "react";
import {Doughnut} from "react-chartjs-2";
import {plotConfig,options} from "../config/ravenue_source";

const dataLabels = ["Direct", "Referral", "Social"];
const data = [55,30,15];

function RavenueSource(){
    const [labels,setLabels] = useState([]);
    const initialData = [{
      data: [],
      ...plotConfig
    }];
    const [datasets,setDatasets] = useState(initialData);


  const [actionVisible,setActionVisibility] = useState(false);
  const dropDownClass = "dropdown-menu dropdown-menu-right shadow animated--fade-in";
    function handleDisplay() {
        setActionVisibility(!actionVisible);
    }

    useEffect(()=>{
        setLabels(dataLabels);
        setDatasets([{
            data,
            ...plotConfig
        }]);
        window.addEventListener('click',function(e){
            const classList = Array.from(e.target.classList);
            const id = Number(e.target.getAttribute("data-id"));
            if(!classList.includes("fa-ellipsis-v") || id!==2){
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
        <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                    <div className={actionVisible?"dropdown no-arrow show":"dropdown no-arrow"}>
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"
                               onClick={()=> {
                                   handleDisplay(2);
                               }}
                               data-id={2}
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
                    <div className="chart-pie pt-4 pb-2">
                        <Doughnut data={{
                            labels,datasets
                        }} options={options} />
                    </div>
                    <div className="mt-4 text-center small">
                    <span className="mr-2">
                      <i className="fas fa-circle text-primary"></i> Direct
                    </span>
                        <span className="mr-2">
                      <i className="fas fa-circle text-success"></i> Social
                    </span>
                        <span className="mr-2">
                      <i className="fas fa-circle text-info"></i> Referral
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RavenueSource;