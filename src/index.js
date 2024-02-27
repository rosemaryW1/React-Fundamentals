import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import {books} from './books'
import Book from './Book'

// const people = [
//   {
//     name:'peter', age:20, position:'developer'
//   },
//   {
//     name:'bob', age:27, position:'manager'
//   }

// ]
  
const BookList = () =>{

  // const getBook = (id) =>{
  //   const book =books.find((book) => book.id === id)
  //   console.log(book)
  // }
  

  // const getBook = books.find(book => book.id === 2)
  // console.log(getBook)
  // console.log(getBook.title)
  
  // const peter = people.filter((person) => person.name === 'peter')
  // console.log(peter)
  // const someValue = 'shakeAndBake'
  // const displayValue = () =>{
  //   console.log(someValue)
  // } 
  return (
    
    <section className='booklist'>
    {books.map((book)=>{
      //with this line of code we are passing the entire object as a prop
      return <Book {...book} key = {book.id} />;
    
    })}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

