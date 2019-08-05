import React from 'react';
import StepWizard from 'react-step-wizard';
import data from './data.json';
import StepWizzardAudit from './StepWizzardAudit';
import WizzardResultAudit from './WizzardResultAudit'

class WizzardAudit extends React.Component {
  constructor(props) {
    super(props);

    this.data = Object.entries(data);
    this.state = {};
  }

  render() {
    return (
      <div>
        <StepWizard>
          {this.data.map((v, k) => (
            <StepWizzardAudit key={k} name={v[0]} cat={v[1]}/>
          ))}
          <WizzardResultAudit />
          <div>debug</div>
        </StepWizard>
      </div>
    );
  }
}

export default WizzardAudit;