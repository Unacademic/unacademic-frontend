import React from 'react';
import Axios from 'axios';

class Viewer extends React.Component {

  render() {
    let { url } = this.props;
    // appending below will render the source, but in a 404
    // url = url + "&output=embed";

    let viewerStyle = {
			width: '100%',
			height: '100%'
		};

    return (
      <section className="viewer">
        <iframe sandbox="allow-same-origin" style={ viewerStyle } src={ url }></iframe>
      </section>
    );
  }
}

Viewer.propTypes = {
  url: React.PropTypes.string
}

export default Viewer;