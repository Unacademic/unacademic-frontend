import React from 'react';

class SliderSection extends React.Component {

	constructor(props) {
		super(props);
		let { clarity, difficulty, enjoyment, relevance, tempholder } = this.props.criteria;
		this.state = {
			clarity: clarity,
			difficulty: difficulty,
			enjoyment: enjoyment,
			relevance: relevance,
			tempholder: tempholder
		};
	}

	handleChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({
			[name]: value
		});
	}

  render() {

    return (
			<section className='sliders-container'>
				<div className="slider">
			  	<label htmlFor="clarity">Clarity</label>
					<input type="range" name="clarity" min="0" max="5" step="1" value={ this.state.clarity } onChange={ this.handleChange.bind(this) } /><br />
				</div>

				<div className="slider">
					<label htmlFor="difficulty">Difficulty</label>
					<input type="range" name="difficulty" min="0" max="5" step="1" placeholder="5" value={ this.state.difficulty } onChange={ this.handleChange.bind(this) } /><br />
				</div>

				<div className="slider">
					<label htmlFor="enjoyment">Enjoyment</label>
					<input type="range" name="enjoyment" min="0" max="5" step="1" placeholder="5" value={ this.state.enjoyment } onChange={ this.handleChange.bind(this) } /><br />
				</div>

				<div className="slider">
					<label htmlFor="relevance">Relevance</label>
					<input type="range" name="relevance" min="0" max="5" step="1" placeholder="5" value={ this.state.relevance } onChange={ this.handleChange.bind(this) } /><br />
				</div>

				<div className="slider">
					<label htmlFor="tempholder">(tempholder)</label>
					<input type="range" name="tempholder" min="0" max="5" step="1" placeholder="5" value={ this.state.tempholder } onChange={ this.handleChange.bind(this) } />
				</div>
			</section>
  	)
  }
}

export default SliderSection;