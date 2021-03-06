import React from 'react';
import './style.css';
import Card from '../UI/Card/index';
import Logo from '../Logo/index';
import Navbar from '../Navbar';


const Hero=(props)=>{
    return(
        <div>
            <Card>
                <div style={{padding:'50px 0'}}>
                <Logo/>
                </div>
                <Navbar/>

            </Card>
            

        </div>
    )
};

export default Hero;