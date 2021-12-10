import Modal from "./Modal";
import React from "react";
import { connect } from 'react-redux';
import history from "../history";
import { Component } from "react";
import { fetchComment,deleteComment } from "../actions";
import { Link } from "react-router-dom";

class DeleteComment extends Component{

    componentDidMount(){
        this.props.fetchComment(this.props.match.params.id)
    }
    
    renderActions() {
        return(
            <React.Fragment>
                <button onClick={()=>this.props.deleteComment(this.props.match.params.id)} 
                className="ui button negative">Delete</button>
                <Link to="/adopt/comment-list" className="ui button">Cancel</Link>
            </React.Fragment>
        );
        
    }

    renderCommentContent(){
        if ( !this.props.comment){
            return "Are you sure you want to delete this comment?"
        } else {
            return `Are you sure you want to delete this comment with order number: ${this.props.comment.order}?`
        }
    }

    render(){
    return <Modal
        title="Delete comment"
        content={this.renderCommentContent()}  
        actions={this.renderActions()} 
        onDismiss={()=>history.push('/adopt/comment-list')} 
    />
    }
}

const mapStateToProps = (state, ownProps)=>{
    return{
        comment:state.comments[ownProps.match.params.id],
    }
}

export default connect (mapStateToProps,{fetchComment,deleteComment}) (DeleteComment);