import { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchAnimal } from "../actions";

class AdoptDetails extends Component {
    componentDidMount(){
        this.props.fetchAnimal(this.props.match.params.id);
    }

    renderAdoptButton(){
        if(this.props.isSignedIn){
            return(
                <div>
                    <Link to="/adopt/contact-us" className="ui left floated primary button">
                        Adopt me
                        <i className="right chevron icon"></i>
                    </Link>
                </div>
            )
        }else {
            return null;
        }
    }

    renderDetails(){
        if(!this.props.animal){
            return <div>Loading...</div>
        }
        const { image,category,name,description,age,sex,color,status} = this.props.animal;
        return(
            <div className="ui left aligned grid">
                <div className="left aligned two column row">
                    <div className="columnn">
                        <div className="ui left floated card">
                            <div className="ui massive image">
                                <img src={image} alt={category} />
                            </div>
                            <div className="content">
                                <h3 className="header">
                                    {name}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <div className="meta">
                                <span className="cinema"> <strong>Status : </strong>{status}</span>
                            </div>
                            <div className="description">
                                <p><strong>Description : </strong>{description}</p>
                            </div>
                            <div className="extra">
                                <div className="ui label"><strong>Age : </strong>{age}</div>
                                <div className="ui label"><strong>Sex : </strong>{sex}</div>
                                <div className="ui label"><strong>Color : </strong>{color}</div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        {this.renderAdoptButton()}
                    </div>
                   
                </div>
            </div>
        )
    }
    render(){
        return (<div>
            {this.renderDetails()}
            
        </div>)
    }
}

const mapStateToProps=(state,ownProps)=>{
    return{
        animal:state.animals[ownProps.match.params.id],
        isSignedIn:state.auth.isSignedIn
    }
}

export default connect (mapStateToProps, {fetchAnimal})(AdoptDetails);