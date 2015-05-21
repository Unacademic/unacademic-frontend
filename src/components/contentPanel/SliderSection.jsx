import React from 'react';

class SliderSection extends React.Component {

  render() {
  	let { clarity, difficulty, enjoyment, relevance, tempholder } = this.props.criteria;
  	console.log('props', this.props.criteria);

    return (
			<section className='sliders'>
				<div className="flex-item">
			  	<label htmlFor="clarity">Clarity</label>
					<input type="range" name="clarity" min="0" max="5" step="1" value={ clarity } /><br />
				</div>

				<div className="flex-item">
					<label htmlFor="difficulty">Difficulty</label>
					<input type="range" name="difficulty" min="0" max="5" step="1" placeholder="5" value={ difficulty } /><br />
				</div>

				<div className="flex-item">
					<label htmlFor="enjoyment">Enjoyment</label>
					<input type="range" name="enjoyment" min="0" max="5" step="1" placeholder="5" value={ enjoyment } /><br />
				</div>

				<div className="flex-item">
					<label htmlFor="relevance">Relevance</label>
					<input type="range" name="relevance" min="0" max="5" step="1" placeholder="5" value={ relevance } /><br />
				</div>

				<div className="flex-item">
					<label htmlFor="tempholder">(tempholder)</label>
					<input type="range" name="tempholder" min="0" max="5" step="1" placeholder="5" value={ tempholder } />
				</div>
			</section>
  	)
  }
}

export default SliderSection;