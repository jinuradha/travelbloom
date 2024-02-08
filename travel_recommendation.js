const datajson = []
const insertdata = document.getElementById('insertdata');

fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            document.getElementById("btnSearch").onclick = function () {
                console.log(data["beaches"]);
                const inputsearch = document.getElementById("conditionInput");
                if (inputsearch.value == "beaches") {
                    const beachimage = data["beaches"][0].imageUrl
                    const beachname = data["beaches"][0].name
                    const beachdescription = data["beaches"][0].description
                    insertdata.innerHTML += `<img src='${beachimage}' alt="hjh">`;
                    insertdata.innerHTML += `<p><strong>${beachname}:</strong> ${beachdescription}</p>`;
                }
            }
          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
});



