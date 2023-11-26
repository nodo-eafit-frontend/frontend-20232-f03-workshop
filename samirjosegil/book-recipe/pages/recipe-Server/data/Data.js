const fs = require('fs');

// Función para generar un número aleatorio entre min y max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

function generateDailySales() {
  return daysInMonth.map(() => getRandomNumber(10, 100));
}

function generateMonthlySales() {
  return months.map((month, index) => ({
    mes: month,
    ventas_diarias: generateDailySales()
  }));
}

function generateYearlySales(year) {
  return {
    year: year,
    meses: generateMonthlySales()
  };
}

function generateSalesData(startYear, endYear) {
  const salesData = [];

  for (let year = startYear; year <= endYear; year++) {
    salesData.push(generateYearlySales(year));
  }

  return salesData;
}

const salesData = generateSalesData(2022, 2025);

const jsonData = JSON.stringify(salesData, null, 2);

fs.writeFileSync('datos_ventas.json', jsonData);

console.log('Datos de ventas generados y guardados en datos_ventas.json');
