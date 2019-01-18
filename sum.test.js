const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', function() {
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ 7 ', function(){
  expect(sum(2,5)).toBe(7);
})

// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy

// 5+7 = 12
test('5 + 7 เท่ากับ 12 ' , function(){
  expect(sum(5,7)).toBe(12);
})

// 100+200 = 300
test('100 + 200 เท่ากับ 300' , function() {
  expect(sum(100,200)).toBe(300);
})

// 5+5 = 10
test('5 + 5 เท่ากับ 10' , function(){
  expect(sum(5,5)).toBe(10);
})