/*eslint no-undef:0 */
/*eslint no-console:0 */
import React from "react";
import WaypointMap from "../components/maps/WaypointMap.jsx";
import ResourceMap from "../components/maps/ResourceMap.jsx";
import Nav from "../components/cards/CardNav.jsx";
import Todo from "offcourse-component-todolist";

class MapContainer extends React.Component {
  render(){
    const height = 245;
    const width = 418;
    const { data, handlers } = this.props;
    const { type, collection} = data;
    switch(type){
      case "waypoint": return <WaypointMap collection={ collection } {...handlers}/>;
      case "resource": return <ResourceMap criteria={ collection } {...handlers}/>;
      default: return <svg viewBox={ `0 0 ${width} ${height}` } width={ width } height={ height } className="map"/>;
    }
  }
}

class TodoContainer extends React.Component {
  render(){
    const { data, handlers } = this.props;
    const { handleHover, handleComplete, selectModel } = handlers;
    handlers.handleCheckboxClick = handleComplete;
    handlers.handleTitleClick = selectModel;
    const collection = data;
    return (
      <Todo
        collection={ collection }
        {...handlers} />
     );
  }
}

class NavContainer extends React.Component {
  render(){
    const { data: model, handlers } = this.props;
    return <Nav model={ model } {...handlers}/>;
  }
}

export default { map: MapContainer, nav: NavContainer, todo: TodoContainer };
