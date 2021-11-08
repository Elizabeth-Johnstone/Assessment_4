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
  
  document.getElementById("numberButton").onclick = function () {
    axios.get("http://localhost:4000/api/number/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
  };

  document.getElementById("adviceButton").onclick = function () {
    axios.get("http://localhost:4000/api/advice/")
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
  

