import PropTypes from 'prop-types';
import { BtnList } from './FeedbackOption.styled';

const FeedbackOption = ({ optionList, onLeaveFeedback }) => {
  return (
    <BtnList>
      {optionList.map(option => {
        return (
          <li key={option}>
            <button className={option} onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </BtnList>
  );
};

export default FeedbackOption;

FeedbackOption.propTypes = {
  optionList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
