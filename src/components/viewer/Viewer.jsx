import React from 'react';

class Viewer extends React.Component {
  render() {
    let viewerStyle = {
    	boxSizing: 'border-box',
			width: '100%',
			height: '90%',
      backgroundColor: '#FFFFF',
      overflow: 'scroll'
		};
    let data = this.props.data
    return (
      <div className="viewer" style={ viewerStyle }>
        <a href={ this.props.url }><i>Full Reference</i></a>
        <br /><br />
        <div dangerouslySetInnerHTML={ { __html: data.content } } />
      </div>
    );
  }
}


Viewer.propTypes = {
}

export default Viewer;