var cardsDiv = document.querySelector("#cards");
var currnetUsername = "";

function getUsername(element) {
    console.log(element.value);
    currnetUsername = element.value;

}

function makeCoderCard(data) {
    var res =   `<div class="card">;
                    <img src="${data.avatar_url}" alt="${data.login}">;
                    <h3>${data.login} - ${data.name}</h3>
                    <p>Location: ${data.location}</p>
                    <p>Repositories: ${data.public_repos}</p>
                </div>`
    return res;
}

async function search() {
    var response = await fetch("https://api.github.com/users/" + currnetUsername);
    var coderData = await response.json();
    console.log(coderData);
    cardsDiv.innerHTML = makeCoderCard(coderData);

} 