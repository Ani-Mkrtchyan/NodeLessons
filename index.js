// console.log(process);
 const argv = require('minimist')(process.argv.slice(2));
 console.log(argv);

 const users = [];
 const msgs = [];
 
 const EventEmitter = require('events');
 
 const logger = new EventEmitter();
 
 logger.on('message', msg => {
 console.log(msg);
 msgs.push(msg);
 });

 logger.on('addUser', user => {
   console.log(user);
   users.push(user);
 });
 
 
 logger.on('getUsers', () => {
   console.log(users.join('\n'));
 });
 ​
 logger.on('getMessage', () => {
   console.log(messages.join('\n'));
 });
 ​
 
   logger.emit('message', argv.message);
   logger.emit('addUser', argv.addUser);
   logger.emit('getUsers');
   logger.emit('getMessage');
 












