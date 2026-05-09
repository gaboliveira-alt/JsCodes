let oneString = "Um texto";
let oneString1 = "o rato roeu a roupa do rei de roma";

console.log(oneString.concat(" em um lindo dia de verão"))
console.log(oneString + " em um lindo dia de verão")
console.log(`${oneString} em um lindo dia`)

console.log(oneString.indexOf("Um"))
console.log(oneString.indexOf("o", 3))
console.log(oneString.lastIndexOf("o"))
console.log(oneString.lastIndexOf("o", 3))

console.log(oneString.match(/[a-z]/))
console.log(oneString.match(/[a-z]/g))

console.log(oneString.search(/x/))

console.log(oneString.replace("Um", "Outra"))
console.log(oneString1.replace(/r/g, "#"))

console.log(oneString.length)

console.log(oneString1.slice(2, 6))
console.log(oneString1.slice(-3))

console.log(oneString1.split(' '))
console.log(oneString1.split(' ', 2))