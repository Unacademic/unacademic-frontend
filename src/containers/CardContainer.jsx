/*eslint no-console:0 */
/*eslint no-undef:0 */
import React, { PropTypes } from "react";
import Actions from "../actions/index";
import Card from "offcourse-component-card";
import getSchema from "./CardSchema.jsx";
import schemas from "./schemas.js";
import components from "./TempContainers.jsx";

class CardContainer extends React.Component {

  static propTypes = {
    model: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
  }

  render(){
    const { model, context } = this.props;
    const { type } = model;
    const handlers = this._handlers();
    const schema = getSchema(type, schemas, components, handlers, context);
    return <Card schema={ schema } model={ model }/>;
  }

  _handlers(){
    const handleComplete = this.handleComplete.bind(this);
    const handleHover = this.handleHover.bind(this);
    const selectModel = this.selectModel.bind(this);
    const selectChild = this.selectChild.bind(this);
    const collection = { selectModel: selectChild, handleComplete, handleHover };
    const model = { selectModel };
    return { collection, model };
  }

  handleComplete(id){
    const { model } = this.props;
    const selection = { parentId: model.id, id };
    Actions.toggleComplete(selection);
  }

  handleHover(id, status){
    const { model } = this.props;
    const selection = { parentId: model.id, id };
    Actions.setHighlight(selection, status);
  }

  selectChild(id){
    const { model } = this.props;
    const { type, id: parentId } = model;
    Actions.setLevel({ type, id, parentId });
  }

  selectModel(){
    const { model } = this.props;
    const { type, id } = model;
    Actions.setLevel({ type, id });
  }
}

export default CardContainer;
