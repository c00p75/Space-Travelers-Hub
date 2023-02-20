import { NavLink } from 'react-router-dom';
import planet from '../../assets/planet.png';
import './Navbar.css';

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
      path: '/dragons',
      text: 'Dragons',
    },

    {
      id: 4,
      path: '/myProfile',
      text: 'My Profile',
    },
  ];

  return (
    <header>
      <nav className="container-fluid py-3 px-5 mb-5" style={{ boxShadow: '1px 1px whitesmoke' }}>
        <h1>
          <img src={planet} alt="Logo" />
          {' '}
          Space Travelers&apos; hub
        </h1>
        <ul className="conatiner d-flex align-items-center m-0">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="navLink mx-3">{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
