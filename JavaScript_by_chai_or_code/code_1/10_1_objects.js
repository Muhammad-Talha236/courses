let course = {
    name: 'JavaScript',
    duration: '3 months',
    level: 'beginner',
    instructor: 'Talha'
};

const {instructor} = course;
console.log(instructor); // output: Talha
const {instructor: inst} = course;
console.log(inst); // output: Talha

console.log(Object.keys(course)); // output: [ 'name', 'duration', 'level', 'instructor' ]
console.log(Object.values(course)); // output: [ 'JavaScript', '3 months', 'beginner', 'Talha' ]
console.log(Object.entries(course)); // output: [ [ 'name', 'JavaScript' ], [ 'duration', '3 months' ], [ 'level', 'beginner' ], [ 'instructor', 'Talha' ] ]
console.log(course.hasOwnProperty('level')); // output: true