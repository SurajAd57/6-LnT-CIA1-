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
