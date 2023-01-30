// Создаем переменную, в которую мы положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Здесь создаем переменную в которую положим меню
let menu = document.querySelector('.sidebar');
//Отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener ('click', function (event) {
  //Отменяем стандартное поведение ссылки
  event.preventDefault();
  // Вешаем класс на меню когда кликнули по кнопке меню
  menu.classList.toggle('visible');
})

