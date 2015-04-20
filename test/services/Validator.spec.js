import Validator from '../../src/services/Validator.js';

describe("Validator", () => {
  let judgement;

  describe("all data is correct and provided", () => {

    beforeEach(() => {
      let required = true;
      let schema = {
        id: { required },
        title: { required }
      };

      let instance = {
        id: 'hello',
        title: 'World'
      };

      let validator = new Validator(schema);
      judgement = validator.validate(instance);
    });

    it("is valid", () => {
      expect(judgement.valid).to.be.true;
    });

    it("has no errors", () => {
      expect(judgement.errors.length).to.equal(0);
    });
  });

  describe("no data is correct and provided", () => {
    beforeEach(() => {
      let required = true;
      let schema = {
        id: { required },
        title: { required }
      };

      let instance = {};

      let validator = new Validator(schema);
      judgement = validator.validate(instance);
    });


    it("is valid", () => {
      expect(judgement.valid).to.be.false;
    });

    it("has no errors", () => {
      expect(judgement.errors.length).to.equal(2);
    });
  });


  describe("a field that...", () => {
    describe("is omitted", () => {
      it("is invalid", () => {
        let schema = { 'field': { required: true }};
        let error = new Validator(schema)._validate({ field: undefined }, 'field');
        expect(error).to.contain('not set');
      });
    });

    describe("does not have enough characters ", () => {
      it("is invalid", () => {
        let schema = { 'field': { minLength: 4 }};
        let error = new Validator(schema)._validate({ field: 'joe' }, 'field');
        expect(error).to.contain('field has too few characters');
      });
    });

    describe("has too many characters", () => {
      it("is invalid", () => {
        let schema = { 'field': { maxLength: 4 }};
        let error = new Validator(schema)._validate({ field: 'jonas' }, 'field');
        expect(error).to.contain('field has too many characters');
      });
    });

    describe("does not have enough words ", () => {
      it("is invalid", () => {
        let schema = { 'field': { minWordLength: 2 }};
        let error = new Validator(schema)._validate({ field: 'hi' }, 'field');
        expect(error).to.contain('field has too few words');
      });
    });

    describe("has too many words ", () => {
      it("is invalid", () => {
        let schema = { 'field': { maxWordLength: 2 }};
        let error = new Validator(schema)._validate({ field: 'hi hi hi' }, 'field');
        expect(error).to.contain('field has too many words');
      });
    });
  });
});
