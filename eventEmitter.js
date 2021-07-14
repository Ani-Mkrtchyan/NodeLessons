const users = [];
const msgs = [];

const EventEmitter = require('events');
const logger = new EventEmitter();

logger.on('message', (msg) => {
console.log(msg);
console.log(`New message ${msg}`);
msgs.push(`${msg}`);
});

logger.on('login',(name) => {
console.log( `New user ${name}`);
users.push(`${name}`);
});


logger.on('getUsers', () => {
  for(let user of users){
console.log(`Logged user  ${ '\n'+user}`);
  }
});
logger.on('getMessage', () => {
  console.log(...msgs);
});





logger.emit('message', "Hello World!");
logger.emit('message','Hello Node');
logger.emit('login', "a");
logger.emit('login', "b");
logger.emit('getUsers');
logger.emit('getMessage');
