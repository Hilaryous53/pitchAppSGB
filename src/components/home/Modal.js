import React, {Component} from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
		e.preventDefault();
		this.setState({
			showModal: false
		})
		console.log('The close link was clicked.');
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.state.showModal) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <button onClick={this.handleClick}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
