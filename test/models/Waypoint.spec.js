import Waypoint from '../../src/models/Waypoint.js';

describe.only("Waypoint Model", () => {
  let waypoint;

  describe("all data is correct and provided", () => {
     beforeEach(() => {
      let data = {
        id: 1,
        title: 'Hello World',
        curator: 'Yeehaa',
        summary: 'Awesome Resource',
        description: 'Really Awesome Resource',
        checkpoints: ['1', '2']
      };
      waypoint = new Waypoint(data);
    });

    it("is valid", () => {
      expect(waypoint.valid).to.be.true;
    });
    
    it("has no errors", () => {
      expect(waypoint.errors.length).to.equal(0);
    });
  });

  describe("no data is correct and provided", () => {
     beforeEach(() => {
      let data = {};
      waypoint = new Waypoint(data);
    });

    it("is valid", () => {
      expect(waypoint.valid).to.be.false;
    });
    
    it("has no errors", () => {
      expect(waypoint.errors.length).to.equal(6);
    });
  });


  describe("an id that is ", () => {
    describe("omitted", () => {
      it("is invalid", () => {
        let error = new Waypoint({ id: undefined }).validateId();
        expect(error).to.contain('not set');
      });
    });
  });

  describe("a title that is...", () => {

    describe("omitted", () => {
      it("is invalid", () => {
        let error = new Waypoint({ title: undefined }).validateTitle();
        expect(error).to.contain('not set');
      });
    });

    describe("less than two words", () => {
      it("is invalid", () => {
        let error = new Waypoint({ title: 'hello' }).validateTitle();
        expect(error).to.contain('too short');
      });
    });

    describe("less than eight words", () => {
      it("is invalid", () => {
        let title = 'hi hi hi hi hi hi hi hi hi';
        let error = new Waypoint({ title }).validateTitle();
        expect(error).to.contain('too long');
      });
    });
  });

  describe("a curator id that is...", () => {
    describe("less than four characters", () => {
      it("is invalid", () => {
        let error = new Waypoint({ curator: 'joe' }).validateCurator();
        expect(error).to.contain('too short');
      });
    });
  });

  describe("a summary that is...", () => {
    describe("omitted", () => {
      it("is invalid", () => {
        let error = new Waypoint({ summary: undefined }).validateSummary();
        expect(error).to.contain('not set');
      });
    });
  });

  describe("a description that is...", () => {
    describe("omitted", () => {
      it("is invalid", () => {
        let error = new Waypoint({ description: undefined }).validateDescription();
        expect(error).to.contain('not set');
      });
    });
  });

  describe("checkpoints that are...", () => {
    describe("omitted", () => {
      it("is invalid", () => {
        let error = new Waypoint({ errors: undefined }).validateCheckpoints();
        expect(error).to.contain('not set');
      });
    });
  });
});
