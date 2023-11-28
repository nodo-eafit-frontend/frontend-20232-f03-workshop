const fs = require("fs");

function json_reader(filepath) {
  try {
    const content = fs.readFileSync(filepath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error al leer el archivo JSON:", error);
    return error;
  }
}

function json_writer(filepath, data) {
  try {
    data = JSON.stringify(data, null, 2);
    const content = fs.writeFileSync(filepath, data, "utf8");
    return data.id;
  } catch (error) {
    console.error("Error al leer el archivo JSON:", error);
    return error;
  }
}

module.exports = { json_reader, json_writer };
