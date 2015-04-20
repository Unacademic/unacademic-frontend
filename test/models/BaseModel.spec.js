import BaseModel from '../../src/models/BaseModel.js';

let required = true;
let schema = { id: { required }, title: { required }};

class Model extends BaseModel {
  get schema(){
    return schema;
  }
}

describe("BaseModel Model", () => {
  let model;

  describe("all data is correct and provided", () => {

    beforeEach(() => {
      let data = {
        id: 1,
        title: 'Hello World',
      };

      model = new Model(data);
    });

    it("is valid", () => {
      expect(model.valid).to.be.true;
    });

    it("has no errors", () => {
      expect(model.errors.length).to.equal(0);
    });
  });

  describe("no data is correct and provided", () => {
     beforeEach(() => {
      let data = {};
      model = new Model(data);
    });

    it("is valid", () => {
      expect(model.valid).to.be.false;
    });

    it("has no errors", () => {
      expect(model.errors.length).to.equal(2);
    });
  });
});
