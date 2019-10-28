// // Select the element and store it in a variable.
// var el = document.getElementById('one');

// // Change the value of the class attribute.
// el.className = 'cool';






// Select the starting point and find its siblings.
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// Change the values of the siblings' class attributes.
prevItem.className = 'complete';
nextItem.className = 'cool';