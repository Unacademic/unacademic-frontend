import React from "react";
import marked from "marked";
import classnames from "classnames";

let renderer = new marked.Renderer();

class DescriptionSection extends React.Component {
  constructor(props){
    super(props);
    this.name = "panel_section";
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render() {
    let { description } = this.props;
    let rendereredDescription = {__html: marked(description, { renderer })};

    return (
      <section className={ this.classes() }>
      <h1>Description</h1>
      <div className="description editable" dangerouslySetInnerHTML={ rendereredDescription }></div>
      </section>
    );
  };
}

DescriptionSection.propTypes = {
  description: React.PropTypes.string,
  isEditing: React.PropTypes.bool
};

export default DescriptionSection;
