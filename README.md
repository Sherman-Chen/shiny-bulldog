# thoughts/instructions
npm install
to run program, from cmd line: node main.js [target] [command] [commandQuery]
i.e. node main.js data.json locate ca

I chose to use node.js because I am familiar with it (I wanted to check out the latest features, async/await), and including how to process input/output for a command line tool.

The project was structued into 3 files, a main file which is the driver function, a commands file which houses the various commands, and a utils file which includes some utility functions. 

The primary design decision I was concerned with was how to output the data in a human-friendly way, including errors/failed lookups. To address this I utilized the npm package 'chalk' to bring more color to the output for readability. The primary constraint was my unfamiliarity with testing for command line tools, there honestly may be some bugs that I missed due to this.

update: after some thoughts I realized it would have been better to return the results from the command functions and then manage the output in the main.js driver function. This would have allowed for easier testing.

# Tests
in cmd line: npm t, npm test, or npm run test

note the console will be flooded due to the nature of the program, outputing logs everytime a command function is run.

# Requirements
node 7.10.0

# Quick demo
![](https://github.com/Sherman-Chen/shiny-bulldog/blob/master/assets/giphy.gif)
