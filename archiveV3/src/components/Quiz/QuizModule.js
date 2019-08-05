import React from 'react';
import Quiz from 'react-quiz-component';
import data from './data.json';

class QuizModule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Quiz quiz={data} shuffle={true} showInstantFeedback={true} continueTillCorrect={true} />
    );
  }
}

export default QuizModule;