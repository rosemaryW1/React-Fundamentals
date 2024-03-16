// Book.js
import React, { useState } from 'react';
import Modal from './Modal';

const Book = ({ img, title, author, summary, price}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <article className='book' onClick={toggleModal}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
      </article>
      {isOpen && <Modal img={img} title={title} author={author} summary={summary} price={price} onClose={toggleModal} />} 
    </>
  );
};

export default Book;
