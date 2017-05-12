const locate = require('./commands').locate;
const find_before = require('./commands').find_before;
const find_after = require('./commands').find_after;
const find_companies_between_size = require('./commands').find_companies_between_size;
const find_type = require('./commands').find_type;

const args = Array.prototype.slice.call(process.argv, 2); // slice argv for commands
const fileToRead = args[0]; // file to read
const commandOption = args[1]; // input command
const commandOptionQuery = args[2]; // input command query

const main = (file, commandOption, query) => {
  switch(commandOption) {
    case 'locate':
      locate(file, query);
      break;
    case 'find_before':
      find_before(file, query);
      break; 
    case 'find_after':
      find_after(file, query);
      break;
    case 'find_companies_between_size':
      find_companies_between_size(file, query);
      break;
    case 'find_type':
      find_type(file, query);
      break;                           
    default:
      console.log(`Command: ${commandOption} not recongized. Commands are locate, find_before, find_after, find_companies_between_size, and find_type.`);
  }
};

main(fileToRead, commandOption, commandOptionQuery);
