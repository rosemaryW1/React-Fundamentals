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
  return <section className='booklist'>
    {books.map((book)=>{
      const { img, title, author, id} = book
      return (
        <Book img={img} title={title} author={author} 
        key = {id}/>
      )
    })}
  </section>
}
const Book = ({img,title,author,}) => {
   
  return (
  <article className='book'>
    <img src= {img} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
   
  </article>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

