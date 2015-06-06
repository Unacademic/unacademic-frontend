/*eslint no-unused-vars:0 */
let _callbacks = [];
let _promises = [];

class Dispatcher {
  register(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1; // index
  }

  dispatch(payload) {
    let resolves = [];
    let rejects = [];

    _promises = _callbacks.map((_, i) => {
      return new Promise(function(resolve, reject) {
        resolves[i] = resolve;
        rejects[i] = reject;
      });
    });

    _callbacks.forEach((callback, i) => {
      Promise.resolve(callback(payload)).then(() => {
        resolves[i](payload);
      }, () => {
        rejects[i](new Error("Dispatcher callback unsuccessful"));
      });
    });
    _promises = [];
  }

}

export default Dispatcher;
