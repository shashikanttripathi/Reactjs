import './App.css';
import React, { Component } from 'react';
import Modal from './components/Modal/modal'
import Backdrop from './components/Backdrop/backdrop';
 
class App extends Component {
  state = {
    modalOpen : false
  }
  showModal = () => {
    this.setState({modalOpen:true})
  }
  closeModal = () => {
    this.setState({modalOpen:false})
  }
  render() { 
    return (
      <div className='App'>
        <Modal show={this.state.modalOpen} closed={this.closeModal} />
        <Backdrop show= {this.state.modalOpen} />
        <button onClick={this.showModal}>show Modal</button>
      </div>
    );
  }
}
 
export default App;