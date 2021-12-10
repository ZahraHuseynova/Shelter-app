import {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchAnimals } from '../actions';

class AdoptDog extends Component{

    componentDidMount(){
        this.props.fetchAnimals();
    }

    renderAnimalList(){

        return this.props.animals.map(animal=>{
            if(animal.category=== 'dog'){
                return(
                    <div class="card" key={animal.id}>
                        <div class="image">
                        <img src={animal.image} alt={animal.category}/>
                        </div>
                        <div class="content">
                        <div class="header">{animal.name}</div>
                        <div class="meta">
                            <a>{animal.status}</a>
                        </div>
                        <div class="meta">
                            <a>{animal.category}</a>
                        </div>
                        <div class="description">
                        {animal.description}
                        </div>
                        </div>
                        <div class="extra content">
                        <span class="right floated">
                            {animal.join}
                        </span>
                        <span>
                            <i class="user icon"></i>
                            {animal.friends}
                        </span>
                        </div>
                        <Link to ={`/adopt/${animal.id}`}class="ui negative basic button">More about dog</Link>
                    </div>
    
                ) 
            } else {
                return null;
            }
            
        })
    }
    render(){
        return(
            
            <div>
                <div className="ui horizontal segment" style={{backgroundColor:"grey",color:"white",fontFamily:"Proxima Nova" }}> 
                    <h1  style={{fontFamily:"Proxima Nova" ,fontSize:"5em",color:"white"}}>
                        DOGS FOR <br/>ADOPTION
                    </h1>
                    <h3 className="ui center aligned header"style={{fontSize:"2em",color:"white"}}>
                        WALK-INS ACCEPTED
                    </h3>
                    <h4>Open Daily: 11 AM–6 PM</h4>
                    <h4>Holiday Hours</h4>
                    <div style={{fontSize:"1em"}}>
                        <p>Please note early close for adoptions on Tuesday November 30th-Open 11:00am-4:00pm </p>
                        <p>Thursday, November 25th Thanksgiving – Closed</p>
                        <p>  Friday December 24th 11:00-3:30 </p>
                        <p>  Saturday, December 25th – Closed</p>
                        <p>  Friday, December 31st – 11:00-3:30</p>
                        <p> Saturday, January 1st , 2022- 11:00-6:00</p>
                    </div>
                </div>
                <div className="ui huge breadcrumb">
                    <Link  to ="/"className="section">Home</Link>
                    <i className="right chevron icon divider"></i>
                    <div className="active section">Adopt a dog</div>
                </div>
                <h2 className="ui center aligned header"style={{fontSize:"2em",color:"#0163A9"}}>Adoptable Dogs Updated as of Thursday 03:24 am</h2>

                <div class="ui centered link cards">
                    {this.renderAnimalList()}
                </div>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        animals: Object.values(state.animals),
    };
};

export default connect (mapStateToProps,{ fetchAnimals })(AdoptDog);