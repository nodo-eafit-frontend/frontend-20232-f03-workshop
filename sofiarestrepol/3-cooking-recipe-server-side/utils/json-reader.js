const fs = require("fs");

function jsonReader(filePath, callback) { //recibe la direccion del archivo y la accion para leerlo
  fs.readFile(filePath, (err, fileData) => { //desde err hasta abajo es el callback. es lo que se ejecuta cuando encuentra el archivo
    if (err) { //err es el error en caso de que no lo pueda leer, o haya algun problema
      return callback && callback(err); //si callback existe, entonces ejecuta el callback con el error
    } //basically es para frenar la funcion - si hay error, no avances  

    //fileData es la info dentro del archivo, cuando si se puede leer 
    try { //try es el bloque de logica, intenta hacer x cosa 
      const object = JSON.parse(fileData); //convierte la data raw (fileData) en un objeto
      return callback && callback(null, object); //si callback existe, ejecuta la funcion donde el 1er param es el error y el segundo el objeto ???
    } catch (err) { //catch sirve para atrapar el error y no matar el programa. si se encuentra algo en el camino, se atrapa y se resuelve
      return callback && callback(err);
    }
  });
}

module.exports = jsonReader;