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
const fragment = document.createDocumentFragment();
const menu = document.getElementById('navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function sectionViewPort(elem) {
    let sectionPosition = elem.getBoundingClientRect();
    return (sectionPosition.top >= 0);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavItemHTML(id, name){
    const itemHTML = `<a class ="menu__link" data-id="${id}">${name}</a>`;
    return itemHTML;
}
function createListItem() {
    for (section of sections) {
        const newMenuItem = document.createElement('li');
        const sectionName = section.getAttribute('data-nav')
        const sectionId = section.getAttribute('id')
        newMenuItem.innerHTML = createNavItemHTML(sectionId, sectionName)
         fragment.appendChild(newMenuItem);
    }
    const navBarList = document.getElementById('navbar__list')
    navBarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function isActiveClass() {
    for (section of sections) {
        if (sectionViewPort(section)) {
                section.classList.add('your-active-class');
            }
        else {
            section.classList.remove('your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
function scrollToElement(event){
    if(event.target.nodeName === 'A'){
        const sectionId = event.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
    }
}
// Build menu 
createListItem();
// Scroll to section on link click
document.addEventListener('scroll', function(){
    setActiveClass();
});

// move courser when click on menu 
menu.addEventListener('click', function(event){
    scrollToElement(event)
   // menu.style.cursor = pointer ;
});


