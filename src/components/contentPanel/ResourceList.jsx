import React from 'react';
import R from 'ramda';
import ResourceListItem from './ResourceListItem.jsx';

class ResourceList extends React.Component {

  render() {
    let resources = this.props.resources;
    let resourceList = R.map(( {title, id} ) => {
      let newTitle = title.substring(0, 45);
      return (
        <ResourceListItem key={ id } title={ title } />
       )
      }, resources );

    return (
      <section className="resourcelist">
        <h1>Resources</h1>
        <ul>
          { resourceList }
        </ul>
      </section>
    );
  }
}

ResourceList.propTypes = {
  resources: React.PropTypes.array
};

export default ResourceList;
