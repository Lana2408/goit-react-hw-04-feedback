import React, { Component } from 'react';

import { Statistics } from './Statistics/Statistics';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './Container/Container.styled';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1
    }));
  };
  

countTotalFeedback() {
  return this.state.good + this.state.neutral + this.state.bad;
}
countPositiveFeedbackPercentage = () => {
  if (this.countTotalFeedback() === 0) return 0;
  return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
};



render() {
  return (
    <Container>
      <Section title="Please leave feedback">
        <Feedback
          options={Object.keys(this.state)}
          handleFeedback={this.handleFeedback}
        />
      </Section>
      <Section title="Statistics">
      {this.countTotalFeedback() > 0 ? (
  <Statistics
    good={this.state.good}
    neutral={this.state.neutral}
    bad={this.state.bad}
    countTotalFeedback={this.countTotalFeedback()}
    countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
  />
) : (
  <Notification message="There is no feedback" /> // Змінено messege на message
)}
      </Section>
    </Container>
  );
}
}