import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = {comment: ''};

    render() {
        return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <h4>Add a Comment</h4>
                  <textarea value={this.state.comment} onChange={this.handleChange}/>
                  <div>
                      <button>Submit Comment</button>
                  </div>
              </form>
              <button id="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
          </div>
        );
    }

    handleChange = (event) => {
        this.setState({comment: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }
}


export default connect(null, actions)(CommentBox);
