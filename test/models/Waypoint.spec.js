import Waypoint from '../../src/models/Waypoint.js';
import data from '../../src/waypoints/store_data.yml';

describe.only("Waypoint Model", () => {
  let waypoint;

  beforeEach(() => {
    data.title = undefined;
    data.id = 1;
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

  it("is has all, correct checkpoints", () => {
    let checkpoints = waypoint.checkpoints;
    expect(checkpoints.length).to.equal(2);
    expect(checkpoints[0].constructor.name).to.equal('Checkpoint')
  });
});
