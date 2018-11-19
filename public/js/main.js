var menuBtn = document.querySelector("#site-nav__button");
menuBtn.addEventListener('click', toggleSiteMenu);

function toggleSiteMenu() {
  var toggleValue = document.getElementById("site-nav__button").getAttribute("aria-expanded"); 
  if (toggleValue == "true") 
  {
  toggleValue = "false"
  } else {
  toggleValue = "true"
  }
  document.getElementById("site-nav__button").setAttribute("aria-expanded", toggleValue);
}

var searchBtn = document.querySelector("#site-nav__search-toggle");
searchBtn.addEventListener('click', toggleSearch);

function toggleSearch() {
  var toggleValue = document.getElementById("site-nav__search-toggle").getAttribute("aria-expanded"); 
  if (toggleValue == "true") 
  {
  toggleValue = "false"
  } else {
  toggleValue = "true"
  }
  document.getElementById("site-nav__search-toggle").setAttribute("aria-expanded", toggleValue);
}