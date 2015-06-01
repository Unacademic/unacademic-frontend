import React from 'react';
import AppStore from '../../stores/index'

import Unacademic from './Unacademic.jsx';
import TourSelector from '../tour/TourSelector.jsx';

class UnacademicContainer extends React.Component{

  constructor(){
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  async onChange(){
    let { appState, viewModel } = await AppStore.get();
    this.setState({ appState, viewModel });
  }

  componentDidMount() {
    AppStore.addChangeListener(this.onChange);
    this.onChange();
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange);
  }

  render() {
    let { appState, viewModel } = this.state;
    if(appState && viewModel){
      return (
        <div>
          <div className="placeholder">
          <p className="textbar">We Are Working Hard</p><br/>
          <p className="textbar">To Support Your Device</p><br/>
          <p className="textbar textbar-inverse">Come Back Soon</p>
          </div>
          <div className="container">
            <Unacademic viewModel={ viewModel } appState={ appState }/>
            { appState.levels.current !== 'introduction' && <TourSelector /> }
          </div>
        </div>
      )
    }
    return null;
  }
};

export default UnacademicContainer;

// function setRoutes(appState){
//   let origin = location.origin;
//   let url = `${ origin }/#/${ appState.user ? appState.user : '' }/${ appState.mode }`;
//   location.assign(url);
// }
