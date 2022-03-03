let region = {};

region = {
  "regionCode": "1084",
  "name": "Region Hovedstaden",
  "href": "https://api.dataforsyningen.dk/regioner/1084"
}

const postRegionRequest = {
  method:"POST",
  headers: {
    "content-type": "application/json"
  },
  body: body
}

let getRegionerAPIRequest = {
  method: "GET",
  headers: {
    "content-type": "application/json"
  },
  redirect: "follow"
}

const pbPostRegioner = document.getElementById('pbPostRegioner');

let getRegionerAPIURL = "https://api.dataforsyningen.dk/regioner";
const postRegionURL = "http:/localhost:8080/region";

function postAllRegioner(button) {
  fetch(getRegionerAPIURL, getRegionerAPIRequest)
    .then(response => response.json())
    .then(data => data.forEach(obj => {
      region.regionCode = obj.kode;
      region.name = obj.navn;
      region.href = obj.href;
      body = JSON.stringify(region);
      postRegionRequest.body = body;
      fetch(postRegionURL, postRegionRequest)
        .catch(error => console.log(error));
  }))
  .catch(error => console.log(error));
}

pbPostRegioner.addEventListener('click', postAllRegioner);
