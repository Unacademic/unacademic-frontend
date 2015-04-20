import Waypoint from '../../src/models/Waypoint.js';

describe("Waypoint Model", () => {
  let waypoint;

  describe("all data is correct and provided", () => {

    beforeEach(() => {
      let data = {
        id: 1,
        curator: 'yeehaa',
        summary: 'awesome resource',
        description: 'really awesome resource',
        checkpoints: [1, 2]
      };

      waypoint = new Waypoint(data);
    });

    it("has a schema", () => {
      expect(waypoint.schema).to.be.defined;
    });

    it("is not valid", () => {
      expect(waypoint.valid).to.be.false;
      expect(waypoint.errors.length).to.equal(1);
      expect(waypoint.errors[0]).to.contain('title is not set');
    });
  });
});
