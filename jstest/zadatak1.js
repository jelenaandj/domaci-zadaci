let n = 4;
let k = 5;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
for (let i = 0; i < n; i++) {
    sum1 += i + n;
    sum2 += k + i;
    sum3 += sum1 / sum2;

}
console.log(sum3);