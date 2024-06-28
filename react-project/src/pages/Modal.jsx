// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1050,
    }}>
      <div style={{
        padding: '240px',
        background: '#fff',
        borderRadius: '20px',
        maxWidth: '3200px',
        textAlign: 'center',
        fontSize: '40px'
      }}>
        {children}
        <button onClick={onClose} style={{
        marginTop: '20px',
        fontSize: '40px',
        padding: '10px 20px'

        }}>Close</button>
        
      </div>
    </div>
  );
};

export default Modal;
