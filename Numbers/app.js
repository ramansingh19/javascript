let number = 90;
console.log(number);

let num = new Number(500);
console.log(num);

console.log(num.toString());
console.log(num.toFixed(2));

let count = 123.899;
console.log(count);
console.log(count.toPrecision(3));

let numbers = 100000000;
console.log(numbers.toLocaleString('ko-KR'));
console.log(numbers.toLocaleString("ko-KR", { timeZone: "UTC" }));

const event = new Date(Date.UTC(2003, 10, 19, 9, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString("en-GB", { timeZone: "UTC" }));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString("ko-KR", { timeZone: "UTC" }));
// Expected output: "2012. 12. 20. 오전 3:00:00"


// -----------------------------MAths------------------------------------------------

console.log(Math.random()* 20) + 1 ;
console.log(Math.ceil(Math.random()* 20) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
