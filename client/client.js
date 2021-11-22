document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
  };



const showsContainer = document.querySelector('#shows-container')
const myShowsForm =  document.getElementById('show-form')

const baseURL = `http://localhost:4000/api/shows`


const showsCallback = ({ data: showsList }) => displayShows(showsList)

const errCallback = err => console.log(err.response.data)

const getAllShows = () => axios.get(baseURL).then(showsCallback).catch(errCallback)

const createShow = function (body) {
    axios.post(baseURL, body)
    .then(showsCallback).catch(errCallback);
};

const deleteShows = id => axios.delete(`${baseURL}/${id}`)
  .then(showsCallback).catch(errCallback);

const updateShows = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(showsCallback).catch(errCallback)


function submitHandler(error) {
  error.preventDefault()

let showName = document.getElementById("show-name")
let rating = document.getElementById("rating")
let networkName = document.getElementById("network")

let showObj = {

  showName: showName.value,
  networkName: networkName.value
}

createShow(showObj)
showName.value = ''
networkName.value = ''
}


function createShowCard(showsList) {
  const showCard = document.createElement('div')
  showCard.classList.add('show-card')

  showCard.innerHTML = `
  <p class="show-name">Show name: ${showsList.showName}</p>
  <p class="network-name">Network name: ${showsList.networkName}</p>
  <div class="buttons-container">
  <p class="rating">${showsList.rating}</p>
  <button onclick="updateShows(${showsList.id}, 'minus')">-</button>
  <button onclick="updateShows(${showsList.id}, 'plus')">+</button>
  </div>
  <br>
  <button class="deleteThis" onclick="deleteShows(${showsList.id})">delete</button>`
  showsContainer.appendChild(showCard)
}

function displayShows(arr) {
  showsContainer.innerHTML = ``
  for (let i = 0; i < arr.length; i++) {
    createShowCard(arr[i])
  }
}

myShowsForm.addEventListener('submit', submitHandler)

getAllShows()








