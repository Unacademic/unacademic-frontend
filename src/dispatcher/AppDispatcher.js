import Dispatcher from "./Dispatcher";

class AppDispatcher extends Dispatcher {

  handleViewAction(action) {
    this.dispatch({
      source: "VIEW_ACTION",
      action: action
    });
  }

}

export default new AppDispatcher();
