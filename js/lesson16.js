let students = ["Luiz", "Maria", "João"];
students = 123;

console.log(typeof students);
console.log(students instanceof Array);

students.push("Marcão");
students.push("Pedrão");

console.log(students.slice(0, -2));

delete students[1];
console.log(students[1]);

const removedStudent = students.shift();
console.log(removedStudent);
console.log(students);

students.unshift("Luzia");
students.unshift("Receba");

students.push("Bora");
students.push("Fabs");

students[students.length] = "Canalha";
students[students.length] = "Murilo";
students[students.length] = "Nelson";