import React from "react";
import { Link } from "react-router-dom";

const Adopt =()=>{
    return(
        <div className="ui container">
               <div className="ui two column grid">
            <div className="column">
                <div style={{border:"none",boxShadow:"none"}}className="ui segment">
                    <h1 style={{color:"#00a5cd",fontSize:"10em",fontFamily:"Proxima Nova"}}>Adopt</h1>
                    <Link to="/adopt/dog"><button className="ui right labeled icon button">
                    <i className="right arrow icon"></i>
                    See Our Pets</button></Link>
                </div>
            </div>
            <div className="column">
                <div style={{border:"none",boxShadow:"none"}} className="ui segment">
                    <p>At Helen Woodward Animal Center, we have an ever-shifting list of beautiful dogs, puppies, cats and kittens available through our San Diego pet adoption program. Please check our website daily for updates!</p>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Adopt;