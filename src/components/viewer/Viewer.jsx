import React from 'react';

class Viewer extends React.Component {
  render() {
    let data = this.props.data

    return (
      <div className="viewer">
        <div className="content" dangerouslySetInnerHTML={{__html: data.content}} />
      </div>
    );
  }
}

Viewer.propTypes = {
}

export default Viewer;