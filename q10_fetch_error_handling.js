// Q10. Write a Fetch API program to retrieve user details from:
// https://jsonplaceholder.typicode.com/users/1
// Use .catch() to handle errors and display an error message in the console.

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(user => {
    console.log("User details:", user);
  })
  .catch(error => {
    console.error("Error occurred while fetching data:", error.message);
  });
