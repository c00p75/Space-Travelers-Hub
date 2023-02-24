import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missions';
import { booking } from '../../redux/dragons.js/dragons';
import { reservation } from '../../redux/rockets/rockets';
import './myprofile.css';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missionsStore = useSelector((state) => state.missions);
  const allRockets = useSelector((state) => state);
  const allDragons = useSelector((state) => state.dragons);
  const { missions } = missionsStore;
  const { rockets } = allRockets;
  const { dragons } = allDragons;
  const myMissions = missions.filter((mission) => mission.joined === true);
  const myRockets = rockets.filter((rocket) => rocket.reserved === true);
  const myDragons = dragons.filter((dragon) => dragon.booked === true);
  return (
    <div className="container-fluid">
      <div className="justify-content-between d-flex gap-5 gap-md-1 flex-column flex-md-row">
        <div className="col-md-4">
          <h1 className="p-2 bg-info">My Missions</h1>
          <div className="summary">
            {!myMissions.length ? 'No Missions Joined' : ' '}
            {myMissions.map((mission) => (
              <div className="border p-3 d-flex justify-content-between container-fluid" key={mission.id}>
                <div className="col-5">{mission.name}</div>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => dispatch(joinMission(mission))}
                  >
                    Leave Mission
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h1 className="p-2 bg-info">My Rockets</h1>
          <div>
            {!myRockets.length ? 'No Rockets Reserved' : ' '}
            {myRockets.map((rocket) => (
              <div className="border p-3 d-flex justify-content-between container-fluid" key={rocket.id}>
                <div className="col-5">{rocket.rocket_name}</div>
                <div>
                  <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(reservation(rocket.id))}>
                    Cancel Reservation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h1 className="p-2 bg-info">My Dragons</h1>
          <div>
            {!myDragons.length ? 'No Dragons Booked' : ' '}
            {myDragons.map((dragon) => (
              <div className="border p-3 d-flex justify-content-between container-fluid" key={dragon.id}>
                <div>{dragon.name}</div>
                <div>
                  <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(booking(dragon.id))}>
                    Cancel Booking
                    {' '}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
