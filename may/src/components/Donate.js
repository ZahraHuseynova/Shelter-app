import React from "react";
import { Link } from "react-router-dom";

const Donate=()=>{
    return(
        <div className='ui container'>
            <div className="ui three column grid">
                <div className="column">
                    <div className="ui segment">
                        <img src="../Assets/vaccine.jpg" alt="vaccine"/>
                        <hr/>
                        <div class="ui tag labels">
                            <a class="ui label">
                                $25.00
                            </a>
                        </div>
                        <h4>Provides life-saving vaccines</h4>
                        <Link to="/adopt/donate"className="fluid ui negative button">Donate</Link>
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                        <img src="../Assets/transport.jpg" alt="transport"/>
                        <hr/>
                        <div class="ui tag labels">
                            <a class="ui label">
                                $75.00
                            </a>
                        </div>
                        <h4>Helps transport a pet from another facility</h4>
                        <Link to="/adopt/donate"className="fluid ui negative button">Donate</Link>
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                        <img src="../Assets/medhelp.jpg" alt="medhelp"/>
                        <hr/>
                        <div class="ui tag labels">
                            <a class="ui label">
                                $100.00
                            </a>
                        </div>
                        <h4>Provides emergency medical care</h4>
                        <Link to="/adopt/donate"className="fluid ui negative button">Donate</Link>
                    </div>
                </div>
            </div>
            <br/>
            <div>
                <p style={{textAlign:"center",}}>Helen Woodward Animal Center is a unique, private, non-profit organization in San Diego County that, for more than 40 years, has been committed to the philosophy of people helping animals and animals helping people. Located on 12 acres in Rancho Santa Fe, our nationally recognized Center provides a variety of services that benefit the community through educational and therapeutic programs for people, and humane care and adoption for animals.
                    We are a no-kill facility that receives no government funding and relies heavily on tax-deductible contributions from private donors to continue our life-saving mission.
                </p>
                <h1 style={{textAlign:"center",color:"#00a5cd"}}>Our Mission</h1>
                <p>Helen Woodward Animal Center’s passionate belief that animals help people and people help animals through trust, unconditional love, and respect creates a legacy of caring. Sharing this philosophy with others, the Center inspires and teaches, locally and globally, the importance of the animal-human bond.
                </p>
            </div>
        </div>
    )
}

export default Donate;