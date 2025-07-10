import { Link, useLocation } from 'react-router-dom'
import MirIcon from './MirIcon'

const Menu = () => {
  const location = useLocation()

  const menuItems = [
    { path: '/about', label: 'О сервисе' },
    { path: '/gallery', label: 'Галерея' },
    { path: '/partners', label: 'Партнерам' },
    { path: '/registration', label: 'Регистрация' },
    { path: '/auth', label: 'Войти' }
  ]

  return (
    <div className="flex items-center w-full px-8 pt-8 h-[72px] justify-between">
      <div className="ml-[45px] flex items-center">
        <Link to="/">
          <MirIcon width={48} height={48} color="#000" />
        </Link>
      </div>
      <nav className="flex flex-row space-x-[30px] p-6 bg-white shadow-lg rounded-lg mr-[45px]">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`menu-link px-6 py-3 text-lg font-medium rounded-md transition-all duration-200 hover:shadow-md no-underline ${
              location.pathname === item.path
                ? 'bg-gray-800 text-black shadow-md no-underline '
                : 'bg-gray-100 text-black hover:bg-gray-200 no-underline '
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Menu
