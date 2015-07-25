/*eslint no-console:0 */
/*eslint no-undef:0 */
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

  checkDone(ids, appState){
    const oldLevels = appState.get("levels").toJSON();
    const levelIds = this._setLevelIds(ids, oldLevels);
    this.API.updateProp(levelIds);
    return true;
  }

  _setLevelIds(ids, levels){
    const { parentId, id } = ids;
    let { current: currentLevel, waypoints, waypoint, checkpoint, resource } = levels;
    switch(currentLevel){
      case "waypoints":
        waypoint = parentId;
        checkpoint = id;
       break;
      case "checkpoint":
        checkpoint = parentId;
        resource = id;
       break;
    }
    return { waypoints, waypoint, checkpoint, resource };
  }

  updateCriteria(selection){
    this.API.updateCriteria(selection);
  }

  setHighlight(ids, status, appState){
    const { id, parentId } = ids;
    const currentLevel = appState.get("levels").get("current");
    switch(currentLevel){
      case "waypoints":
        current.collection[parentId - 1].checkpoints[id - 1].highlight = status;
        break;
      case "checkpoints":
        current.collection[parentId - 1].resources[id - 1].highlight = status;
    }
  }

  update(/* propData */){
    // console.log(propData);
  }
}

export default ViewModel;
