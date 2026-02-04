let names = "Quy, Nam, Lan, Hung , Nam";

let students = names.split(", ");
console.log(students);

students.reverse();
console.log(students);

if (students.includes("Lan")) {
    console.log("Lan tồn tại trong mảng");
} else {
    console.log("Lan không tồn tại trong mảng");
}
console.log("Vị trí của Nam:", students.indexOf("Nam"));



