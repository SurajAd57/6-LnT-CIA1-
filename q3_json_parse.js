// Q3. Convert JSON into JavaScript Object
let student = '{"name":"Ravi","age":24}';

// Convert JSON string to JavaScript object using JSON.parse()
let studentObj = JSON.parse(student);

// Display the student's name
console.log("Student Name:", studentObj.name);
