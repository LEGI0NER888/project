/* slider */

const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controls');

let imageIndex = 0;


function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;

   
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev-button')) {
            let index = imageIndex - 1;
            
            if (index < 0 ) {
                index = images.length - 1;
               
            }

            show(index);
        } else if (event.target.classList.contains('next-button')) {
            let index = imageIndex + 1;
            
            if (index >= images.length ) {
                index = 0;
                
            }
            show(index);
        }
    })
})

show(imageIndex);


/* Pop-up login */

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.auth-block'); // Само окно
let openPopupButtons = document.querySelectorAll('.btn-pop'); // Кнопки для показа окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        document.querySelector(".header").classList.remove("open");
    })
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});


/* burger menu*/

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".header").classList.toggle("open")
    })
})


// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // Действие при клике
        document.querySelector(".header").classList.remove("open")
    }
});

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    // Действие при клике
    document.querySelector(".header").classList.remove("open")
});