const chalk = require('chalk');
const readFilePromise = require('./utils').readFilePromise;
const noResults = require('./utils').noResults;

// think of async/await as akin/similar to python generators
const locate = async (fileToRead, query) => {
  try {
    const data = await readFilePromise(fileToRead);
    const dataJSON = JSON.parse(data);
    const results = [];

    for (let i = 0; i < dataJSON.length; i++) {
      const {state, company_name} = dataJSON[i];
      
      if (state === query.toUpperCase()) {
        results.push(company_name);
      }
    }

    if (results.length === 0) {
      noResults(query);
      return 0;
    }

    console.log('')
    console.log(chalk.blue(`Companies operating in ${query.toUpperCase()}`));  
    console.log('-----------------------------------------------');
    results.forEach(result => console.log(result + ','));
    console.log('-----------------------------------------------');
    console.log(chalk.green(`Number of Companies: ${results.length}`));
    console.log('')
    return results.length;
  } catch (err) {
    console.error(chalk.red(err));
    process.exit(1);
  } finally {
    // process.exit(0); //disabled for testing
  }
};

const find_before = async (fileToRead, query) => {
  try {
    const data = await readFilePromise(fileToRead);
    const dataJSON = JSON.parse(data);
    const results = [];

    for (let i = 0; i < dataJSON.length; i++) {
      const {company_name, year_founded} = dataJSON[i];
      
      if (year_founded <= query && year_founded !== '') {
        results.push([company_name, year_founded]);
      }
    }

    if (results.length === 0) {
      noResults(query);
      process.exit(0)
    }

    console.log('-----------------------------------------------');
    console.log(chalk.blue(`List of Companies founded before or in ${query}`));  
    console.log('-----------------------------------------------');
    results.forEach(result => console.log(`${result[0]} - ${result[1]},`));
    console.log('-----------------------------------------------');
    console.log(chalk.green(`Number of Companies: ${results.length}`));
    console.log('-----------------------------------------------');
    return results.length; 
  } catch (err) {
    console.error(chalk.red(err));
    process.exit(1);
  } finally {
    // process.exit(0); // disabled for testing
  }

};

const find_after = async (fileToRead, query) => {
  try {
    const data = await readFilePromise(fileToRead);
    const dataJSON = JSON.parse(data);
    const results = [];

    for (let i = 0; i < dataJSON.length; i++) {
      const {company_name, year_founded} = dataJSON[i];
      
      if (year_founded >= query && query !== '') {
        results.push([company_name, year_founded]);
      }
    }

    if (results.length === 0) {
      noResults(query);
      process.exit(0)
    }

    console.log('-----------------------------------------------');
    console.log(chalk.blue(`List of Companies founded after or in ${query}`));  
    console.log('-----------------------------------------------');
    results.forEach(result => console.log(`${result[0]} - ${result[1]},`));
    console.log('-----------------------------------------------');
    console.log(chalk.green(`Number of Companies: ${results.length}`));
    console.log('-----------------------------------------------');
    return results.length; 
  } catch (err) {
    console.error(chalk.red(err));
    process.exit(1);
  } finally {
    // process.exit(0); //disabled for testing
  }

};

const find_companies_between_size = async (fileToRead, query) => {
  const OPTIONS = ['1-10', '11-50', '51-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,001+'];

  if (OPTIONS.indexOf(query) === -1) {
    console.error(`Invalid query ${query}. Valid Options include: '1-10', '11-50', '51-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', or '10,001+' ${chalk.yellow.underline(('Note invalid trailing comma marking [,] in 1,000s can result in errors'))}`);
    return false;
  }

  try {
    const data = await readFilePromise(fileToRead);
    const dataJSON = JSON.parse(data);
    const results = [];

    for (let i = 0; i < dataJSON.length; i++) {
      const {company_name, full_time_employees} = dataJSON[i];
      
      if (full_time_employees === query) {
        results.push([company_name, full_time_employees]);
      }
    }

    if (results.length === 0) {
      noResults(query);
      process.exit(0)
    }

    console.log('-----------------------------------------------');
    console.log(chalk.blue(`List of Companies between size ${query}`));  
    console.log('-----------------------------------------------');
    results.forEach(result => console.log(`${result[0]} - ${result[1]},`));
    console.log('-----------------------------------------------');
    console.log(chalk.green(`Number of Companies: ${results.length}`));
    console.log('-----------------------------------------------');
    return results.length; 
  } catch (err) {
    console.error(chalk.red(err));
    process.exit(1);
  } finally {
    // process.exit(0); //disabled for testing
  }
};

const find_type = async (fileToRead, query) => {
  if (process.argv.length > 5) {
    console.error(chalk.red.underline('Please rewrite query including quotation marks, i.e. "Research & Consulting"'));
    process.exit(1);
  }

  try {
    const data = await readFilePromise(fileToRead);
    const dataJSON = JSON.parse(data);
    const results = [];

    for (let i = 0; i < dataJSON.length; i++) {
      const {company_category, company_name} = dataJSON[i];
      
      if (company_category.toUpperCase() === query.toUpperCase()) {
        results.push(company_name);
      }
    }

    if (results.length === 0) {
      noResults(query);
      process.exit(0)
    }
    
    console.log('')
    console.log(chalk.blue(`Companies of type ${query}`));  
    console.log('-----------------------------------------------');
    results.forEach(result => console.log(result + ','));
    console.log('-----------------------------------------------');
    console.log(chalk.green(`Number of Companies: ${results.length}`));
    console.log('') 
    return results.length; 
  } catch (err) {
    console.error(chalk.red(err));
    process.exit(1);
  } finally {
    // process.exit(0); // disabled for testing
  }
};

module.exports = {
  locate,
  find_before,
  find_after,
  find_companies_between_size,
  find_type
};