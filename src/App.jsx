import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import TodoList from './pages/TodoList'
import Posts from './pages/Posts'
import Post from './pages/Post'
import XmasDay from './pages/XmasDay'
import Lifecycle from './pages/Lifecycle'
import FuncClass from './pages/FuncClass'

function App() {
  const routeList = [
    { path: '/', element: <Home /> },
    { path: '/todoList', element: <TodoList /> },
    { path: '/posts', element: <Posts /> },
    { path: '/posts/*', element: <Post /> },
    { path: '/xmas', element: <XmasDay /> },
    { path: '/lifecycle', element: <Lifecycle /> },
    { path: '/funcClass', element: <FuncClass /> },
  ]
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Navbar />
        <main>
          <Routes>
            {routeList.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
