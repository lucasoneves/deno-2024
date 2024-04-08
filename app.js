const fs = require('fs').promises;

const text = 'Lorem ipsum dolor sit amet, consectetur adip';

fs.writeFile('node-message.txt', text).then(() => {
  console.log('wrote file')
})
