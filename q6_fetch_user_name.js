fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(user => {
    console.log("User Name:", user.name);
  })
  .catch(error => {
    console.error("Error:", error);
  });
