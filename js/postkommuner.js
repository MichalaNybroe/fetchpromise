console.log("Vi er i post kommuner js fil.");

const countiesURL = 'http://localhost:8080/county';

let region = {};

body = {
  "countyCode": "0265",
  "name": "Roskilde yyy",
  "href": "http://localhost:8080/county/0265"
}

const postKommuneRequest = {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body:body
}

const pbPostKommuner = document.getElementById('pbPostKommuner');

pbPostKommuner.addEventListener('click', postAllKommuner);

function postAllKommuner(button) {
  console.log("post all");

  //stringify = omdanner javascript objekt til string som laves om til java.
  region = JSON.stringify(body);
  out(region);
  postKommuneRequest.body = region;

  fetch(countiesURL, postKommuneRequest).catch(error => out(error));
}

