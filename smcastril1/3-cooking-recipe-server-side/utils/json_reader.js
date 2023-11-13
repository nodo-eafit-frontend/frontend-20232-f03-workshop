const fs = require('fs');

function json_reader(filepath, callback) {

  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }

    try {
      const jsonData = JSON.parse(data); // Lo convierte a un objeto  
      callback(null, jsonData);
    } catch (parseError) {
      callback(parseError, null);
    }
  });
}

module.exports = json_reader();s
