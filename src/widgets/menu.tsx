import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
  const location = useLocation()

  const menuItems = [
    { path: '/' , label: 'Главная'},
    { path: '/about', label: 'О сервисе' },
    { path: '/gallery', label: 'Галерея' },
    { path: '/partners', label: 'Партнерам' },
    { path: '/profile', label: 'Личный кабинет' }
  ]

  return (
    <div className="flex justify-end w-full">
      <nav className="flex flex-row space-x-[30px] p-6 bg-white shadow-lg rounded-lg mt-[20px] mr-[20px]">
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
