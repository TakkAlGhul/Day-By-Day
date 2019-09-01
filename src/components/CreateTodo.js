import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../store/actions/todoAction'

class CreateTodo extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
    console.log(this.state);
  };


  render() {
    return (
      <div className="container create-form">
        <form onSubmit={this.handleSubmit} className="white">
         <h5 className="gray-content content-darken-3">Create ToDo</h5>
         <div className="input-field">
           <label htmlFor="title">Title</label>
           <input type="text" id="title" onChange={this.handleChange} />
         </div>
         <div className="input-field">
           <label htmlFor="content">What To Do?</label>
           <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
         </div>
         <div className="input-field">
           <button className="btn green lighten-1 z-depth-0">Create</button>
         </div>
        </form>
      </div>
    )
  }
};

// const mapStateToProps = (state) => {
//   return {
//     title: state.title,
//     content: state.content
//   }
// };

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (todo) => dispatch(createTodo(todo))
  }
};

export default connect(null, mapDispatchToProps)(CreateTodo);
