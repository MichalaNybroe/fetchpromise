console.log("Vi er i post kommuner js fil.");

const countiesURL = 'http://localhost:8080/county';

let body = {};

let county = {
  "countyCode": "0265",
  "name": "Roskilde",
  "href": "http://localhost:8080/county/0265",
  "region" : {"regionCode" : "1085" }
}

const postKommuneRequest = {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: body
}

const pbPostKommuner = document.getElementById('pbPostKommuner');

function postAllKommuner(button) {
  console.log("post all");

  //stringify = omdanner javascript objekt til string som laves om til java.
  for (const komKey of kommuneMap.keys()) {
    let kom1 = kommuneMap.get(komKey);

    county.countyCode = kom1.kode;
    county.name = kom1.navn;
    county.href = kom1.href;
    county.region.regionCode = kom1.region.kode;
    body = JSON.stringify(county);

    out(body);

    postKommuneRequest.body = body;
    fetch(countiesURL, postKommuneRequest).catch(error => out(error));
  }
}

pbPostKommuner.addEventListener('click', postAllKommuner);
