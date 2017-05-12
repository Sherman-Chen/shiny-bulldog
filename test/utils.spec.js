const expect = require('chai').expect;
const readFilePromise = require('../utils').readFilePromise;
const noResults = require('../utils').noResults;
const data = require('../data.json');

describe('utils.noResults Test Suite:', () => {
  const query1 = noResults('taco');
  const query2 = noResults('node mon is cool');
  
  it('should fill in the template correctly', () => {
    expect(query1).to.equal('No results found for query taco, please try again.');
    expect(query2).to.equal('No results found for query node mon is cool, please try again.');
  });

  it('should fill in the template correctly in length as well', () => {
    expect(query2.length).to.equal(62);
    expect(query1.length).to.equal(50);
  })

});

describe('utils.readFilePromise', () => {
  it('should read the correct file', () => {
    readFilePromise('data.json')
      .then(res => {
        expect(res === data);
      })
      .catch();
  });

  it('should throw error when reading incorrect file', () => {
    readFilePromise('doesNotExist.json')
      .then()
      .catch(e => {
        expect(e).to.be.instanceof(Error);
      })
  })
});