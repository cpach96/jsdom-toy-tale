let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  fetch("http://localhost:3000/toys")
    .then(function(response){
      return response.json();
    })
    .then(function(object){
      let collection = document.getElementById("toy-collection")
      object.forEach(toy => {
      let cardClass = document.createElement("div")
      let toyName = document.createElement("h2")
      let img = document.createElement("img")
      let likes = document.createElement("p")
      let likeBtn = document.createElement("button")
      img.src = toy.image
      img.className = "toy-avatar"
      cardClass.className = "card" 
      likeBtn.className = "like-btn"
      collection.appendChild(cardClass)  
      toyName.innerText = toy.name
      likes.innerText = toy.likes
      cardClass.appendChild(toyName)
      cardClass.appendChild(img)
      cardClass.appendChild(likes)
      cardClass.appendChild(likeBtn)
      console.log(toy.image)
      })
    })
});

