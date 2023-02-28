/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiMenu5Fill } from 'react-icons/ri';
import { fetchRockets } from '../../redux/rockets/rockets';
import planet from '../../assets/planet.png';
import './Navbar.css';
import { fetchDragons } from '../../redux/dragons.js/dragons';
import { displayMissions } from '../../redux/missions/missions';

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
  const missionsStore = useSelector((state) => state.missions);
  const { status2, missions } = missionsStore;

  // Variable to store count of reserved, booked and joined rockets, dragons, and missions.
  let selected = 0;

  useEffect(() => {
    if (!allRockets.length) { dispatch(fetchRockets()); }
    if (status === 'default') { dispatch(fetchDragons()); }
    if (status2 === 'initial') { dispatch(displayMissions()); }
  });

  // Condition to updated selected count only if data has been retrieved from the api
  if (allRockets.length && status !== 'default' && status2 !== 'initial') {
    allRockets.forEach((i) => { if (i.reserved === true) { selected += 1; } });
    dragons.forEach((i) => { if (i.booked === true) { selected += 1; } });
    missions.forEach((i) => { if (i.joined === true) { selected += 1; } });
  }

  return (
    <header className="position-sticky">
      <nav className="container-md-fluid navbar navbar-expand-md navbar-light mb-4 px-md-2">
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
            <ul className="navbar-nav me-auto conatiner d-flex align-items-center m-0 px-md-4">
              {links.map((link) => (
                <li key={link.id} className={`nav-item position-relative ${link.text === 'Rockets' || link.text === 'Dragons' ? 'dropdown d-flex' : ''}`}>
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
                  {link.text === 'My Profile' && (
                    <span className={`${selected !== 0 ? 'badge rounded-pill bg-primary' : 'd-none'}`}>
                      {selected}
                    </span>
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
