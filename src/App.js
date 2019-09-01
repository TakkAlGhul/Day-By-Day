import React from 'react'
import moment from 'moment'
import Title from './components/Title'
import ModalButton from './components/ModalButton'
import Board from './components/Board';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper green">
            <div className="brand-logo center"><Title title={ today } /></div>
            <div className="right hide-on-med-and-down">
              <ModalButton />  
            </div>
          </div>
        </nav>
        <Board />
      </div>
      

    )
  }
};

const today = moment().format('DD/MMM/YYYY');

export default App;
