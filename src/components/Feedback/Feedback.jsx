const Feedback = ({ data }) => {
  return (
    <div>
      <ul>
        <li> Good: {data.good}</li>
        <li> Neutral: {data.neutral}</li>
        <li> Bad: {data.bad}</li>
      </ul>
    </div>
  );
};
export default Feedback;
