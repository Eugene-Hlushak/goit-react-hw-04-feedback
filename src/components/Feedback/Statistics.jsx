import PropTypes from 'prop-types';
import { ListItem } from './Feedback.styled';
export default function Statistics({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <ul>
      <ListItem>
        <p>Good: {good}</p>
      </ListItem>
      <ListItem>
        <p>Neutral: {neutral}</p>
      </ListItem>
      <ListItem>
        <p>Bad: {bad}</p>
      </ListItem>
      <ListItem>
        <p>Total: {totalFeedback}</p>
      </ListItem>
      <ListItem>
        <p>Positive feedback: {positivePercentage}%</p>
      </ListItem>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
