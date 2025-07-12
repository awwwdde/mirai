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
    <div className="flex items-center w-full px-8 pt-8 h-[72px] justify-between mt-[25px] relative z-[9999]">
      <div className="ml-[45px] flex items-center">
        <Link to="/" className="cursor-pointer transition-transform duration-200">
          <MirIcon width={48} height={48} color="#fff" />
        </Link>
      </div>
      <nav className="flex flex-row space-x-[30px] p-6 mr-[45px] relative z-[10000]">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`menu-link px-6 py-3 text-lg font-bold rounded-md transition-all duration-200 hover:shadow-md no-underline text-white cursor-pointer ${
              location.pathname === item.path
                ? 'bg-white/30 text-white shadow-md no-underline '
                : 'text-white hover:bg-white/10 no-underline '
            }`}
            style={{ 
              display: 'inline-block',
              textDecoration: 'none'
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Menu
