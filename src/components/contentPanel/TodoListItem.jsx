import React from 'react';
import R from 'ramda';

class TodoListItem extends React.Component {

  render() {
    let { item, checkDone } = this.props;
    let isComplete = item.complete ? 'complete' : 'incomplete';

    return (
      <li onClick={ checkDone.bind(this, item.id) }className="todolist_item">
        <p><span className={ `checkbox checkbox-is-${isComplete}` }></span>{ item.title }</p>
      </li>
    )
  }
};

export default TodoListItem;
