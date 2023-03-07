import PropTypes from 'prop-types';
import { ButtonList, ButtonText } from './Feedback.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonList>
      {options.map(option => (
        <li key={option}>
          <ButtonText onClick={onLeaveFeedback}>{option}</ButtonText>
        </li>
      ))}
    </ButtonList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
