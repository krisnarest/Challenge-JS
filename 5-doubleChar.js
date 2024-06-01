function doubleChar(str) {
    return [...str].map(el=>el +el).join("")
}

console.log(
    doubleChar("adidas")
);