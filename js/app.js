/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections =Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListItem() {
    for (section of sections) {
        scetionName = section.getattribute('data-nav')ك
        sectionId = section.getattribute('id');
        listItem = document.createElement('li');
        listItem.innerHtml = `<a class ="menu__link" href="${sectionId}">${scetionName}</a>`;
        menu.appendChild(listItem);
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


