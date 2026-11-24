// Q7. Write JavaScript code using Fetch API to retrieve user details from:
// https://jsonplaceholder.typicode.com/users/3
// Display the user's phone number using console.log().

fetch("https://jsonplaceholder.typicode.com/users/3")
  .then(response => response.json())
  .then(user => {
    console.log("Phone Number:", user.phone);
  })
  .catch(error => {
    console.error("Error:", error);
  });
