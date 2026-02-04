let money = [100,200,300,400];
console.log("Duyệt bằng for...of:");
for (let value of money) {
    console.log(value);
}

console.log("Duyệt bằng for...in:");
for (let index in money) {
    console.log(index);
}

let sum = 0;

for (let i = 0; i < money.length; i++) {
    if (i % 2 === 0) {
        sum += money[i];
    }
}

console.log("Tổng vị trí chẵn:", sum);
