// function grow(x){
//     let result = x[0];
//     for (let i = 1; i < x.length; i++) {
//         result = result * x[i]
//     }
// return result;
// }

// function grow(x){
//     const result = x.reduce((a,b) => a*b, 1);
//     return result;
// }

function grow(x) {
    return x.reduce((a,b) => a*b, 1);
}

// const grow = (x) => x.reduce((a,b) => a*b, 1)

console.log (grow([1, 2, 3]))
console.log (grow([4, 1, 1, 1, 4]))
console.log (grow([2, 2, 2, 2, 2, 2]))