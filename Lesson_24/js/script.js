'use strict'


const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
console.log(`Ширина полосы прокрутки - ${scrollWidth}px`);


function scrollVerticalToPoint() {
	window.scrollTo(0, 100);
}
setTimeout(scrollVerticalToPoint, 1000);


const lessonTitles = document.querySelectorAll('.title');
lessonTitles.forEach((item, index) => {
	console.log(`Координате элемента №${index + 1}`);
	console.log(item.getBoundingClientRect());
});