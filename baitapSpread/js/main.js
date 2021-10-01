
const eleHeading = document.querySelector(".heading");

let stringHeading = eleHeading.innerHTML;
let arrChar = [...stringHeading];

eleHeading.innerHTML = arrChar.map( char => {
    return `<span>${char}</span>`;
}).join("");
