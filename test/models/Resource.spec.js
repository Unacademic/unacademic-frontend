import Resource from '../../src/models/Resource.js';
import data from '../../src/waypoints/store_data.yml';

describe("Resource Model", () => {
  let resource;

  beforeEach(() => {
    let item = data.checkpoints[0].resources[0];
    item.title = undefined;
    resource = new Resource(item, 1);
  });

  it("has a schema", () => {
    expect(resource.schema).to.be.defined;
  });

  it.skip("is not valid", () => {
    expect(resource.valid).to.be.false;
    expect(resource.errors.length).to.equal(1);
    expect(resource.errors[0]).to.contain('title is not set');
  });
});
