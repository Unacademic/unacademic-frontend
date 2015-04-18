import React from 'react';
import Actions from '../../actions/index';
import LevelSheet from './LevelSheet.jsx';
import R from 'ramda';

class LevelStack extends React.Component {

  render() {
    let { currentMode } = this.props;
    let classes = ['stack', `stack-is-${ currentMode }`].join(' ');
    let sheetMaker = R.map((sheetData) => <LevelSheet key={ sheetData } mode={ sheetData } />)
    let levels = [];

    if(currentMode === 'checkpoint'){
      levels = ['waypoint', 'waypoints'];
    }

    if(currentMode === 'waypoint'){
      levels = ['waypoints'];
    }

    let sheets = sheetMaker(levels);

    return (
      <section className={ classes }>
        { sheets }
      </section>
    )
  }
};

LevelStack.propTypes = {
  currentMode: React.PropTypes.string
}

export default LevelStack;
