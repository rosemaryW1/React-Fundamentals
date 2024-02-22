import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
const Books = [
  {
    author:'Laura Nowlin',
    title:'If He Had Been with Me',
    img:"https://images-na.ssl-images-amazon.com/images/I/61tdwW3Nm8L._AC_UL600_SR600,400_.jpg"
   },
   {
     author:'Jamie Kern Lima ',
     title:'Worthy',
     img:"https://images-na.ssl-images-amazon.com/images/I/71WwD1Uw8QL._AC_UL600_SR600,400_.jpg"
    },
];

const BookList = () =>{
  return <section className='booklist'></section>
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

