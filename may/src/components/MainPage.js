import React from "react";
import Slides from "./SlideImages.js";
import Donate from "./Donate.js";
import Adopt from "./Adopt";



function MainPage(){
    return (
        <div>
            <h2 style={{fontFamily:"Proxima Nova",fontSize:'7em',color:"#00a5cd"}}className="ui center aligned header">
                May Animal Center
            </h2>
            <Slides/>
            <Adopt/>
            <Donate/>
            <br/>            
        </div>
    )
};

export default MainPage;