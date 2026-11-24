// Q9. Write JavaScript code using Fetch API to retrieve user details from:
// https://jsonplaceholder.typicode.com/users/4
// Display the user's company name and website in the console.

fetch("https://jsonplaceholder.typicode.com/users/4")
  .then(response => response.json())
  .then(user => {
    console.log("Company Name:", user.company.name);
    console.log("Website:", user.website);
  })
  .catch(error => {
    console.error("Error:", error);
  });
