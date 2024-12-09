
//import chalk from "chalk";

//console.log(chalk.green('Hello,node.js!'));

const fs = require('fs');

//fs.readFile('example.txt', 'utf8', (err, data) => {
   // if(err) throw err;
  //  console.log(data);
//});


fs.appendFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('Fille has bee written!');
});