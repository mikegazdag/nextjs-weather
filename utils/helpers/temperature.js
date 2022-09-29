export const convertToCelsius = (value = 0) => {
  const number = parseFloat(value);
  return parseInt(number - 273.15).toFixed(0);
};
