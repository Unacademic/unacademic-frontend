import React from 'react';

class SliderSection extends React.Component {

  render() {
    return (
			<section className='sliders'>
				<div className="flex-item">
			  	<label for="clarity">Clarity</label>
					<input type="range" name="clarity" min="0" max="5" /><br />
				</div>

				<div className="flex-item">
					<label for="difficulty">Difficulty</label>
					<input type="range" name="difficulty" min="0" max="5" /><br />
				</div>

				<div className="flex-item">
					<label for="enjoyment">Enjoyment</label>
					<input type="range" name="enjoyment" min="0" max="5" /><br />
				</div>

				<div className="flex-item">
					<label for="relevance">Relevance</label>
					<input type="range" name="relevance" min="0" max="5" /><br />
				</div>

				<div className="flex-item">
					<label for="_something_">_something_</label>
					<input type="range" name="_something_" min="0" max="5" />
				</div>
			</section>
  	)
  }
}

export default SliderSection;