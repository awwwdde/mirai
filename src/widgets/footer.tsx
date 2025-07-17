
import MirIcon from './MirIcon';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const footerLinks = [
    { path: '/about', label: 'О сервисе' },
    { path: '/partners', label: 'Партнерам' },
    { path: '/auth', label: 'Войти' }
  ];

  return (
    <div className="flex items-center w-full h-[80px] relative">
      <div className="flex flex-col items-center mx-auto">
        <div className="flex gap-[30px] mb-2 justify-center">
          {footerLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`menu-link px-6 py-3 font-bold rounded-md transition-all duration-200 hover:shadow-md no-underline text-white cursor-pointer font-aeonik ${
                location.pathname === item.path
                  ? 'bg-white/30 text-white shadow-md no-underline'
                  : 'text-white hover:bg-white/10 no-underline'
              }`}
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                fontSize: '16px',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <span className="text-xs text-white pt-[5px]" style={{ color: '#fff' , fontWeight: 300}}>made by aww. 2025</span>
      </div>
      <div className="mr-[45px] flex items-center">
        <Link to="/" className="cursor-pointer transition-transform duration-200">
          <MirIcon width={48} height={48} color="#fff" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
