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

module.exports = { json_reader };
