console.log('hi');

fetch("./Characters.json")
.then(response => {
   return response.json();
})
