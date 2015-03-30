import React from 'react';
import _ from 'lodash';

class DebugStateRow extends React.Component {

  render(){
    let { title, data } = this.props;
    return (
      <tr>
        <td>{ _.capitalize(title) }</td>
        <td>{ `${_.capitalize(data)}` }</td>
      </tr>
    );
  }
};

DebugStateRow.propTypes = {
  title: React.PropTypes.string,
  data: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ])
};

DebugStateRow.defaultProps = {
  data: '---'
};

export default DebugStateRow;
