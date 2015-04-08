import React from 'react';
import Actions from '../../../src/actions/index.js';

class ContentPanel extends React.Component {

  selectParent(){
    Actions.setViewModel('parent');
  }

  render() {
    let model = this.props.model;
    let { title, type } = model;

    return (
      <section className="contentPanel">
        <h1>{ title }</h1>
        { type !== 'waypoints' ? <button onClick={ this.selectParent } className="goToParent">Go To Parent</button> : null }
      </section>
    )
  }
};

ContentPanel.propTypes = {
  model: React.PropTypes.object
}

export default ContentPanel;
