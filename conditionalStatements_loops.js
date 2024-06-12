 function temperature_check(temperature){
 
if (temperature < 0) 
  console.log("It's freezing!"); 
  else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25)  {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}
}
//test
temperature_check(-1)
temperature_check(10)
temperature_check(19)
temperature_check(45)


function determineTemperature(temperature) {
switch (true) 

{case (temperature < 0):
    console.log("It's freezing!");
    break;
  case(temperature >= 0 && temperature <= 15):
    console.log("It's cold.");
    break;
  case (temperature >= 16 && temperature <= 25):
    console.log("It's mild.");
    break;
  case (temperature >25):
    console.log("It's warm.");}
} 
    //test
    temperature_check(-1)
    temperature_check(10)
    temperature_check(19)
    temperature_check(45)







function divisibility_check(number) {
if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both 2 and 3.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}
}
//test
divisibility_check(9)
divisibility_check(10)
divisibility_check(4)
divisibility_check(3)
divisibility_check(20)


function determineTemperature(number) {
switch (true) {
    case (temperature < 0):
    console.log("Divisible by both 2 and 3.");
    break;
  case(number % 2 === 0):
    console.log("Divisible by 2.");
    break;
  case(number % 3 === 0):
    console.log("Divisible by 3.");
    break;
  default:
    console.log("It's warm.");
}
}



// Example usage
let number = parseInt(prompt("PUT A NUMBER FOR THIS PATH"));
divisibility_check(22);



for (let i = 1; i <= 10; i++) {
console.log(i);
}

for (let i = 2; i <= 20; i += 2) {  
}

let total = 0;
for (let i = 1; i <= 100; i++) {
total += i;
}
console.log("The sum is:", total);
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
console.log(number);
}
