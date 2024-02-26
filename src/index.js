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
  return (
    
    <section className='booklist'>
    <EventExamples />
    {books.map((book)=>{
      //with this line of code we are passing the entire object as a prop
      return <Book {...book} key = {book.id} />;
    
    })}
    </section>
  )
}
const EventExamples = () =>{
  const handleFormInput = (e) =>{
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)
    console.log('handle form input')
  }
  const handleButtonClick = () => {
    alert('handle Button click')
  }
  const handleFormSubmit = (e) =>{
    e.preventDefault();
    console.log('form Submitted');
  }
  return (
    <section> 
      <form onSubmit = {handleFormSubmit} >
        <h2>Typical Form</h2>
        <input
        type = 'text'
        name = 'example'
        onChange = {handleFormInput}
        style = {{ margin: '1rem 0'}} 
        />
        <button type='submit'>Submit</button>
        <div>
          <button onClick = {handleButtonClick} type='button'>Click Me</button>
        </div>
      </form>
      </section>
  )
}

const Book = (props) => {
   const {img,title,author} = props; 
  return (
  <article className='book'>
    <img src= {img} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
   
  </article>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

