/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

/* Global Variables */

// DOM elements
const allSections = document.querySelectorAll('[data-nav]'); //nodeList
const landingContainers = document.getElementsByClassName('landing__container'); //HTMLCollection
const navbarList = document.getElementById('navbar__list');
// Storing data arrays
let sectionsIds = [];
let sectionsNames = [];

/* Helper Functions */
const getSectionsIds = () => {
  allSections.forEach((section) => {
    let sectionId = section.getAttribute('id');
    sectionsIds.push(sectionId);
  }); 
  return sectionsIds;
}

const getSectionsNames = () => {
  allSections.forEach((section) => {
    let name = section.getAttribute('data-nav');
    sectionsNames.push(name);
  });
  return sectionsNames;
}

getSectionsIds();
getSectionsNames();

/* Main Functions */

// build the nav
const buildNavbar = () => {
  const fragment = document.createDocumentFragment();
  allSections.forEach((section, index) => {
    // build an li
    const newListItem = document.createElement('li');
    const newAnchorTag = document.createElement('a');
    newAnchorTag.setAttribute('href', `#${sectionsIds[index]}`);
    newAnchorTag.classList.add('menu__link');
    newAnchorTag.innerText = `${sectionsNames[index]}`;
    // append the lis
    newListItem.appendChild(newAnchorTag);
    fragment.appendChild(newListItem);
  });
  navbarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/* Events */

// Build menu 
window.addEventListener('DOMContentLoaded', (event) => {
  buildNavbar();
});

// Scroll to section on link click


// Set sections as active


