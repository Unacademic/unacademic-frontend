import React from 'react';

import Actions from '../../actions/index'
import { AppState } from '../../stores/index'
import { Model } from '../../stores/index'

import Unacademic from './Unacademic.jsx';

class UnacademicContainer extends React.Component{

  constructor(props){
    super(props);
    let appState = AppState.current;
    let model = Model;
    this.state = { appState, model };
    this.onChange = this.onChange.bind(this);
  }

  onChange(){
    let appState = AppState.current;
    let model = Model;
    if(!this.state.user || this.state.user !== appState.user){
      let { user  } = appState;
      Actions.getCollection({ user });
    }
    this.setState({ appState, model });

    // Move to a different spot in the data flow

    // let origin = location.origin;
    // let url = `${ origin }/#/${ appState.user ? appState.user : '' }/${ appState.mode }`;
    // location.assign(url);
  }

  componentDidMount() {
    AppState.addChangeListener(this.onChange);
    this.onChange();
  }

  componentWillUnmount() {
    AppState.removeChangeListener(this.onChange);
  }

  render() {
    let { model, appState } = this.state;
    return (
      <Unacademic model={ model } appState={ appState }/>
    )
  }
};

export default UnacademicContainer;
