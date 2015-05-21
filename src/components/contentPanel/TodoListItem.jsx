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

    return (
      <li
        onMouseLeave={ handleHover.bind(this, false, id) }
        onMouseEnter={ handleHover.bind(this, true, id) }
        onClick={ checkDone.bind(this, item.id) }
        className="todolist_item">
        <p><span className={ `checkbox checkbox-is-${isComplete}` }></span>{ title }</p>
      </li>
    )
  }
};

export default TodoListItem;
