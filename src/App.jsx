import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import TodoList from './pages/TodoList'
import Posts from './pages/Posts'
import Post from './pages/Post'

function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todoList" element={<TodoList />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/*" element={<Post />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
