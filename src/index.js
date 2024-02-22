import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
const firstBook = {
 author:'Laura Nowlin',
 title:'If He Had Been with Me',
 img:"https://images-na.ssl-images-amazon.com/images/I/61tdwW3Nm8L._AC_UL600_SR600,400_.jpg"
}
const secondBook = {
  author:'Jamie Kern Lima ',
  title:'Worthy',
  img:"https://images-na.ssl-images-amazon.com/images/I/71WwD1Uw8QL._AC_UL600_SR600,400_.jpg"
 }


 

// function Greeting() {
//   return <div>

//   <Person />
//   <Message />

//   </div>
// }

// const Person = () => <h2 >John Doe</h2>
// const Message = () => <p>This is my message</p>
const BookList = () =>{
  return <section className='booklist'>
    <Book
    author={firstBook.author}
    title={firstBook.title} 
    img={firstBook.img}
     >
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aspernatur, libero vel tenetur cupiditate perspiciatis, soluta numquam sit, mollitia rerum itaque quasi laboriosam. Eos libero non placeat rem quisquam repudiandae.
    </p>
    <button>click me</button>
    </Book> 
    <Book 
    author={secondBook.author}
    title={secondBook.title} 
    img={secondBook.img}/>
    
   </section>
}
const Book = ({img,title,author, children}) => {
   
  return (
  <article className='book'>
    <img src= {img} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
    {children}
  </article>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

