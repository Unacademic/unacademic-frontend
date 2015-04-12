import React from 'react';
import R from 'ramda';
import LevelButton from './LevelButton.jsx';
import _ from 'lodash';

class LevelPanel extends React.Component {

  render() {
    let viewModel = this.props.viewModel;
    let levels = R.toPairs(viewModel);
    let levelsWithValues = R.takeWhile(([level, value]) => value)(levels)
    let activeLevel = R.last(levelsWithValues) || [];
    let createLevelButtons = R.map((level) => {
      let isActive = activeLevel[0] === level[0] ? true : false;
      return <LevelButton isActive={ isActive } key={ level } level={ level }/>
    });
    let levelButtons = createLevelButtons(levels);

    return (
      <section className="panel panel-left panel-level">
        { levelButtons }
      </section>
    )
  }
};

LevelPanel.propTypes = {
  viewModel: React.PropTypes.object.isRequired
}

export default LevelPanel;
