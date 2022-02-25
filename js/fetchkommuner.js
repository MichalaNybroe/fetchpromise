const out = function (...str) {
  console.log(str)
}

// Det vigtige
const kommunerURL = 'https://api.dataforsyningen.dk/kommuner';

function getAllKommuner() {
  out("her køres get all kommuner funtion");
  return fetch(kommunerURL).then(response => response.json());
}
// Det vigtige slut

const kommuneMap = new Map();

// Async funktion
async function showAllKommuner() {
  out("show all kommuner");
  const kommuneListe = await getAllKommuner();
  kommuneListe.forEach((kommune, index) => {
    //hentKommuner.textContent += kommune.navn + " " + kommune.kode + " index " + index + " ";
    kommuneMap.set(kommune.navn, kommune);
  });
}

function showKommuneMap() {
  for (const KommmuneKey of kommuneMap.keys()) {
    out(kommuneMap.get(KommmuneKey));
  }
}

function fillKommuner() {
  //kommunemap.foreach()
  for (const kommuneKey of kommuneMap.keys()) {
    const element = document.createElement("option");
    element.textContent = kommuneKey;
    element.value = kommuneMap.get(kommuneKey);
    dropDownKommune.appendChild(element);
  }
}

function checkIfInputChanged() {
  const komName = inp1.value;
  console.log(komName);
  if (komName) {
    const komObj = kommuneMap.get(komName);
    if (komObj && !komObj.made) {
      //Kan også teste på undefined
        const aTag = document.createElement("a");
        aTag.setAttribute('href', komObj.href);
        aTag.innerText = komName;
        divTag.appendChild(aTag);
        const brTag = document.createElement('br');
        divTag.appendChild(brTag);
        komObj.made = true;
    }
  }
}
const pbGetKommuner = document.getElementById('pbGetkommune');
const pbShowKommuner = document.getElementById('pbShowKommuneMap');
const pbFillDropDown = document.getElementById('pbFillKommuner');
const dropDownKommune = document.getElementById('kommuneDropDown');

// dette bruges til at danne a tags
const inp1 = document.getElementById('input1');
const divTag = document.getElementById('divKom');


pbGetKommuner.addEventListener('click', showAllKommuner);
pbShowKommuner.addEventListener('click', showKommuneMap);
pbFillDropDown.addEventListener('click', fillKommuner);
inp1.addEventListener('change', checkIfInputChanged);









//Herfra spild

out("We are done!");

function callGetAllKommuner() {
  const promise = getAllKommuner();
  out(promise);
}

//callGetAllKommuner();
//showAllKommuner();
