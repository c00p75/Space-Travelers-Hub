/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiMenu5Fill } from 'react-icons/ri';
import { fetchRockets } from '../../redux/rockets/rockets';
import planet from '../../assets/planet.png';
import './Navbar.css';
import { fetchDragons } from '../../redux/dragons.js/dragons';

const Navbar = () => {
  const links = [
    { id: 1, path: '/', text: 'Rockets' },
    { id: 2, path: '/missions', text: 'Missions' },
    { id: 3, path: '/dragons', text: 'Dragons' },
    { id: 4, path: '/myProfile', text: 'My Profile' },
  ];

  const navCollapse = () => {
    document.querySelector('#collapsibleNavId').classList.remove('show');
  };

  const dispatch = useDispatch();
  const allRockets = useSelector((state) => state.rockets);
  const { status, dragons } = useSelector((state) => state.dragons);
  useEffect(() => {
    if (!allRockets.length) { dispatch(fetchRockets()); }
    if (status === 'default') { dispatch(fetchDragons()); }
  });

  return (
    <header className="position-sticky">
      <nav className="navbar navbar-expand-md navbar-light mb-4">
        <div className="container-fluid">
          <Link to="/">
            <h1>
              <img src={planet} alt="Logo" />
              {' '}
              Space Travelers&apos; Hub
            </h1>
          </Link>
          <button
            className="navbar-toggler d-lg-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <RiMenu5Fill style={{ height: '1.5em', width: '1.5em', marginTop: '-15px' }} />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto conatiner d-flex align-items-center m-0">
              {links.map((link) => (
                <li key={link.id} className={`nav-item ${link.text === 'Rockets' || link.text === 'Dragons' ? 'dropdown d-flex' : ''}`}>
                  <NavLink to={link.path} className="navLink" onClick={navCollapse}>{link.text}</NavLink>
                  {link.text === 'Rockets' && (
                  <>
                    <span className="nav-link dropdown-toggle" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                      {allRockets.map((rocket) => (
                        <NavLink key={rocket.id} to={`/rockets/${rocket.rocket_id}`} className="dropdown-item" onClick={navCollapse}>{rocket.rocket_name}</NavLink>
                      ))}
                    </div>
                  </>
                  )}
                  {link.text === 'Dragons' && (
                  <>
                    <span className="nav-link dropdown-toggle" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                      {dragons.map((dragon) => (
                        <NavLink key={dragon.id} to={`/dragons/${dragon.id}`} className="dropdown-item" onClick={navCollapse}>{dragon.name}</NavLink>
                      ))}
                    </div>
                  </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Navbar;
