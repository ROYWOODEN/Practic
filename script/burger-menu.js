const hamb = document.querySelector("#hamb"); // Иконка бургер-меню
const popup = document.querySelector("#popup"); // Контейнер для меню
const body = document.body; // Тело страницы

// Слушаем событие клика на бургер-меню
hamb.addEventListener("click", () => {
  popup.classList.toggle("open"); // Открытие/закрытие меню
  hamb.classList.toggle("active"); // Анимация бургер-иконки

  // Управляем скроллингом
  if (popup.classList.contains("open")) {
    body.classList.add("noscroll"); // Отключить скроллинг
  } else {
    body.classList.remove("noscroll"); // Включить скроллинг
  }
});

// Закрытие меню при клике на ссылку
popup.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    popup.classList.remove("open"); // Закрыть меню
    hamb.classList.remove("active"); // Убрать анимацию
    body.classList.remove("noscroll"); // Включить скроллинг
  });
});