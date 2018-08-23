import React, { Component} from 'react';
import ReactModal from 'react-modal';

class Card extends Component {

  constructor(){
    super();
    this.state = { ShowModal: false };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(){
    this.setState({ ShowModal: true });
  }

  handleCloseModal(){
    this.setState({ ShowModal: false });
  }

  render(){
    return (
      <div className='tc bg-black dib br3 ba b--yellow pa3 ma2 grow bw2 shadow-5'>
        <div onClick={this.handleOpenModal}>
          <div className='text color white'>
            <h2>{ this.props.title }</h2>
            <p>{ this.props.director }</p>
          </div>
        </div>
        <ReactModal isOpen={this.state.ShowModal} >
          <h2>Characters</h2>
          
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
        </div>
        );
      }
    }

export default Card;
