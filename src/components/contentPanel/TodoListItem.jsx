import React from 'react';
import R from 'ramda';

class TodoListItem extends React.Component {

  render() {
    let { item, checkDone, handleHover } = this.props;

    let title;
    let id = item.id;
    if(item.title.length > 28){
      title = item.title.substring(0, 28) + ' ...';
    } else {
      title = item.title;
    }

    let isComplete = item.complete ? 'complete' : 'incomplete';
    let classes = ['todolist_item']

    if(item.highlight){
      classes.push('todolist_item-is-highlighted')
    }

    return (
      <li onMouseOut={ handleHover.bind(this, id, false) }
        onMouseOver={ handleHover.bind(this, id, true) }
        onClick={ checkDone.bind(this, item.id) }
        className={ classes.join(' ') }>
          <p><span className={ `checkbox checkbox-is-${isComplete}` }></span>{ title }</p>
      </li>
    )
  }
};

export default TodoListItem;
