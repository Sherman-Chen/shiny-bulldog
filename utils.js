const fs = require('fs');
const chalk = require('chalk');

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, {encoding: 'utf8'}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
}; // promisify readFile for use with async/await for easier reading, alternatively could use readFileSync

const noResults = query => {
  let template = `No results found for query ${query}, please try again.`;
  console.log(chalk.yellow(template));

  return template;
};

module.exports = {
  readFilePromise,
  noResults
}