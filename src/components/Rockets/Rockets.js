import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchRockets, reservation } from '../../redux/rockets/rockets';
import './Rockets.css';

const Rockets = () => {
  const allRockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allRockets.length) { dispatch(fetchRockets()); }
  });

  const handleClick = (id) => { dispatch(reservation(id)); };

  return (
    <ul className="container d-flex flex-column gap-4">
      {allRockets.map((rocket) => (
        <li key={rocket.id} className="rocketContainer d-flex p-3">
          <div className="px-4">
            <img src={rocket.flickr_images[0]} alt="rocket" style={{ width: '250px', height: '200px' }} className="p-0" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.5em' }}>
              {' '}
              <NavLink to={`/rockets/${rocket.rocket_id}`} className="rocketLink">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor" />
                </svg>
                <span>{rocket.rocket_name}</span>
              </NavLink>
            </h2>
            <p>
              {rocket.reserved && <span className="badge me-2" style={{ background: 'darkcyan' }}>Reserved</span>}
              {rocket.description}
            </p>
            <button type="button" className={!rocket.reserved ? 'btn btn-primary reserveBtn' : 'btn btn-outline-secondary'} onClick={() => handleClick(rocket.id)}>
              {rocket.reserved && 'Cancel Reservation'}
              {!rocket.reserved && 'Reserve Rocket'}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Rockets;
