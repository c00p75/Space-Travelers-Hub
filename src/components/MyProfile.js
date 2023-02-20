import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';
import { booking } from '../redux/dragons.js/dragons';
import { reservation } from '../redux/rockets/rockets';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missionsStore = useSelector((state) => state.missions);
  const allRockets = useSelector((state) => state);
  const allDragons = useSelector((state) => state.dragons);
  const { missions } = missionsStore;
  const { rockets } = allRockets;
  const { dragons } = allDragons;
  const myMissions = missions.filter((mission) => mission.joined === true);
  const myRockets = rockets.filter((mission) => mission.reserved === true);
  const myDragons = dragons.filter((dragon) => dragon.booked === true);
  return (
    <div className="container">
      <div className="row justify-content-evenly">
        <div className="col-6">
          <h1 className="p-2">My Missions</h1>
          <div>
            {!myMissions.length ? 'No Missions Joined' : ' '}
          </div>
          <div>
            {myMissions.map((mission) => (
              <div className="border p-3 d-flex justify-content-between" key={mission.id}>
                <div>{mission.name}</div>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => dispatch(joinMission(mission))}
                >
                  Leave Mission
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <h1 className="p-2">My Rockets</h1>
          <div>
            {!myRockets.length ? 'No Rockets Reserved' : ' '}
          </div>
          <div>
            {myRockets.map((rocket) => (
              <div className="border p-3 d-flex justify-content-between" key={rocket.id}>
                <div>{rocket.name}</div>
                <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(reservation(rocket.id))}>
                  Cancel Reservation
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="col-6 mt-5">
          <h1 className="p-2">My Dragons</h1>
          <div>
            {!myDragons.length ? 'No Dragons Booked' : ' '}
          </div>
          <div>
            {myDragons.map((dragon) => (
              <div className="border p-3 d-flex justify-content-between" key={dragon.id}>
                <div>{dragon.name}</div>
                <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(booking(dragon.id))}>
                  Cancel Booking
                  {' '}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
