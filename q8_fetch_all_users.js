// Q8. Write JavaScript code to retrieve all users from:
// https://jsonplaceholder.typicode.com/users
// Use forEach() to display each user's name.

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log(user.name);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
