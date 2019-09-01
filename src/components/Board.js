import React, { Component } from 'react'
import TodoList from './TodoList'
import { connect } from 'react-redux'

class Board extends Component {
  
  render() {
    // console.log(this.props);
    const { todos } = this.props; 
    return (
      <div className="board container">
        <div className="row">
          <div className="col s12 m12">
            <TodoList todos={ todos } />
          </div>
        </div>  
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};
export default connect(mapStateToProps)(Board);
