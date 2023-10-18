import { Button } from './Feedback.styled';

export const Feedback = ({ options, handleFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button onClick={() => handleFeedback(option)} key={option}>
          {option}
        </Button>
      ))}
    </>
  );
};
