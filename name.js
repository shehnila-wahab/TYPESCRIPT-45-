"use strict";
let personName = '';
personName = prompt('what is your name?') || '';
let lowerCase = personName.toLowerCase();
let upperCase = personName.toUpperCase();
let titleCase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, here are your name in:
    LowerCase: ${lowerCase}
    UpperCase: ${upperCase}
    TitleCase: ${titleCase}`);
}
else {
    alert('please fill your name !');
}
