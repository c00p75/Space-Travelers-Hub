import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-bootstrap/Carousel';
import { fetchRockets } from '../../redux/rockets/rockets';
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

  return (
    <>
      {rocketData.length && (
        <div className="container-fluid" style={{ marginTop: '-20px' }}>
          <div className="row">
            <span className="col-6">{' '}</span>
            <h2 className="col-6">{`${rocket.rocket_name} Rocket Features`}</h2>
          </div>
          <div className="col d-flex" style={{ width: '100%' }}>
            <Carousel id="rocketCarousel" interval={null}>
              {rocket.flickr_images.map((img) => (
                <Carousel.Item key={img}>
                  <img className="d-block w-100" src={img} alt="Rocket Slide" />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="featureContainer col ps-4" style={{ width: '100%' }}>
              <ul className="featureItems overflow-auto" style={{ height: '65vh' }}>
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
