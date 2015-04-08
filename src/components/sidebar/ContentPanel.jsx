import React from 'react';

class ContentPanel extends React.Component {

  render() {
    let model = this.props.model;
    let { title } = model;

    return (
      <section className="contentPanel">
        <h1>{ title }</h1>
      </section>
    )
  }
};

ContentPanel.propTypes = {
  model: React.PropTypes.object
}

export default ContentPanel;
