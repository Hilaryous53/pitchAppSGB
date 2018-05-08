import React from 'react';

// The gray background
const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50,
};

// The modal "window"
const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30,
};


const Modal = (props) => {
  if (!props.showModal) {
    return null;
  }
  return (
    <div style={backdropStyle}>
      <div style={modalStyle}>
        <button onClick={props.closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};


export default Modal;
