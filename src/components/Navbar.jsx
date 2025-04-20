import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <h1 className="text-2xl font-bold text-blue-600">MH</h1>
      </NavLink>
      <nav className='flex text-lg font-medium gap-7'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
