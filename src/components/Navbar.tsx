import { NavLink } from 'react-router-dom';
import { FaDatabase } from 'react-icons/fa'; 

const Navbar = () => {
  const activeClassName = "font-bold text-yellow-300";

  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-5xl">
      <div className="bg-blue-600/90 backdrop-blur-md text-white p-4 rounded-xl shadow-lg border border-blue-500/50">
        <div className="container mx-auto flex justify-between items-center">
          
          <NavLink to="/" className="flex items-center space-x-2">
            <FaDatabase className="text-2xl" />
            <span className="text-2xl font-bold">JSONFeed</span>
          </NavLink>
          
          <div className="space-x-6 text-lg">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `transition-colors duration-200 ${isActive ? activeClassName : 'hover:text-yellow-300'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `transition-colors duration-200 ${isActive ? activeClassName : 'hover:text-yellow-300'}`
              }
            >
              Contacto
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;