import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'

function App() {
  const routeList = [
    { path: '/', element: <Home /> },
  ]
  return (
    <BrowserRouter>
      <div className="app_wrapper">
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
