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
      <a
        href="https://vitest.dev/"
        target="_blank"
        className="external_site btn"
      >
        外部網站
      </a>
    </nav>
  )
}

export default Header
