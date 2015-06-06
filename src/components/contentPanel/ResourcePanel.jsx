/*eslint camelcase:0 */
import React from "react";
import R from "ramda";
import _ from "lodash";
import classnames from "classnames";

import Actions from "../../actions/index";

import SliderSection from "../sliders/SliderSection.jsx";
import ResourceMap from "../maps/ResourceMap.jsx";

class ResourcePanel extends React.Component {

  constructor(props){
    super(props);
    this.name = "panel";
  }

  updateCriteria(fieldName, value) {
    let { id } = this.props.model;
    let resource = { id };
    let property = {[fieldName]: value};
    Actions.updateCriteria({ resource, property });
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render() {
    let { context, model } = this.props;
    let { title, notes, criteria, tags, time_to_digest } = model;
    let tagBlocks = R.mapIndexed((tag, index) => {
      let formattedTag = R.map((tagWord) => _.capitalize(tagWord), tag.split(" ")).join(" ");
      return (
        <span key={ index } className="tag">{ formattedTag }</span>
      );
    }, tags);

    return (
      <section className={ this.classes() }>
        <section className={ `${this.name}_header` }>
          <ResourceMap criteria={ criteria }/>
        </section>
        <section className={ `${this.name}_main` }>
          <hgroup>
            <h1 className="title">{ title }</h1>
          </hgroup>
          <section className="panel_section meta">
            <p>Time to Digest: { time_to_digest }</p>
          </section>
          <section>
            <p>{ tagBlocks }</p>
          </section>
          { context === "sidebar" && <SliderSection
              handleChange={ this.updateCriteria.bind(this) }
              model={ model }
              criteria={ criteria }/> }
          <section>
            <h1>Notes</h1>
            { notes }
         </section>
         </section>
       </section>
    );
  };
}

ResourcePanel.propTypes = {
  model: React.PropTypes.object,
  context: React.PropTypes.string
};

export default ResourcePanel;
