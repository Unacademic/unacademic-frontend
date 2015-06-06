let current;

class ViewModel {

  constructor(API){
    this.API = API;
  }

  async get(appState){
    let levels = appState.get("levels");
    let level = levels.get("current");

    let { type, model } = await this.API.get(levels.toJS());

    if(level === "feedback"){
      type = "feedback";
      let url = "https://docs.google.com/forms/d/1oqhvHKn4huwlxXEdlDJ9z1udg53tSUCkNB7i6fe_Ll4";
      let data = await this.API.getResourceData(url);
      return { data };
    }


    switch(type){
      case "resource":
        let data = await this.API.getResourceData(model.url);
        current = {
          model: model,
          data: data
        };
        break;
      case "checkpoint":
        current = {
          model: model,
          collection: model.resources
        };
        break;
      case "waypoint":
        current = {
          model: model,
          collection: model.checkpoints
        };
        break;
      case "waypoints":
        current = { collection: model };
        break;
    }

    return current;
  }

  checkDone({waypoint, checkpoint, resource}){
    if(!waypoint){
      waypoint = { id: current.model.id };
    }
    this.API.updateProp({waypoint, checkpoint, resource});
    return true;
  }

  updateCriteria(selection){
    this.API.updateCriteria(selection);
  }

  setHighlight({waypoint, checkpoint, resource}, status, context){

    if(!resource){
      if(context === "card"){
        current.collection[waypoint.id - 1].checkpoints[checkpoint.id - 1].highlight = status;
      } else {
        current.collection[checkpoint.id - 1].highlight = status;
      }
    } else {
      if(context === "card"){
        current.collection[checkpoint.id - 1].resources[resource.id - 1].highlight = status;
      } else {
        current.collection[resource.id - 1].highlight = status;
      }
    }
  }

  update(/* propData */){
    // console.log(propData);
  }
}

export default ViewModel;
