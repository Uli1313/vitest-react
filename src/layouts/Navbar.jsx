import { NavLink } from 'react-router'

function Navbar() {
  const navList = [
    { path: '/', name: 'Home' },
    { path: '/todoList', name: 'TodoList' },
    { path: '/posts', name: 'Posts' },
    { path: '/xmas', name: 'XmasDay' },
    { path: '/lifecycle', name: 'Lifecycle' },
    { path: '/funcClass', name: 'Function/Class Component' },
  ]
  return (
    <nav>
      {navList.map((nav) => (
        <NavLink
          key={nav.path}
          to={nav.path}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {nav.name}
        </NavLink>
      ))}
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
          className="btn inner"
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

export default Navbar
