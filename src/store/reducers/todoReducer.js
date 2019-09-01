const initState = {
  todos: [
    {id: '1', title: 'help me find eggs', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt', content: 'blah blah blah'}
  ]
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.concat(action.todo)
      });
  }
  return state;
};

export default todoReducer;
