'use strict'
const confirmResult = confirm(`Остальные дз были в домашке №24\nПерейти в Lesson_24?`);
if (confirmResult) {
	location.href = 'https://hypnogaga.github.io/Lessons/Lesson_24';
}

const formSearch = document.querySelector('.form__search');
const iconSearch = document.querySelector('.search__icon');


document.addEventListener('click', (e) => {
	if (e.target.closest('.search__icon')) {
		formSearch.classList.toggle('opened');
	}
	if (formSearch.classList.contains('opened')) {
		document.addEventListener('keyup', e => {
			if (e.code === 'Escape') {
				formSearch.classList.remove('opened');
			}
		});
		if (e.target !== iconSearch && !e.target.closest('.form__search')) {
			formSearch.classList.remove('opened');
		}
	}
});

const searchInput = document.querySelector('.search__input');
const searchInputLimit = searchInput.getAttribute('maxlength');
const searchValue = document.querySelector('.search__counter span');

searchValue.innerHTML = searchInputLimit;

console.log(searchInputLimit);

searchInput.addEventListener('keyup', setCounter);

function setCounter() {
	searchValue.innerHTML = searchInputLimit - searchInput.value.length;
}

searchInput.addEventListener('keydown', (e) => {
	if (e.repeat) {
		setCounter();
	}
})