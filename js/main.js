
function getRandomFloorInt(val1, val2, lenght) {
  let max = (val2 >= val1) ? val2 : val1;
  let min = (val2 >= val1) ? val1 : val2;

  min = Math.ceil(min * 10 ** lenght);
  max = Math.floor(max * 10 ** lenght);
  return (Math.floor(Math.random() * (max - min + 1)) + min) / 10 ** lenght;
}

console.log(getRandomFloorInt(1.1, 2.1, 10));
