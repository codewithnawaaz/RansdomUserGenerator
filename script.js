const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
function addUser() {
  fetch("https://randomuser.me/api/")
    .then((raw) => raw.json())
    .then((res) => {
      console.log(res.results[0]);
      const { name, gender, email, picture, location, dob, cell } =
        res.results[0];
      container.innerHTML += `
      <div class="cards">
      <div class="card">
    <img src=" ${picture.large}" alt="" />
    <h1> Name: ${name.title} ${name.first}</h1>
    <h5> Gender: ${gender}</h5>
    <h5> Age: ${dob.age}</h5>
    
    <h5> Cell: ${cell}</h5>
    
    
    <p>Email:  ${email}</p>
    
     address: ${location.city}
    </p>
  </div>`;
    });
}

btn.addEventListener("click", function () {
  addUser();
});
