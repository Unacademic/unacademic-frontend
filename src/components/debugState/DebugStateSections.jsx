import React from 'react';
import _ from 'lodash';
import DebugStateRow from './debugStateRow.jsx';

class DebugStateSection extends React.Component {
  render(){
    let { title, data } = this.props;
    return (
      <tr><th colSpan="2">{ title }</th></tr>
    )
  }
};


export default DebugStateSection;
