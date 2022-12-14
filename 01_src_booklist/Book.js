const Book = ({ title, author, img, children }) => {

    const clickHandler = () => {
        alert('hello world')
    }

    const complexExample = (author) => {
        console.log(author);
    }
    return (
        <article className='book' onMouseOver={() => {
            console.log(title)
        }}>
            <img src={img} alt="" />
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            {children}
            <button type='button' onClick={clickHandler}>reference example</button>
            <button type='button' onClick={() => complexExample(author)}>more complex example</button>
        </article>
    )
}
export default Book