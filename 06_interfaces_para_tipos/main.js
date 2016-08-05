function people(value) {
    console.log(value);
}
people({ name: "Guilherme", age: 19 });
function people2(name, age) {
    return { name: name, age: age };
}
console.log(people2("Pedro", 25));
function getColor(codeColor, title) {
    if (title) {
        return { title: title, codeColor: codeColor };
    }
    return { codeColor: codeColor };
}
console.log(getColor("#0000"));
console.log(getColor("#0000", "black"));
//# sourceMappingURL=main.js.map