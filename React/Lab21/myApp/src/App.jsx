import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import books from './data/books'

function App() {
  const [bookTips, setBookTips] = useState(books)

  return (
    <div className="App">
      <Navbar />
      <main className='wrapper'>
        <Content books={bookTips} />
      </main>
      <Footer />
    </div>
  )
}

export default App
