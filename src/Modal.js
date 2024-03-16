// Modal.js
import React from 'react';

const Modal = ({ img, title, author, summary, price, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="book-details">
          <img src={img} alt={title} />
          <div>
            <h2>{title}</h2>
            <h4>By {author}</h4>
            <p className="summary">{summary}</p>
            <p className="price">Price: ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
