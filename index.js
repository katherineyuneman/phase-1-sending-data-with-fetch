

function submitData(name, email){
  return fetch("http://localhost:3000/users", postNewUser)
  .then(res => res.json())
  .then(function (newUser){
    let p = document.createElement('p')
    p.textContent = newUser.id
    document.body.appendChild.p
  })
}


const postNewUser = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name: "Steve",
    email: "steve@steve.com"
  })
};

submitData()






// DOG EXAMPLE

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });


