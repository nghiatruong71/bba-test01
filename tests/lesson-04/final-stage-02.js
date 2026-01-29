function findPairsDivisibleBy17() {
  let count = 0;
  const sums = [];
  for (let s = 17; s <= 200; s += 17) sums.push(s);

  for (const S of sums) {
    for (let a = 1; a < S; a++) {
      const b = S - a;
      if (a < b && b <= 100) {
        console.log(`(${a}, ${b}) = ${S}`);
        count++;
      }
    }
  }
  console.log(`\nTổng cộng: ${count} cặp`);
}
findPairsDivisibleBy17();
