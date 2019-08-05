import React from 'react';

import WizzardAudit from '../../components/Audit/WizzardAudit'

class Audit extends React.Component {

  render() {

    return (
      <div>
        <h1>{this.props.title}</h1>
        <WizzardAudit/>
      </div>
    );
  }

}

export default Audit;