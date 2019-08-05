import React from 'react';

import Quiz from '../../components/Quiz/QuizModule'

class QuizView extends React.Component {
  render() {
    return (
      <div>
        <h1>Quiz</h1>
        <Quiz/>
      </div>
    );
  }
}

export default QuizView;