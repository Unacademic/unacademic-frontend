import React from 'react';
import Tour from './Tour.jsx';

let TourSelector = React.createClass({
  render: function(){
    let { level } = this.props;
    switch(level){
      case 'waypoints':
        return <Tour/>
      default:
        return <div></div>
    }
  }
})

TourSelector.propTypes = {
  level: React.PropTypes.string
}

export default TourSelector ;
