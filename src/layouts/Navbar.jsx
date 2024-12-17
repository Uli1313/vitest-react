import { NavLink } from 'react-router'

function Header() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink
        to="/todoList"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        TodoList
      </NavLink>
      <NavLink
        to="/posts"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Posts
      </NavLink>
      <div className="btn_group">
        <a href="https://vitest.dev/" target="_blank" className="btn">
          外部網站1
        </a>
        <button
          className="btn"
          onClick={() => {
            window.location.href = 'https://vitest.dev/'
          }}
        >
          外部網站2
        </button>
        <button
          className="btn"
          onClick={() => {
            window.location.pathname = '/posts'
          }}
        >
          內部網站
        </button>
      </div>
    </nav>
  )
}

export default Header
