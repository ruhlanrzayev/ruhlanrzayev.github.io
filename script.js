// Bars
const bars = document.querySelector('.bars');
const menu = document.querySelector('.mobileMenu')

bars.addEventListener('click', () => {
    menu.classList.toggle('active');
})

// Switch Tab
function opentab(tabName) {
    let tabContents = document.querySelectorAll('.tab-contents');
    tabContents.forEach(tab => tab.classList.remove('active-tab'));

    let tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(link => link.classList.remove('active-link'));

    document.getElementById(tabName).classList.add('active-tab');
    let activeTab = document.querySelector(`.tab-links[onclick="opentab('${tabName}')"]`);
    activeTab.classList.add('active-link');
}

document.addEventListener('DOMContentLoaded', () => opentab('education'));

// Changed Text
const texts = ['Frontend Developer', 'UI Designer', 'Web Developer'];
let currentTextIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
let speed = 75; 

function typeEffect() {
    const changedTextElement = document.getElementById("changedText");
    const currentText = texts[currentTextIndex];

    if (isDeleting) {
        changedTextElement.textContent = currentText.substring(0, currentLetterIndex--);
        if (currentLetterIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length; 
        }
    } else {
        changedTextElement.textContent = currentText.substring(0, currentLetterIndex++);
        if (currentLetterIndex === currentText.length) {
            isDeleting = true;
        }
    }

    setTimeout(typeEffect, isDeleting ? speed + 50 : speed); 
}

typeEffect(); 
