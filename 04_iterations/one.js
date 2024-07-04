for (let i = 2; i <= 10; i++) {
  console.log(`Table of '${i}'`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}*${j} = ${i * j}`);
  }
}

// for of

name = "Sabit khan";
for (const value of name) {
  if (value == " ") {
    continue;
  }
  console.log(value);
}
