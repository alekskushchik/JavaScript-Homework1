// Task 1
var secondsInAMinute = 60;
var minutesInAnHour = 60;
var hours = 3;
var secondsInHours = secondsInAMinute * minutesInAnHour * hours;

console.log('There are ' + secondsInHours + ' seconds in ' + hours + ' hours.');

// Task 2
var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);

// Task 3

var a = 10, b = 2, c = 5;
var sum;
function calcSum() {
  sum = a + b + c;
  return sum;
};
alert ('Сумма чисел равна ' + calcSum(a, b, c));

// Task 4
var a = 17, b = 10;
var c = a - b;
var d = 7;
var result = c + d;

console.log('Result of c + d is equal ' + result);

// Task 5
var name = 'Александр';

alert('Привет, ' + name + '!');