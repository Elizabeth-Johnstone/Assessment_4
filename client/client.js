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
  
  document.getElementById("carForm").onclick = function () {
    axios.get("http://localhost:4000/api/car/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
  };

  document.getElementById("animals").onclick = function () {
    axios.get("http://localhost:4000/api/animal/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
  };

  document.getElementById("submitButton").onclick = function () {
    axios.get("http://localhost:4000/api/favoriteForm/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
  };

  document.querySelector('form').onsubmit = function (body) {
    axios.post("http://localhost:4000/api/", body)
      .then((response => form.innerHTML = response.data.id));
  };
  

