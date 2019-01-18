const minus = require("./minus");

// 5-2 = 3
test("5 - 2 เท่ากับ 3", () => {
  expect(minus(5, 2)).toBe(3);
});

// 10 - 5 = 5
test("10 - 5 เท่ากับ 5", () => {
  expect(minus(10, 5)).toBe(5);
});

// 100 - 50 = 50
test("100 - 50 เท่ากับ 50", () => {
  expect(minus(100, 50)).toBe(50);
});

// 500 - 200 = 300
test("500 - 200 เท่ากับ 300", () => {
  expect(minus(500, 200)).toBe(300);
});

// 300 - 150 = 150
test("300 - 150 เท่ากับ 150", () => {
  expect(minus(300, 150)).toBe(150);
});
