import { List, Item, ResultSpan } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <List>
        <Item>
          Good: <ResultSpan>{good}</ResultSpan>
        </Item>
        <Item>
          Neutral: <ResultSpan>{neutral}</ResultSpan>
        </Item>
        <Item>
          Bad: <ResultSpan>{bad}</ResultSpan>
        </Item>
        <Item>
          Total: <ResultSpan>{countTotalFeedback}</ResultSpan>
        </Item>
        <Item>
          Positive feedbacks:
          <ResultSpan> {countPositiveFeedbackPercentage}%</ResultSpan>
        </Item>
      </List>
    </>
  );
};