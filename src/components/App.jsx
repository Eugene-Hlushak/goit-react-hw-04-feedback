import { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';
import Statistics from './Feedback/Statistics';
import { GlobalStyle } from './GlobalStyle';

export default function App() {
  const options = ['good', 'neutral', 'bad'];

  const [goodFeeback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const addFeedback = evt => {
    const { textContent } = evt.target;
    if (textContent === 'good') setGoodFeedback(prev => prev + 1);
    if (textContent === 'neutral') setNeutralFeedback(prev => prev + 1);
    if (textContent === 'bad') setBadFeedback(prev => prev + 1);
  };

  const countTotalFeedback = () => goodFeeback + neutralFeedback + badFeedback;

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) return 0;
    return Math.round((goodFeeback / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={addFeedback} />
      </Section>

      <Section title="Statistics">
        {goodFeeback || neutralFeedback || badFeedback ? (
          <Statistics
            good={goodFeeback}
            neutral={neutralFeedback}
            bad={badFeedback}
            totalFeedback={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </>
  );
}
