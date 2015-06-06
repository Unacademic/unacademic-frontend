/*eslint new-cap:0 */

import { Map } from "immutable";
import APIService from "../services/API.js";

// let baseUrl = 'http://188.166.97.196/api/0';
let baseUrl = "https://unacademic-api.firebaseio.com";
let API = new APIService(baseUrl);

let levels = Map({
  current: "introduction",
  waypoints: "all",
  waypoint: false,
  checkpoint: false,
  resource: false
});

let modes = Map({
  current: "learn",
  learn: "active",
  curate: ""
});

let initialState = Map({
  timestamp: Date.now(),
  user: undefined,
  modes,
  levels
});

import TimeMachineService from "../services/TimeMachine.js";
import ViewModelService from "../services/ViewModel.js";
import LevelsService from "../services/Levels.js";
import ModesService from "../services/Modes.js";
import AppStore from "./AppState.js";

let TimeMachine = new TimeMachineService(initialState);
let ViewModel = new ViewModelService(API);
let Levels = new LevelsService();
let Modes = new ModesService();

export default new AppStore(TimeMachine, ViewModel, Levels, Modes);
