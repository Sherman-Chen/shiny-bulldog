const expect = require('chai').expect;
const chalk = require('chalk');

const locate = require('../commands').locate;
const find_before = require('../commands').find_before;
const find_after = require('../commands').find_after;
const find_companies_between_size = require('../commands').find_companies_between_size;
const find_type = require('../commands').find_type;

// locate
describe('locate', () => {
  it('should exist', () => {
    expect(locate).to.exist;
  });

  it('should be a function', () => {
    expect(locate).to.be.a.function;
  });

  it('should return the correct amount of results for CA', () => {
    let result = locate('data.json', 'CA');
    result.then(res => {
      expect(res).to.equal(74);
    });
  });

  it('should return the correct amount of results for MD', () => {
    let result = locate('data.json', 'CA');
    result.then(res => {
      expect(res).to.equal(8);
    });
  });

  it('should return the correct amount of results for failed query', () => {
    let result = locate('data.json', 'CA');
    result.then(res => {
      expect(res).to.equal(0);
    });
  });
});

// find_before
describe('find_before', () => {
  it('should exist', () => {
    expect(find_before).to.exist;
  });

  it('should be a function', () => {
    expect(find_before).to.be.a.function;
  });

  it('should return the correct amount of results for 2001', () => {
    let result = find_before('data.json', '2001');
    result.then(res => {
      expect(res).to.equal(128);
    });
  });

  it('should return the correct amount of results for 1972', () => {
    let result = find_before('data.json', '1972');
    result.then(res => {
      expect(res).to.equal(56);
    });
  });

  it('should return the correct amount of results for a nonsensical query', () => {
    let result = find_before('data.json', '1');
    result.then(res => {
      expect(res).to.equal(0);
    });
  });
});

// find_after
describe('find_after', () => {
  it('should exist', () => {
    expect(find_after).to.exist;
  });

  it('should be a function', () => {
    expect(find_after).to.be.a.function;
  });

  it('should return the correct amount of results for 2001', () => {
    let result = find_after('data.json', '2001');
    result.then(res => {
      expect(res).to.equal(193);
    }).catch();
  });

  it('should return the correct amount of results for 1972', () => {
    let result = find_after('data.json', '1972');
    result.then(res => {
      expect(res).to.equal(259);
    }).catch();
  });

  it('should return the correct amount of results for a nonsensical query', () => {
    let result = find_after('data.json', '2020');
    result.then(res => {
      expect(res).to.equal(0);
    }).catch();
  });
});

// find_companies_between_size
describe('find_companies_between_size', () => {
  it('should exist', () => {
    expect(find_companies_between_size).to.exist;
  });

  it('should be a function', () => {
    expect(find_companies_between_size).to.be.a.function;
  });

  it('should return the correct amount of results for "1-10"', () => {
    let result = find_companies_between_size('data.json', '1-10');
    result.then(res => {
      expect(res).to.equal(79);
    });
  });

  it('should return the correct amount of results for "10,001+"', () => {
    let result = find_companies_between_size('data.json', '10,001+');
    result.then(res => {
      expect(res).to.equal(37);
    });
  });

  it('should return the correct amount of results for a nonsensical query', () => {
    let result = find_companies_between_size('data.json', 'eighty');
    result.then(res => {
      expect(res).to.be.false;
    });
  });
});

// find_type

describe('locate', () => {
  it('should exist', () => {
    expect(locate).to.exist;
  });

  it('should be a function', () => {
    expect(locate).to.be.a.function;
  });

  it('should return the correct amount of results for "Business & Legal Services', () => {
    let result = locate('data.json', 'Business & Legal Services');
    result.then(res => {
      expect(res).to.equal(30);
    });
  });

  it('should return the correct amount of results for "Finance & Investment"', () => {
    let result = locate('data.json', 'Finance & Investment');
    result.then(res => {
      expect(res).to.equal(52);
    });
  });

  it('should return the correct amount of results for failed query', () => {
    let result = locate('data.json', 'taco cat activities');
    result.then(res => {
      expect(res).to.equal(0);
    });
  });
});
