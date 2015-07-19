/*eslint no-undef:0 */
/*eslint no-console:0 */
import { MapContainer, NavContainer, TodoContainer } from "./TempContainers.jsx";

let getSchema = (type, handlers) => {

  let components = {
    map: MapContainer,
    nav: NavContainer,
    todo: TodoContainer
  };

  let waypoint = {
    map: { fields: {checkpoints: "collection", type: ""}, component: components.map, handlers: handlers.collection },
    title: {},
    meta: { fields: ["curator"] },
    summary: {},
    checkpoints: { fields: "checkpoints", component: components.todo, handlers: handlers.collection },
    nav: { fields: { id: "", type: "", title: ""}, component: components.nav, handlers: handlers.model}
  };

  let checkpoint = {
    map: { fields: {resources: "collection", type: ""}, component: components.map, handlers: handlers.collection },
    title: {},
    resources: { fields: "resources", component: components.todo, handlers: handlers.collection },
    nav: { fields: { id: "", type: "", title: ""}, component: components.nav, handlers: handlers.model}
  };

  let resource = {
    map: { fields: {criteria: "collection", type: ""}, component: components.map, handlers: handlers.collection },
    title: {},
    nav: { fields: { id: "", type: "", title: ""}, component: components.nav, handlers: handlers.model}
  };

  let fallthrough = {
    title: {},
    nav: { fields: { id: "", type: "", title: ""}, component: components.nav, handlers: handlers.model}
  };

  switch(type){
    case "waypoint": return waypoint;
    case "checkpoint": return checkpoint;
    case "resource": return resource;
    default: return fallthrough;
  }
};

export default getSchema;
