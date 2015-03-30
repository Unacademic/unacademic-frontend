import React from 'react';

class Main extends React.Component {
  render() {
    let { collection } = this.props.model;
    return (
      <section className="main">
        <section className="timeline"></section>
      </section>
    )
  }
}

export default Main;
