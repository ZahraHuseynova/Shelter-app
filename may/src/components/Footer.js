import React from "react";
import {Link} from 'react-router-dom';
// eslint-disable-next-line 
function Footer(){
    return(
            <div className="ui vertical footer segment">
                <div className="ui center aligned container">
                    <div className="ui section divider">
                    <br/>
            <div className="ui secondary menu">
                    <div className="ui link list">
                        <Link className="active item" to="/">Home</Link>
                        <Link className="item" to="/adopt/about-us">About</Link>
                        <Link className="item" to="/adopt/contact-us">Contact us</Link>
                    </div>
                    <div className="right menu">
                        <div className="ui list">
                            <div className="item">
                                <i className="users icon"></i>
                                <div className="content">
                                Semantic UI
                                </div>
                            </div>
                            <div class="item">
                                <i className="marker icon"></i>
                                <div className="content">
                                New York, NY
                                </div>
                            </div>
                            <div className="item">
                                <i className="mail icon"></i>
                                <div className="content">
                                <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
                                </div>
                            </div>
                            <div className="item">
                                <i className="linkify icon"></i>
                                <div className="content">
                                <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="right menu">
                        <div className="ui large list">
                            <div className="item">
                                <a href="http://www.facebook.com/profile.php?id="><i className="thumbs up outline icon"></i></a>
                            </div>
                            <div className="item">
                                <a href="http://twitter.com/"><i className="twitter icon"></i></a>
                            </div>
                            <div className="item">
                                <a href="http://www.linkedin.com/in/"><i className="linkedin icon"></i></a>
                            </div>
                            <div className="item">
                                <a href="http://www.instagram.com/"><i className="instagram icon"></i></a>
                            </div>
                        </div>
                    </div>
                   
                </div>
                {/* <div className="ui section divider"> */}
                        <div className="ui secondary  menu">
                            <div className=" item">
                            <p>© Copyright 2021 May Animal Shelter</p>
                            </div>
                            <div className="item">
                            <p>Terms of Us</p>
                            </div>
                            <div className="item">
                            <p>Privacy Policy</p>
                            </div>
                        </div>  
                    {/* </div>  */}
                
                <div className="ui section divider">
                <br/>
                <Link to="/"><img src="/Assets/101973.png" class="ui centered mini image"/></Link>
                <div class="ui horizontal small divided link list">
                    <a className="item" href="http://semantic-ui.mit-license.org/" target="_blank">May Animal Shelter</a>
                </div>
                <br/>
                </div>
                </div>
            </div>
            </div>
   
            
    )
}

export default Footer;