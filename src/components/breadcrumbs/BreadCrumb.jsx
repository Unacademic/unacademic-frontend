import React from 'react';
import Actions from '../../actions/index';

class BreadCrumb extends React.Component {

  handleClick(selection){
    Actions.setViewModel(selection);
  }

  render() {
    let { level, currentMode } = this.props;
    let [ type, {id, title} ] = level;
    let selection = { type, id, title };
    let classes = `breadcrumb ${ type === currentMode && 'breadcrumb-is-active'}`;
    return <li onClick={ this.handleClick.bind(this, selection) } className={ classes }>{ title || 'Home' }</li>
  }
}

BreadCrumb.propTypes = {
  level: React.PropTypes.array,
  currentMode: React.PropTypes.string
}

export default BreadCrumb;
