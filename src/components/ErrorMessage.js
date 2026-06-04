import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <span className="error-icon">⚠️</span>
      <p>{message}</p>
      <small>Please check your API key and internet connection</small>
    </div>
  );
}

export default ErrorMessage;
