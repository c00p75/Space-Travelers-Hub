import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-bootstrap/Carousel';
import '../Rockets/Rockets.css';
import { booking, fetchDragons } from '../../redux/dragons.js/dragons';

const DragonSpecs = () => {
  const { id } = useParams(); // useParams enables us no grab parameters from the route
  const allDragons = useSelector((state) => state.dragons);
  const { status, dragons } = allDragons;
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'default') { dispatch(fetchDragons()); }
  }, [dispatch, status]);

  const dragonData = dragons.filter((i) => i.id === id);
  const dragon = dragonData;
  const handleClick = (id) => { dispatch(booking(id)); };

  return (
    <>
      {dragonData.length && (
        <div className="container-fluid" style={{ marginTop: '-20px' }}>
          <div className="col d-flex flex-column flex-md-row" style={{ width: '100%' }}>
            <Carousel id="rocketCarousel" interval={null} className="d-flex align-items-center">
              {dragon[0].flickr_images.map((img) => (
                <Carousel.Item key={img}>
                  <img className="d-block w-100" src={img} alt="Rocket Slide" />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="featureContainer overflow-auto col ps-4" style={{ width: '100%' }}>
              <div className="d-flex gap-4 align-items-center">
                <h2>{`${dragon[0].name} Rocket Features`}</h2>
                <button type="button" className={!dragon[0].booked ? 'btn btn-primary reserveBtn2' : 'btn btn-outline-secondary'} onClick={() => handleClick(dragon[0].id)}>
                  <span>
                    {dragon[0].booked && 'Cancel Booking'}
                    {!dragon[0].booked && 'Book Dragon'}
                  </span>
                </button>
              </div>
              <ul className="featureItems">
                <li className="feature">
                  <span>Crew Capacity</span>
                  <span>:</span>
                  <span>
                    {dragon[0].crew_capacity}

                  </span>
                </li>
                <li className="feature">
                  <span>Type</span>
                  <span>:</span>
                  <span>{dragon[0].type}</span>
                </li>
                <li>
                  <h3>Thrusters</h3>
                  <div className="feature">
                    <span>Type</span>
                    <span>:</span>
                    <span>{dragon[0].thrusters[0].type}</span>
                  </div>
                  <div className="feature">
                    <span>Amount</span>
                    <span>:</span>
                    <span>{dragon[0].thrusters[0].amount}</span>
                  </div>
                  <div className="feature">
                    <span>Fuel</span>
                    <span>:</span>
                    <span>{`${dragon[0].thrusters[0].fuel_1}, ${dragon[0].thrusters[0].fuel_2}`}</span>
                  </div>
                  <div className="feature">
                    <span>Pods</span>
                    <span>:</span>
                    <span>{`${dragon[0].thrusters[0].pods}`}</span>
                  </div>
                </li>
                <li className="feature">
                  <span>Orbit duration</span>
                  <span>:</span>
                  <span>{`${dragon[0].orbit_duration_yr} years`}</span>
                </li>
                <li>
                  <h3>Height</h3>
                  <div className="feature">
                    <span>Feet</span>
                    <span>:</span>
                    <span>{dragon[0].height_w_trunk.feet}</span>
                  </div>
                  <div className="feature">
                    <span>Meters</span>
                    <span>:</span>
                    <span>{dragon[0].height_w_trunk.meters}</span>
                  </div>
                </li>
                <li>
                  <h3>Heat Shield</h3>
                  <div className="feature">
                    <span>Partner</span>
                    <span>:</span>
                    <span>{dragon[0].heat_shield.dev_partner}</span>
                  </div>
                  <div className="feature">
                    <span>Type</span>
                    <span>:</span>
                    <span>{dragon[0].heat_shield.material}</span>
                  </div>
                  <div className="feature">
                    <span>Temperature</span>
                    <span>:</span>
                    <span>{`${dragon[0].heat_shield.temp_degrees}`}</span>
                  </div>
                </li>
                <li>
                  <a href={dragon[0].wikipedia} style={{ display: 'inline-flex', alignItems: 'center' }} target="_blank" rel="noreferrer" className="cta">
                    <span>Learn More</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DragonSpecs;
