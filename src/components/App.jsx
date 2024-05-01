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
  console.log(feedback);

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback data={feedback} />
    </div>
  );
};

export default App;
