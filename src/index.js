function displayCharacterNames(character) {
   let span = document.createElement("span")
   span.innerHTML = `
   <p id="cName">${character.name}<p>
   `
   document.getElementById("character-bar").appendChild(span)

   let characterObj = {
    id: character.id,
    name: character.name,
    image: character.image,
    votes: character.votes
   }

   const cardName = span.querySelector("#cName")
   cardName.addEventListener("click", () => {
    document.querySelector("#name").textContent = character.name
    document.querySelector("#image").src = character.image
    document.querySelector("#vote-count").textContent = character.votes
   })

   let form = document.querySelector("#votes-form")
   form.addEventListener("submit", (e) => {
    e.preventDefault()
    character.votes = e.target.votes.value
    document.querySelector("#vote-count").textContent = character.votes
    updateDB(character)
   })
}

//GET Requests
function getData() {
    fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(data => data.forEach(character => displayCharacterNames(character)))
 }
 
 getData()

function updateDB(characterObj) {
    fetch(`http://localhost:3000/characters/${characterObj.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(characterObj)
    })
}

function resetVotes() {
    let resetButton = document.querySelector("#reset-btn")
    resetButton.addEventListener("click", () => {
        document.querySelector("#vote-count").textContent = 0
    })
}

resetVotes()
 





