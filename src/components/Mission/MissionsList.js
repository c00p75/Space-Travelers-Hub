import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import { displayMissions, joinMission } from '../../redux/missions/missions';
import Mission from './Mission';

const MissionsList = () => {
  const dispatch = useDispatch();

  const missionsStore = useSelector((state) => state.missions);
  const { status, missions } = missionsStore;

  useEffect(() => {
    if (status === 'initial') {
      dispatch(displayMissions());
    }
  }, [dispatch, status]);

  return (
    <>
      <div className="container-fluid d-none d-md-block">
        <table className="table table-striped container border mt-5 mb-5">
          <tbody>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th className="text-white">{' '}</th>
            </tr>
            {missions.map((obj) => (
              <Mission
                key={obj.id}
                id={obj.id}
                joined={obj.joined}
                missionName={obj.name}
                description={obj.description}
                onClick={() => dispatch(joinMission(obj))}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-md-none">
        <h1 className="text-center">Missions</h1>
        <div className="d-flex flex-column gap-4">
          {missions.map((obj) => (
            <div key={obj.id}>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0" style={{ borderColor: 'whitesmoke' }}>
                  <Accordion.Header>
                    <div className="mission-header d-flex align-items-center gap-4">
                      <h2>{obj.name}</h2>
                      <span className={`member-status ${obj.joined ? 'member' : 'not-member '}`}>{obj.joined ? 'Active Member' : 'NOT A MEMBER'}</span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="d-flex flex-column gap-4">
                    <div>{obj.description}</div>
                    <button type="button" className={obj.joined ? 'leave-btn' : 'join-btn'} onClick={() => dispatch(joinMission(obj))}>
                      {obj.joined ? 'Leave Mission' : 'Join Mission'}
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MissionsList;
