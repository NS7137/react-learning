import Book from './Book'
import { books } from './books'
import './App.css'

const BookList = () => {
    return (
        <section className='booklist'>
            {books.map((book) => {
                return <Book key={book.id} {...book}><p>{book.p}</p></Book>
            })}

        </section>
    )
}

export default BookList