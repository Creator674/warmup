module.exports = function warmup(temperature) {
  // your implementation here
  temperature = temperature * 9/5 + 32;
  console.log(temperature);
  return temperature;
};
