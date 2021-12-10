import React,{Component} from 'react';
import { Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth';

// eslint-disable-next-line 
class Header extends Component{
    render(){
        return(
            <div className="ui container">
                <div className="ui secondary menu">
                    <Link className="item" to="/">
                        <img className="ui mini image" src="/Assets/101973.png"/>
                    </Link>
                    <Link className="active item" to="/adopt/dog">
                        Adopt a dog
                    </Link>
                    <Link className="active item" to="/adopt/cat">
                        Adopt a cat
                    </Link>
                    <Link className="item" to="/adopt/about-us">
                        About Us
                    </Link>
                    <Link to="/adopt/donate" className="item">
                    <div class="ui primary button">Donate</div>
                    </Link>
                    <div className="right menu">
                        <div className="item">
                            <div className="item">
                            <GoogleAuth/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;