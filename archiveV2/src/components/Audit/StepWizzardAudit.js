import React from 'react';
import {connect} from 'react-redux';
import {Button, ButtonGroup} from 'reactstrap';

class StepWizzardAudit extends React.Component {
  constructor(props) {
    super(props);

    this.validInput = this.validInput.bind(this);

    this.totalStep = this.props.cat.length;
    this.state = {
      step: 0,
      answers: []
    };
  }

  validInput(val) {
    const answers = [...this.state.answers, val];

    if (answers.length >= this.totalStep) this.props.nextStep();
    else this.setState({
      step: this.state.step + 1,
      answers: answers
    });
  }

  renderItem(key) {
    return (
      <div className={'wizzard-step-question'}>
        <h3>{this.props.name} {this.props.cat[key].q}</h3>
        <ButtonGroup>
          {this.props.cat[key].r.map((v, k) => (
            <Button key={k} onClick={() => this.validInput(v.value)}>{v.label}</Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }

  render() {
    return (
      <div className={'wizzard-step'}>
        <h3>{this.props.name} {this.props.cat[this.state.step].q}</h3>
        <ButtonGroup>
          {this.props.cat[this.state.step].r.map((v, k) => (
            <Button key={k} onClick={() => this.validInput(v.value)}>{v.label}</Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(StepWizzardAudit);