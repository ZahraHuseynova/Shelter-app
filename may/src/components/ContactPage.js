import { Component } from "react";
import { Field , reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import { createComment } from "../actions/index"
import { Link } from 'react-router-dom'


class Contact extends Component {


    renderError({error,touched}) {
        if (error && touched){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput =({input,label,meta})=>{
        const className= `field ${meta.error && meta.touched ? "error":""}`
        return (
        <div className={className}>
            <label>{label}</label>
            <input {...input} placeholder={label}/>
            {this.renderError(meta)}
        </div>)
    }

    renderTextarea = ({textarea,placeholder,meta}) =>{
        return(
            <div>
            <textarea {...textarea} placeholder={placeholder}/>
            {this.renderError(meta)}
            </div>
        )
    };

    renderAdmin(){
        if(this.props.isSignedIn === '109232611272471206484'){
            return(
                <div>
                    <Link to="/adopt/comment-list" className="ui button primary">List of Comments</Link>
                </div>
            )
        } 
        else {
            return null;
        }
        
    }


    onSubmit= (formValues) =>{
        this.props.createComment(formValues)
    }
    render(){
        return(
            <div>
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit
        )}>
            <Field 
                name="name" 
                component={this.renderInput} 
                label="Name"
                placeholder="Your name"
            />
            <Field 
                name="surname" 
                component={this.renderInput} 
                label="Surname"
                placeholder="Your surname"
            />
            <Field
                name="email"
                component={this.renderInput}
                label="Email"
                placeholder="Your email"
            />
            <Field
                name="phone"
                component={this.renderInput}
                label="Phone number"
                placeholder="Your phone number"
            />
            <Field
                name="pet"
                component={this.renderInput}
                label="Pet name" >
            </Field>

            <div className="ui left aligned header">
                <h1 style={{fontSize:"2em"}}>Additional Details</h1>
            </div>
            <Field
                name="details"
                component={this.renderTextarea}
                placeholder="Type here"
            />
            <br/>
            <br/>
            <button className="fluid ui positive button">Send</button>
        </form>
        <br/>
        {this.renderAdmin()}
        </div>)

    }
}

const validate = (formValue) =>{
    const errors = {}
    if(!formValue.name){
        errors.name ="You should enter your name"
    }
    if (!formValue.surname){
        errors.surname ="You should enter your surname"
    }
    if (!formValue.email){
        errors.email = "You should enter your email"
    }
    
    if (isNaN(Number(formValue.phone))){
        errors.phone = "Must be a number"
    }

    if (!formValue.pet){
        errors.pet = "You should enter pet name"
    }

    return errors;
}

const formWrapped = reduxForm({
    form: "contact",
    validate
})(Contact);

const mapStateToProps = (state)=>{
    return{
        isSignedIn:state.auth.userId,
        
    }
}

export default connect(mapStateToProps,{ createComment })(formWrapped)