function openNav() {
  document.getElementById("mySidepanel").style.width = "calc(200px + 10%)";
  document.getElementById("backgroundBox").style.display = "block";
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "0px";
    }
  });
}
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("backgroundBox").style.display = "none";
}

var coll = document.getElementsByClassName("kopje");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}




const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const productList = document.getElementById('product-list');

// Eventlistener voor categorie selectie
categoryCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateFilters);
});

// Eventlistener voor prijsbereik
priceRange.addEventListener('input', updateFilters);

// Functie om de filters toe te passen
function updateFilters() {
  const selectedCategories = Array.from(categoryCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  const price = priceRange.value;

  // Voer hier je logica uit om de producten te filteren op basis van de geselecteerde categorieën en prijs

  // Vervang onderstaande code door de logica om de gefilterde producten weer te geven
  productList.innerHTML = `<p>Geen producten gevonden.</p>`;
}

/* ============================Einde filter===================================== */


// JavaScript-code om de breadcrumb-dynamiek bij te werken
var breadcrumbList = document.querySelector('.breadcrumb ul');

// Leegmaken van de breadcrumb
breadcrumbList.innerHTML = '';

// Toevoegen van home-link
var homeItem = document.createElement('li');
var homeLink = document.createElement('a');
homeLink.href = '/';
homeLink.textContent = 'Home';
homeItem.appendChild(homeLink);
breadcrumbList.appendChild(homeItem);

// Mapping van paginapaden naar specifieke namen
var pageMap = {
  'productpage.html': 'Handschoenen',
  'category.html': 'Categorie',
  'otherpage.html': 'Andere Pagina'
};

// Huidige paginapad verkrijgen
var currentPage = window.location.pathname.split('/').pop();

// Genereren van breadcrumb-items op basis van het huidige pad
if (pageMap.hasOwnProperty(currentPage)) {
  var currentItem = document.createElement('li');
  currentItem.textContent = pageMap[currentPage];
  breadcrumbList.appendChild(currentItem);
}