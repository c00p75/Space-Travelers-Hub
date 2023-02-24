import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { fetchRockets, reservation } from '../../redux/rockets/rockets';
import './Rockets.css';

const RocketSpecs = () => {
  const { id } = useParams(); // useParams enables us no grab parameters from the route
  const allRockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allRockets.length) { dispatch(fetchRockets()); }
  });

  const rocketData = allRockets.filter((i) => i.rocket_id === id);
  const rocket = rocketData[0];

  const handleClick = (id) => { dispatch(reservation(id)); };
  return (
    <>
      {rocketData.length && (
        <div className="container-fluid" style={{ marginTop: '-20px' }}>
          <div className="col d-flex flex-column flex-md-row" style={{ width: '100%' }}>
            <Carousel id="rocketCarousel" interval={null} className="d-flex align-items-center">
              {rocket.flickr_images.map((img) => (
                <Carousel.Item key={img}>
                  <img className="d-block w-100" src={img} alt="Rocket Slide" />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="featureContainer overflow-auto col ps-4" style={{ width: '100%' }}>
              <div className="d-flex gap-4 align-items-center">
                <h2>{`${rocket.rocket_name} Rocket Features`}</h2>
                <button type="button" className={`btn me-3 ${!rocket.reserved ? 'btn-primary reserveBtn2' : 'btn-outline-secondary'}`} onClick={() => handleClick(rocket.id)}>
                  <span>
                    {rocket.reserved && 'Cancel Reservation'}
                    {!rocket.reserved && 'Reserve Rocket'}
                  </span>
                </button>
              </div>
              <ul className="featureItems">
                <li className="feature">
                  <span>Company</span>
                  <span>:</span>
                  <span>{rocket.company}</span>
                </li>
                <li className="feature">
                  <span>Country</span>
                  <span>:</span>
                  <span>{rocket.country}</span>
                </li>
                <li className="feature">
                  <span>Boosters</span>
                  <span>:</span>
                  <span>{rocket.boosters}</span>
                </li>
                <li className="feature">
                  <span>Cost Per Launch</span>
                  <span>:</span>
                  <span>{`$${rocket.cost_per_launch}`}</span>
                </li>
                <li>
                  <h3>Diameter</h3>
                  <div className="feature">
                    <span>Feet</span>
                    <span>:</span>
                    <span>{rocket.diameter.feet}</span>
                  </div>
                  <div className="feature">
                    <span>Meters</span>
                    <span>:</span>
                    <span>{rocket.diameter.meters}</span>
                  </div>
                </li>
                <li>
                  <h3>Engines</h3>
                  <div className="feature">
                    <span>Number</span>
                    <span>:</span>
                    <span>{rocket.engines.number}</span>
                  </div>
                  <div className="feature">
                    <span>Type</span>
                    <span>:</span>
                    <span>{rocket.engines.type}</span>
                  </div>
                  <div className="feature">
                    <span>Propellants</span>
                    <span>:</span>
                    <span>{`${rocket.engines.propellant_1}, ${rocket.engines.propellant_2}`}</span>
                  </div>
                </li>
                <li className="feature">
                  <span>First Flight</span>
                  <span>:</span>
                  <span>{rocket.first_flight}</span>
                </li>
                <li>
                  <h3>height</h3>
                  <div className="feature">
                    <span>Feet</span>
                    <span>:</span>
                    <span>{rocket.height.feet}</span>
                  </div>
                  <div className="feature">
                    <span>Meters</span>
                    <span>:</span>
                    <span>{rocket.height.meters}</span>
                  </div>
                </li>
                <li>
                  <h3>Landing Legs</h3>
                  <div className="feature">
                    <span>Material</span>
                    <span>:</span>
                    <span>{rocket.landing_legs.material}</span>
                  </div>
                  <div className="feature">
                    <span>Number</span>
                    <span>:</span>
                    <span>{rocket.landing_legs.number}</span>
                  </div>
                </li>
                <li>
                  <h3>Mass</h3>
                  <div className="feature">
                    <span>KG</span>
                    <span>:</span>
                    <span>{rocket.mass.kg}</span>
                  </div>
                  <div className="feature">
                    <span>LB</span>
                    <span>:</span>
                    <span>{rocket.mass.lb}</span>
                  </div>
                </li>
                <li className="feature">
                  <span>Development Stages</span>
                  <span>:</span>
                  <span>{rocket.stages}</span>
                </li>
                <li>
                  <a href={rocket.wikipedia} style={{ display: 'inline-flex', alignItems: 'center' }} target="_blank" rel="noreferrer" className="cta">
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

export default RocketSpecs;
