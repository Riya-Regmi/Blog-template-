import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

const Layout=(props)=>{
    return(
        <React.Fragment>
            <div className="container">
            {props.children} 
            <Sidebar/>
        </div>
        <div>
            <h1>This is footer for all pages</h1>
        </div>


        </React.Fragment>
        
    )
}

export default Layout;