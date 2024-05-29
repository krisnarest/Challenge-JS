// const reverseSeq = (n) => {
//     const res = [];
//     for (let i = n; i >= 1; i--) {
//         res.push(i);
//     }
//     return res;
//   };

// const reverseSeq = (n) => [...Array(n)].map((el, i) => i+1).reverse();

const reverseSeq = (n) => [...Array(n)].map((el, i) => n-i);

  console.log (reverseSeq(5));