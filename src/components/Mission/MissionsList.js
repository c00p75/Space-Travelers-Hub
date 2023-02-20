import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <table className="table table-striped container border mt-5 mb-5">
      <tbody>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th className="text-white">.</th>
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
  );
};

export default MissionsList;
