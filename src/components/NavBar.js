import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/image/logo.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'Profile',
    },
  ];
  return (
    <nav>
      <div className="navbar_header">
        <img src={logo} alt="logo" />
        <h2>Space Travelers&apos; Hub</h2>
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
