import React from 'react';
import R from 'ramda';
import LevelButton from './LevelButton.jsx';
import _ from 'lodash';

class LevelPanel extends React.Component {

  render() {
    let { viewModel, position } = this.props;
    let levels = R.toPairs(viewModel);
    let levelsWithValues = R.takeWhile(([level, value]) => value)(levels)
    let activeLevel = R.last(levelsWithValues) || [];

    let createLevelButtons = R.map((level) => {
      let isActive = activeLevel[0] === level[0] ? true : false;
      return <LevelButton isActive={ isActive } key={ level } level={ level }/>
    });

    let levelButtons = createLevelButtons(levels);
    let classes = ['panel', 'panel-level', `panel-${position}`].join(' ');

    return (
      <section className={ classes }>
        { levelButtons }
      </section>
    )
  }
};
LevelPanel.defaultProps = {
  position: 'left'
}

LevelPanel.propTypes = {
  viewModel: React.PropTypes.object.isRequired,
  position: React.PropTypes.string
}

export default LevelPanel;
