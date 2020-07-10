import React,{useState} from "react";


function Navigation(){

    const [toggle,setToggleState] = useState(false);
    const [componentVisibility,setComponentVisibility] = useState(false);
    const [utilityVisibility,setUtilityVisibility] = useState(false);
    const [pagesVisibility,setPagesVisibility] = useState(false);

    const sidebarClasses = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion";

    function handleToggle(){
        if(!toggle){
            [setComponentVisibility,setUtilityVisibility,setPagesVisibility].forEach((f)=>{
                f(false);
            });
        }
        setToggleState(!toggle);
    }

    function handleDisplay(id){
        let fields = [componentVisibility,utilityVisibility,pagesVisibility];
        fields[id] = !fields[id];
        fields = fields.map((field,index)=>{
            if(index!==id)
                return false;
            else
                return field;
        });
        [setComponentVisibility,setUtilityVisibility,setPagesVisibility].forEach((f,index)=>{
            f(fields[index]);
        });
    }

    return (
        <ul className={toggle?(sidebarClasses + " toggled"):sidebarClasses} id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>


            <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>


                <hr className="sidebar-divider" />


                    <div className="sidebar-heading">
                        Interface
                    </div>


            <li className="nav-item">
                <a className={componentVisibility?"nav-link":"nav-link collapsed"}
                   href="#"
                   data-toggle="collapse"
                   data-target="#collapseTwo"
                   aria-expanded={componentVisibility?"true":"false"}
                   aria-controls='collapseTwo'
                   onClick={()=>{
                       handleDisplay(0);
                   }}
                >
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionSidebar"
                     className={componentVisibility?"collapse show":"collapse"}
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>


                    <li className="nav-item">
                        <a className={utilityVisibility?"nav-link":"nav-link collapsed"} href="#" data-toggle="collapse"
                           data-target="#collapseUtilities"
                           aria-expanded={utilityVisibility?"true":"false"} aria-controls="collapseUtilities"
                           onClick={(e)=>{
                               handleDisplay(1);
                           }}
                        >
                            <i className="fas fa-fw fa-wrench"></i>
                            <span>Utilities</span>
                        </a>
                        <div id="collapseUtilities" aria-labelledby="headingUtilities"
                             className={utilityVisibility?"collapse show":"collapse"}
                             data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Utilities:</h6>
                                <a className="collapse-item" href="utilities-color.html">Colors</a>
                                <a className="collapse-item" href="utilities-border.html">Borders</a>
                                <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                <a className="collapse-item" href="utilities-other.html">Other</a>
                            </div>
                        </div>
                    </li>


                    <hr className="sidebar-divider" />


                        <div className="sidebar-heading">
                            Addons
                        </div>


                        <li className="nav-item">
                            <a className={pagesVisibility?"nav-link":"nav-link collapsed"} href="#" data-toggle="collapse"
                               onClick={()=>{
                                   handleDisplay(2);
                               }}
                               data-target="#collapsePages"
                               aria-expanded={pagesVisibility?"true":"false"}
                               aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Pages</span>
                            </a>
                            <div id="collapsePages"
                                 className={pagesVisibility?"collapse show":"collapse"}
                                 aria-labelledby="headingPages"
                                 data-parent="#accordionSidebar"
                            >
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <a className="collapse-item" href="login.html">Login</a>
                                    <a className="collapse-item" href="register.html">Register</a>
                                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                    <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a>
                                </div>
                            </div>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="charts.html">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Charts</span></a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="tables.html">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Tables</span></a>
                        </li>


                        <hr className="sidebar-divider d-none d-md-block" />


                        <div className="text-center d-none d-md-inline">
                            <button
                                className="rounded-circle border-0"
                                id="sidebarToggle"
                                onClick={handleToggle}>
                            </button>
                        </div>
                    </ul>
    );
}

export default Navigation;