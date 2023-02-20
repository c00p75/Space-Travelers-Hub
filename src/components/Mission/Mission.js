import { PropTypes } from 'prop-types';
import './Mission.css';

const Mission = ({
  missionName, description, joined, onClick,
}) => (
  <tr>
    <td className="col-md-1">{missionName}</td>
    <td className="col-md-4">{description}</td>
    <td className="align-middle col-md-1 text-center">
      <span className={joined ? 'member' : 'not-member '}>
        {joined ? 'Active Member' : 'NOT A MEMBER'}
        {' '}
      </span>
    </td>
    <td className={`align-middle col-md-1 text-center ${joined && 'btn-active'}`}>
      {' '}
      <button
        type="button"
        className={`btn ${joined ? 'btn-outline-danger' : 'btn-outline-secondary'}`}
        onClick={onClick}
      >
        {joined ? 'Leave Mission' : 'Join Mission'}
      </button>
    </td>
  </tr>
);

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Mission;
