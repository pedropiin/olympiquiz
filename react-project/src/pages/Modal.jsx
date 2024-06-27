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
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1050,
    }}>
      <div style={{
        padding: '20px',
        background: '#fff',
        borderRadius: '8px',
        maxWidth: '500px',
        textAlign: 'center',
      }}>
        {children}
        <button onClick={onClose} style={{ marginTop: '20px' }}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
