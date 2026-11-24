// Q6. Write JavaScript code using fetch() to retrieve user details from:
// https://jsonplaceholder.typicode.com/users/1
// Display the user's name in the console.

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(user => {
    console.log("User Name:", user.name);
  })
  .catch(error => {
    console.error("Error:", error);
  });
