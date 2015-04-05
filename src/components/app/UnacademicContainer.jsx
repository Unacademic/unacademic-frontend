import React from 'react';

import Actions from '../../actions/index'
import AppStore from '../../stores/index'

import Unacademic from './Unacademic.jsx';

class UnacademicContainer extends React.Component{

  constructor(){
    let { appState, viewModel } = AppStore.current;
    this.state = { appState, viewModel };
    this.onChange = this.onChange.bind(this);
  }

  onChange(){
    let { appState, viewModel } = AppStore.current;
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
    return (
      <Unacademic viewModel={ viewModel } appState={ appState }/>
    )
  }
};

export default UnacademicContainer;

// function setRoutes(appState){
//   let origin = location.origin;
//   let url = `${ origin }/#/${ appState.user ? appState.user : '' }/${ appState.mode }`;
//   location.assign(url);
// }
