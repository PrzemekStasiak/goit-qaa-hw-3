const fruits = ["Jabłko", "Banan", "Pomarańcza", "Winogrona", "Arbuz"];
console.log(fruits)

const numbers = [2, 4, 7, 12, 54, 2, 4, 7, 0, 99]
for (let i =0; i<numbers.length; i++){
    if (numbers[i] > 5);
    console.log(numbers[i]);
} 
// other way to do the same
for (const number of numbers){
    if (number> 5);
    console.log(number);
}