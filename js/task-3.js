function getElementWidth(content, padding, border) {
  //   const a = x.slice(0, -2);
  //   const b = y.slice(0, -2) * 2;
  //   const c = z.slice(0, -2) * 2;
  //   console.log(Number(a) + Number(b) + Number(c));
  const result =
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2;
  return result;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
