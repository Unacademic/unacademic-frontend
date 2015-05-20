import React from 'react';
import R from 'ramda';
import TodoListItem from './TodoListItem.jsx';

import Actions from '../../actions/index';

class TodoList extends React.Component {

  checkDone(item){
    let waypointId = this.props.waypoint;
    let checkpointId = item;
    let waypoint = { id: waypointId };
    let checkpoint = { id: checkpointId };
    Actions.checkDone({ waypoint, checkpoint });
  }

  render() {
    let { collection } = this.props;

    let items = R.mapIndexed((item, index) => {
      return (
        <TodoListItem key={ index }
          checkDone={ this.checkDone.bind(this) }
          item={ item }/>
      )
    }, collection);

    return (
      <section className="panel_section todolist">
        <h1>Checkpoints</h1>
        <ul>
          { items }
        </ul>
      </section>
    )
  }
};

export default TodoList;
