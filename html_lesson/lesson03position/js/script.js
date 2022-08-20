'use strict';

const mainWrapper = document.createElement('div'),
    cardWrapper = document.createElement('div'),
    cardIcon = document.createElement('div'),
    cardBorder = document.createElement('div'),
    cardHeading = document.createElement('h2'),
    cardText = document.createElement('p'),
    cardButton = document.createElement('a');
mainWrapper.classList.add('wrap');
cardWrapper.classList.add('card-wrap');
cardIcon.classList.add('card-icon');
cardBorder.classList.add('card-border');
cardHeading.classList.add('card-heading');
cardText.classList.add('card-text');
cardButton.classList.add('card-button');

document.body.append(mainWrapper);
document.querySelector('.wrap').append(cardWrapper);
document.querySelector('.card-wrap').append(cardIcon);
document.querySelector('.card-wrap').append(cardBorder);
document.querySelector('.card-border').append(cardHeading);
document.querySelector('.card-border').append(cardText);
document.querySelector('.card-border').append(cardButton);
document.querySelector('.card-button').href = '#';

cardHeading.textContent = 'Royal Service';
cardText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing' +
    ' elit. Adipisci deleniti et expedita hic nesciunt nulla obcaecati' +
    ' pariatur perferendis voluptas voluptatum.'
cardButton.textContent = "More here"

mainWrapper.style.cssText = 'display: flex; flex-flow: row wrap;' +
    ' justify-content: center; column-gap: 50px;'
cardWrapper.style.cssText = 'width: 300px; display: flex; justify-content:' +
    ' center; flex-flow: column wrap; align-items: center;'
cardIcon.style.cssText = 'border: 1px solid black; width: 100px;' +
    ' height: 100px; border-radius: 50%; display: flex; justify-content:' +
    ' center; align-items: center; position: relative; top: 25px;' +
    ' background: white';
cardIcon.innerHTML = '<i class="fa-solid fa-virus"></i>'
document.querySelector('.fa-solid').style.cssText = 'font-size: 32px; color:' +
    ' green;'
cardBorder.style.cssText = 'width: 100%; height: 375px; border: 1px solid' +
    ' black; padding: 75px 30px 30px 30px; display: flex; flex-flow: column' +
    ' wrap; justify-content: center; align-items: center'
cardHeading.style.cssText = 'text-align: center; color: black; margin: 0 0' +
    ' 50px 0; font-family: Open-sans, sans-serif;';
cardText.style.cssText = 'text-align: center; color: black; margin: 0 0' +
    ' 40px 0;font-family: Open-sans, sans-serif;'
cardButton.style.cssText = `cursor: pointer; display: block; text-decoration: none; 
color: black; width: 70%; padding: 15px 0; text-align: center; border: 1px solid 
black`

const dupNode = cardWrapper.cloneNode(true);
document.querySelector('.wrap').append(dupNode);
const dupNode2 = cardWrapper.cloneNode(true);
document.querySelector('.wrap').append(dupNode2);

const icons = document.querySelectorAll('.card-icon');
icons[1].innerHTML = '<i class="fa-solid fa-syringe"></i>';
icons[2].innerHTML = '<i class="fa-solid fa-user-doctor"></i>';
const faSolids = document.querySelectorAll('.fa-solid');
faSolids[1].style.cssText = 'font-size: 32px; color: green;';
faSolids[2].style.cssText = 'font-size: 32px; color: green;';
const cardHeadings = document.querySelectorAll('.card-heading');
cardHeadings[1].textContent = 'Pure Opium';
cardHeadings[2].textContent = 'Master Breathe';
