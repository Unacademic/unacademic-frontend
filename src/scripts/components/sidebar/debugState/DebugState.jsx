import React from 'react';
import R from 'ramda';
import moment from 'moment';

import DebugStateSection from './debugStateSection.jsx';

class DebugState extends React.Component {

  getTime(timestamp){
    return moment(Date.parse(timestamp)).startOf('minutes').fromNow();
  }

  createDebugObject(state){
    let { timestamp } = state;
    state.timestamp = this.getTime(timestamp);
    return this.divideDebugObject(state);
  }

  divideDebugObject(object){
    let dataArray = R.toPairs(object);
    let createTitleData = (result, [ key, value ]) => {
      if(R.is(Object, value)){
        result[key] = value;
      } else {
        result['general'] = result['general'] || {};
        result['general'][key] = value;
      }
      return result;
    };
    return R.reduce(createTitleData,  {}, dataArray);
  }

  render(){
    let { appState } = this.props;
    let object = this.createDebugObject(appState);
    let dataArray = R.toPairs(object);
    let createSections = R.map(([title, data]) =>
      <DebugStateSection key={ title } title={ title } data={ data } />);
    let sections = createSections(dataArray);

    return (
      <section className="debugState">
        <table className="debugger">
          { sections }
        </table>
      </section>
    )
  }
};

DebugState.propTypes = {
  appState: React.PropTypes.object
}

export default DebugState;
