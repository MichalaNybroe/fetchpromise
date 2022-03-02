let region = {};

region = {
  "regionCode": "1084",
  "name": "Region Hovedstaden",
  "href": "https://api.dataforsyningen.dk/regioner/1084"
}


let getRegionerAPIURL = "https://api.dataforsyningen.dk/regioner";
const postRegionURL = "http:/localhost:8080/region";

const pbPostRegioner = document.getElementById('pbPostRegioner');

pbPostRegioner.addEventListener('click', postAllRegioner);
