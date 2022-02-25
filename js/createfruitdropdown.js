const fruits = ["Apple", "Orange", "Banana", "Kiwi", "Pineapple"];

function fillDropDown(item, index) {
  //Kan bruges til dynamisk at oprette alt muligt - fx dynamiske slet knapper
  const element = document.createElement("option");
  element.textContent = item;
  // er smart ved lister = value : gør det nemt at hente noget
  element.value = index; //vigtigt fordi value nu følger med key (index ligesom en map)
  // På select indsættes barn af typen element?
  chooseFruit.appendChild(element);
}

function addFruits() {
  fruits.forEach(fillDropDown);
}

function selectFruit() {
  const selectIndex = chooseFruit.selectedIndex;
  const selectedFruit = chooseFruit.options[selectIndex];
  console.log(selectedFruit);
  console.log(selectedFruit.innerText);
  console.log(selectedFruit.value);
}




const fillButton = document.querySelector("#pbFillDropDown");
fillButton.addEventListener('click', addFruits);

const chooseFruit = document.querySelector("#dropDownfruits");
//Change - event på listener for ændring af state fx skrive noget nyt eller vælge noget nyt
chooseFruit.addEventListener('change', selectFruit);

