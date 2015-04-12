import React from 'react';

class CardContent extends React.Component {
  render(){
    let model = this.props.model;
    let { title, checkpoints } = model;
    let checkpointItems = checkpoints.map((checkpoint) => <p key={ checkpoint.id }>{ checkpoint.title }</p>);
    return (
      <section className="card_content">
        <hgroup>
          <h1>{ title }</h1>
        </hgroup>
        { checkpointItems } 
      </section>
    )
  }
}

CardContent.propTypes = {
  model: React.PropTypes.object
}


export default CardContent;
