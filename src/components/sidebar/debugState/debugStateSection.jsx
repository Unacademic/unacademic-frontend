import React from 'react';
import _ from 'lodash';

import DebugStateRow from './debugStateRow.jsx';

class DebugStateSection extends React.Component {

  render(){
    let { title, data } = this.props;
    let rows = _.map(data, (value, key) => {
      return (
        <DebugStateRow key={ key } title={ key } data={ value }/>
      )
    });


    return (
      <div>
        <tr>
          <th colSpan="2">{ _.capitalize(title) }</th>
        </tr>
        { rows }
      </div>
    )
  }
};

DebugStateSection.propTypes = {
  title: React.PropTypes.string,
  data: React.PropTypes.any
};

export default DebugStateSection;
