import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import {books} from './books'
import Book from './Book'
 
const BookList = () =>{
  return (
    <>
    <h1>Amazon Best Sellers</h1>
    <section className='booklist'>
    {books.map((book,index)=>{
      //with this line of code we are passing the entire object as a prop
      return <Book {...book} key = {book.id} number = {index} />;
    
    })}
    </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

