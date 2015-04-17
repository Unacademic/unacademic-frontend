import React from 'react';
import Actions from '../../actions/index';

class LevelStack extends React.Component {

  render() {
    let { waypoint, checkpoint } = this.props.viewModel;
    return (
      <section className="layout-levels">
        { waypoint && <div className="tab waypoints"></div> }
        { checkpoint && <div className="tab waypoint"></div> }
      </section>
    )
  }
};

LevelStack.propTypes = {
  viewModel: React.PropTypes.object
}

export default LevelStack;
