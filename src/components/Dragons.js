import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons, booking } from '../redux/dragons.js/dragons';

const Dragons = () => {
  const allDragons = useSelector((state) => state.dragons);
  const { status, dragons } = allDragons;
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'default') { dispatch(fetchDragons()); }
  }, [dispatch, status]);

  const handleClick = (id) => { dispatch(booking(id)); };
  return (
    <ul className="container">
      {dragons.map((dragon) => (
        <li key={dragon.id} className="d-flex p-3">
          <div className="px-4">
            <img src={dragon.flickr_images[0]} alt="dragon" style={{ width: '250px', height: '200px' }} className="p-0" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.51em' }}>{dragon.name}</h2>
            <p>
              {dragon.booked && <span className="badge me-2" style={{ background: 'darkcyan' }}>Booked</span>}
              {dragon.description}
            </p>
            <button type="button" className={!dragon.booked ? 'btn btn-primary' : 'btn btn-outline-secondary'} onClick={() => handleClick(dragon.id)}>
              {dragon.booked && 'Cancel Booking'}
              {!dragon.booked && 'Book Dragon'}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Dragons;
