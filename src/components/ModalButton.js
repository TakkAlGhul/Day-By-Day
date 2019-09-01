import React, { Component } from 'react'
import Modal from 'react-modal'
import Create from './CreateTodo'

Modal.setAppElement('#root')

class ModalButton extends Component {
  constructor(){
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="center">
        <button className="waves-effect waves-light btn red" onClick={this.openModal}>Create</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Create Modal"
        >
          <Create />
        </Modal>
      </div>
    )
  }
};

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    minWidth: '800px'
  }
};


export default ModalButton;
