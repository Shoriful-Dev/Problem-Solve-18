// Write a Funtion randomHexColor that generates a random hexadecimal color code .

const randomHexColor = () => {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
}

console.log(randomHexColor());
