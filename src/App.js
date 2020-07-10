import React, {useEffect, useState} from 'react';
import './App.css';
import './css/sb-admin-2.css';
import './scss/sb-admin-2.scss';
import Navigation from "./components/Navigation";
import TopNav from "./components/TopNav";
import DashBoard from "./components/DashBoard";

function App() {
    const [isMediumWindow,setMediumWindowState] = useState(false);
    const [topBtnState,setTopBtnState] = useState(false);
    useEffect(()=>{
        window.addEventListener('resize',function(){
           if(window.innerWidth < 768){
               setMediumWindowState(true);
           } else{
               setMediumWindowState(false);
           }
        });
        window.addEventListener('scroll',function(){
            if(window.scrollY){
                setTopBtnState(true);
            }else{
                setTopBtnState(false);
            }
        });
    },[]);
    function handleToggle(){
        setMediumWindowState(!isMediumWindow);
    }

    return (
        <div id='wrapper'>
            {!isMediumWindow && <Navigation />}
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopNav handler={handleToggle}/>
                    <DashBoard />
                </div>
            </div>
            <a className="scroll-to-top rounded"
               href="#page-top"
               style={{
                   display : topBtnState?"initial":""
               }}
            >
                <i className="fas fa-angle-up"></i>
            </a>
        </div>
    )
}

export default App;
