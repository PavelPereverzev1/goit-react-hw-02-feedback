import PropTypes from 'prop-types';
import { StatsList } from './Statistic.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatsList>
      <li>
        <span>Good :</span>
        <span className="stat-value">{good}</span>
      </li>
      <li>
        <span>Neutral :</span>
        <span className="stat-value">{neutral}</span>
      </li>
      <li>
        <span>Bad :</span>
        <span className="stat-value">{bad}</span>
      </li>
      <li>
        <span>Total :</span>
        <span className="stat-value">{total}</span>
      </li>
      <li>
        <span>Positive feeback :</span>
        <span className="stat-value">{positivePercentage}%</span>
      </li>
    </StatsList>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
