import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleAddFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.round((good * 100) / this.countTotalFeedback(this.state));

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <div className={css.section}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleAddFeedback={this.handleAddFeedback}
            options={options}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          ) : (
            <Notification message="There is no feedback yet" />
          )}
        </Section>
      </div>
    );
  }
}
