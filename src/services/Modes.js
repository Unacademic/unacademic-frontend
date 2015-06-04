class Modes {

  set(mode){
    let modes = {
      learn: "",
      curate: ""
    };
    modes[mode] = "active";
    modes.current = mode;
    return modes;
  }

  toggle(mode){
    let modes = {
      learn: "",
      curate: ""
    };
    let newMode = mode === "learn" ? "curate" : "learn";
    modes[newMode] = "active";
    modes.current = newMode;
    return modes;
  }
}

export default Modes;
