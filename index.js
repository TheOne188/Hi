console.log('hi');

fetch("./Characters.json")
.then(response => {
   return response.json();
}).then(data => console.log(data));
