import React from "react";
import image from '../assets/Logo Dietku.png'
import TabLandingPage from "./TabLandingPage";

function LandingPage(){
    return(
        <div style={{display:"flex"}}>
            <div style={{width:"50%"}}>
                <img src={image} style={{width:"75%"}}/>
            </div>
            <div style={{width:"50%"}}>
                <TabLandingPage/>
            </div>
        </div>
    )
}

export default LandingPage;