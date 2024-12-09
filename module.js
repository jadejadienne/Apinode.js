module.exports ={
    greet: function(name){
        console.log('Hello, ${name}!');
    }
}

const myModule = require('./module');
myModule.greet('Node.js');