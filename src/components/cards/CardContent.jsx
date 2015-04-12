import React from 'react';
import R from 'ramda';

class CardContent extends React.Component {
  render(){
    let model = this.props.model;
    let { title, curator, description, summary, checkpoints } = model;
    let checkpointItems = checkpoints.map((checkpoint) => <p key={ checkpoint.id }>{ checkpoint.title }</p>);
    return (
      <section className="card_content">
        <hgroup>
          <h1>{ title }</h1>
        </hgroup>
        <section className="meta">
          <p>Curator: { curator }</p>
          <p>Checkpoints: { checkpoints.length }</p>
        </section>
        <section>
          <h1>Summary</h1>
          <p>{ summary }</p>
        </section>
        <section>
          <h1>Description</h1>
          { R.mapIndexed((paragraph, index) => (<p key={ index }>{ paragraph }</p>), description) }
        </section>
      </section>
    )
  }
}

CardContent.propTypes = {
  model: React.PropTypes.object
}


export default CardContent;
