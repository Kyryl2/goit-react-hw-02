import { useState } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const onReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = () => {
    return Object.values(feedback).reduce((acc, item) => {
      return acc + item;
    }, 0);
  };
  const total = totalFeedback();

  const positiveFeedback = () => {
    const goodCount = feedback.good;
    if (!total) {
      return 0;
    }
    return Math.round((goodCount / total) * 100);
  };
  const positive = positiveFeedback();

  return (
    <div>
      <Description />
      <Options
        onReset={onReset}
        feedback={feedback}
        updateFeedback={updateFeedback}
        total={total}
      />

      {total ? (
        <Feedback positive={positive} total={total} data={feedback} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
