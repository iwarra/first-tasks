import BookCard from './BookCard'

const Content = ({ books }) => {
  return (
    <>
      {books.length > 0 ? (
        books.map((book) => {
          const { bookTitle, id, author } = book
          return <BookCard title={bookTitle} author={author} key={id} />
        })
      ) : (
        <span>No book tips to show</span>
      )}
    </>
  )
}

export default Content
