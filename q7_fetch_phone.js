fetch("https://jsonplaceholder.typicode.com/users/3")
  .then(response => response.json())
  .then(user => {
    console.log("Phone Number:", user.phone);
  })
  .catch(error => {
    console.error("Error:", error);
  });
