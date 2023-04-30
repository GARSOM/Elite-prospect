const container = document.querySelector('.container');
const page = document.querySelector('.page')
const containerButton = container.querySelector('.container__button');
const containerContent = container.querySelector('.container__content');
const popup = document.querySelector('.popup');
const formButton = document.querySelector('#openForm');
const popupClose = document.querySelector('.popup__close');
const openFormPage = document.querySelector('#openFormPage')
const whiteThemeButton = document.querySelector('.header__bar-logo')
function openPopup() {
	popup.classList.add('popup_opened')
}
formButton.addEventListener('click', openPopup)

function closePopup() {
	popup.classList.remove('popup_opened')
}
popupClose.addEventListener('click', closePopup)

function containerInfoOpen() {
	containerContent.classList.add('container__content_opened');
}
page.addEventListener('wheel', containerInfoOpen)
containerButton.addEventListener('click', containerInfoOpen)

function whiteTheme() {
	page.classList.toggle('page_type_black')
}
whiteThemeButton.addEventListener('click', whiteTheme)

function closeByEsc(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_opened');
		closePopup(openedPopup);
	}
}
document.addEventListener('keydown', closeByEsc)

function handleOverlayClick(evt) {
	if (evt.target.classList.contains('popup')) {
		closePopup(evt.target);
	}
};
page.addEventListener('mousedown', handleOverlayClick);

// const cardsButtons = document.querySelectorAll('.cards__title')
// cardsButtons.forEach(element => {

// });

function cardsDiscriptionOpenned() {
	const cardsDiscriptions = document.querySelectorAll('.cards__discription')
	cardsDiscriptions.forEach(e => {
		e.classList.add('cards__discription_openned');
	});
}
page.addEventListener('wheel', cardsDiscriptionOpenned)
openFormPage.addEventListener('click', openPopup)

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