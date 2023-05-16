let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
	showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
	showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
	showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
	/* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
	let slides = document.getElementsByClassName("item");

	/* Проверяем количество слайдов: */
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}

	/* Проходим по каждому слайду в цикле for: */
	for (let slide of slides) {
		slide.style.display = "none";
	}
	/* Делаем элемент блочным: */
	slides[slideIndex - 1].style.display = "flex";
}

function boxHandler(e) {
	e.preventDefault();
	let currentBox = e.target.closest('.box');
	let currentContent = e.target.nextElementSibling;
	currentBox.classList.toggle('active');
	if (currentBox.classList.contains('active')) {
		currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
	} else {
		currentContent.style.maxHeight = 0;
	}
}
const b = document.querySelector('.label')
b.addEventListener('click', boxHandler);

const burgerButton = document.querySelector('.hamburger-button');
const BurgerBar = document.querySelector('.header__bar');
function burgerOpenNav() {
	BurgerBar.classList.toggle('header__bar_open')
}
burgerButton.addEventListener('click', burgerOpenNav)

// const page = document.querySelector('.page')
// const popup = document.querySelector('.popup');
// const formButton = document.querySelector('#openForm');
// const popupClose = document.querySelector('.popup__close');
// const openFormPage = document.querySelector('#openFormPage')

// function openPopup() {
// 	popup.classList.add('popup_opened')
// }
// formButton.addEventListener('click', openPopup)

// function closePopup() {
// 	popup.classList.remove('popup_opened')
// }
// popupClose.addEventListener('click', closePopup)

// function closeByEsc(evt) {
// 	if (evt.key === 'Escape') {
// 		const openedPopup = document.querySelector('.popup_opened');
// 		closePopup(openedPopup);
// 	}
// }
// document.addEventListener('keydown', closeByEsc)

// function handleOverlayClick(evt) {
// 	if (evt.target.classList.contains('popup')) {
// 		closePopup(evt.target);
// 	}
// };
// page.addEventListener('mousedown', handleOverlayClick);

// openFormPage.addEventListener('click', openPopup)