let names = {
    name: 'Talha',
    age: 22,
    Major: 'Computer Science',
    Email: 'nu.edu.pk'
}

console.log(names.age);
console.log(names.name);
console.log(names);

console.log(names['age']);
console.log(names['name']);


let student={
    name: 'Talha',
    age: 22,
    Major: 'Computer Science',
    Email: 'nu.edu.pk',
    "class": 'BS'
}

console.log(student.class); // output: undefined
console.log(student['class']); // output: BS

student.age = 55;
student.degree = 'BS';
console.log(student);

delete student.age;
console.log(student);


let students = {
    name: "Talha",
    age: 20,
    isStudent: true,
    skills: ["JavaScript", "React", "Node"],
    address: {
        city: "Rawalpindi",
        country: "Pakistan"
    },
    greet: function(){
        console.log("Hello, my name is " + this.name);
    }
};
console.log(students);
console.log(students.skills[1]); // output: React
console.log(students.address.city); // output: Rawalpindi
students.greet(); // output: Hello, my name is Talha