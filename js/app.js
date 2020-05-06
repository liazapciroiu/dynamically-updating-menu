/* Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling. */

/* Global Variables */
// DOM elements
const allSections = document.querySelectorAll('[data-nav]'); //nodeList
const navbarList = document.getElementById('navbar__list');
// Storing data arrays
let sectionsIds = [];
let sectionsNames = [];

/* Helper Functions */
const forEachSectionCallback = callback => {
  allSections.forEach(callback);
};

const getSectionsIds = () => {
  forEachSectionCallback(section => {
    let sectionId = section.getAttribute('id');
    sectionsIds.push(sectionId);
  });
  return sectionsIds;
};

const getSectionsNames = () => {
  forEachSectionCallback(section => {
    let name = section.getAttribute('data-nav');
    sectionsNames.push(name);
  });
  return sectionsNames;
};

getSectionsIds();
getSectionsNames();

/* Main Functions */

// build the nav
const buildNavbar = () => {
  const fragment = document.createDocumentFragment();
  forEachSectionCallback((section, index) => {
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
};

// Add class 'active' to section when in viewport
function toggleActiveClassSection() {
  window.addEventListener('scroll', () => {
    forEachSectionCallback((section) => {
      let distanceFromTop = section.getBoundingClientRect().top;
      let distanceFromBottom = section.getBoundingClientRect().bottom;
      if (distanceFromTop <= 130 && distanceFromBottom >= 130) {
        section.classList.add('your-active-class');
      } else {
        section.classList.remove('your-active-class');
      }
    });
  });
}

// Scroll to anchor ID using scrollTO event
function smoothScrollFromNavbar() {
  navbarList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName === 'A') {
      const selectedSection = document.querySelector(event.target.getAttribute('href'));
      selectedSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  })
}

/* Events */
// Build menu, toggle active class, handle scroll
window.addEventListener('DOMContentLoaded', () => {
  buildNavbar();
  toggleActiveClassSection();
  smoothScrollFromNavbar();
});
