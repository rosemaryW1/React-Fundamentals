import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'


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
    <Book />
    <Book />
    <Book />
    <Book /> 
   </section>
}
const Book = () => {
  return (<article className='book'>
    <Image />
    <Title />
    <Author />
  </article>)
}

const Image = () => <img src= "https://images-na.ssl-images-amazon.com/images/I/61tdwW3Nm8L._AC_UL600_SR600,400_.jpg" alt='If He Had Been with Me'/>
const Title = () => <h2>If He Had Been with Me</h2>
const Author = () => {
  return <h4>Laura Nowlin</h4>
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)