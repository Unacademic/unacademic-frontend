import Checkpoint from '../../src/models/Checkpoint.js';
import data from '../../src/waypoints/store_data.yml';

describe("Checkpoint Model", () => {
  let checkpoint;

  beforeEach(() => {
    let item = data.checkpoints[0];
    item.title = undefined;
    checkpoint = new Checkpoint(item, 1);
  });

  it("has a schema", () => {
    expect(checkpoint.schema).to.be.defined;
  });

  it("is not valid", () => {
    expect(checkpoint.valid).to.be.false;
    expect(checkpoint.errors.length).to.equal(1);
    expect(checkpoint.errors[0]).to.contain('title is not set');
  });

  it("is has all, correct checkpoints", () => {
    let resources = checkpoint.resources;
    expect(resources.length).to.equal(3);
    expect(resources[0].constructor.name).to.equal('Resource')
  });
});
