// Global variables
var COSTOS = {
    BAJO: 'baratísimo',
    MEDIO: 'normal',
    ALTO: 'carísimo',
  };
  var NIVEL = {
    BAJO: 'facilito',
    MEDIO: 'moderadito',
    ALTO: 'altico',
  };
  
  // Mi receta
  var titulo = 'Mermelada de tomate';
  
  var cantidadPersonas = {
    min: 6,
    max: 12,
  };
  
  var duracion = 60; // 60 seconds
  var costo = COSTOS.BAJO;
  var nivel = NIVEL.MEDIO;
  
  var ingredientes = ['1Kg tomates maduros', '300g de azúcar', '1 limón (jugo y ralladura)', '1 pizca de sal'];
  var pasoPaso = {
    paso1: 'Ponemos a cocer la casuela con abundante agua.',
    paso2: 'Escaldamos los tomates en agua hirviendo durante unos minutos.',
    paso3: 'Pelamos y troceamos los tomates después de escaldarlos.',
    paso4: 'En una olla grande, cocinamos los tomates troceados con azúcar y jugo de limón a fuego lento.',
    paso5: 'Removemos ocasionalmente hasta que la mezcla espese y adquiera la textura deseada.',
    paso6: 'Vertemos la mermelada caliente en frascos esterilizados y los sellamos herméticamente.',
    recomendacion1: 'Utiliza tomates maduros y de buena calidad para obtener el mejor sabor.',
    recomendacion2:
      'Lava y esteriliza adecuadamente los frascos antes de verter la mermelada para garantizar su conservación.',
  };