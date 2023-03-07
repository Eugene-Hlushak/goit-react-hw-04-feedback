import PropTypes from 'prop-types';
import { FeedbackSection, FeedbackTitle } from './Feedback.styled';
export default function Section({ title, children }) {
  return (
    <FeedbackSection>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </FeedbackSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
