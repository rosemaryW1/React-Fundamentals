import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
const books = [
  {
    author:'Laura Nowlin',
    title:'If He Had Been with Me',
    img:"https://images-na.ssl-images-amazon.com/images/I/61tdwW3Nm8L._AC_UL600_SR600,400_.jpg",
    id:1,
   },
   {
     author:'Jamie Kern Lima ',
     title:'Worthy',
     img:"https://images-na.ssl-images-amazon.com/images/I/71WwD1Uw8QL._AC_UL600_SR600,400_.jpg",
     id:2,
    }
];

const BookList = () =>{
  const someValue = 'shakeAndBake'
  const displayValue = () =>{
    console.log(someValue)
  } 
  return (
    
    <section className='booklist'>
    {books.map((book)=>{
      //with this line of code we are passing the entire object as a prop
      return <Book {...book} key = {book.id} displayValue={displayValue} />;
    
    })}
    </section>
  )
}
const Book = (props) => {
   const {img,title,author} = props; 
   const displayTitle = () => {
    console.log(title) 
   }
  return (
  <article className='book'>
    <img src= {img} alt={title} />
    <h2>{title}</h2>
    <button onClick={displayTitle}>click me</button>
    <h4>{author}</h4>
  </article>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

