import { Map, Stack }  from 'immutable';
require("babel/polyfill");

class ViewModel {
  async get(appState){
    let { user } = appState;
    let title;
    let collection;
    if(!user){
      collection = [1,2,3,4,5,6,7,8,9];
    } else {
      collection = [1,2,3,4,5];
    }
    return { title, collection } 
  }
}

export default ViewModel;
