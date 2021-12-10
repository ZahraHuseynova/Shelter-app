import { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchComments} from '../actions/index';

class  CommentList extends Component{

    componentDidMount(){
        this.props.fetchComments();
    }

    renderFeedback(comment){
        if (this.props.currentUserId === comment.userId ){
            return(
                <div className="right floated">
                    <Link 
                    to={`/adopt/comment-delete/${comment.id}`} 
                    className="ui button negative">
                    Delete
                    </Link>  
                </div>
            )
        } else {
            return null;
        }
    }

    renderList () {
        return this.props.comments.map(comment=>{
            return (
                <div className="item" key={comment.id}>
                    <div>
                    <i className="comment outline icon" />
                    </div>
                    
                    <div className="content">
                        <h5>Name&Surame</h5>{comment.name} 
                        {comment.surname}
                    </div>
                    <div className="description">
                        <h5>Email</h5>{comment.email}
                    </div>
                    <div className="description">
                    <h5>Phone</h5>{comment.phone}
                    </div>
                    <div className="description">
                    <h5>Order number</h5>{comment.order}
                    </div>
                    {this.renderFeedback(comment)}
                </div>
            )
        })
    }

    render(){
        return <div>
            <h3>Customer feedback</h3>
            <div className="ui celled list">{this.renderList()}</div>
        </div>
    }
    
};

const mapStateToProps = (state)=>{
    return {
        comments: Object.values(state.comments),
        currentUserId:state.auth.userId,
    }
}

export default connect (mapStateToProps,{ fetchComments})(CommentList);