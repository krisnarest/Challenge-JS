// function sumMix(x){
//     let total = 0;
//     for (let i = 0; i < x.length; i++) {
//         total += Number(x[i]);
//     }
// return total;
// }

function sumMix(x) {
    return x.reduce((acc, curr) => acc + +curr, 0)
}

console.log(sumMix([9, 3, '7', '3']))
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))