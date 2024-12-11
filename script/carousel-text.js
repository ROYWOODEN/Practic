function toggleText(button) {
    const hiddenText = button.nextElementSibling; // Найти скрытый текст рядом с кнопкой
    if (hiddenText.style.display === "none") {
      hiddenText.style.display = "block"; // Показать текст
      button.textContent = "Скрыть"; // Изменить текст кнопки
    } else {
      hiddenText.style.display = "none"; // Скрыть текст
      button.textContent = "Подробнее"; // Вернуть текст кнопки
    }
  }



  // Логика для кнопки "Подробнее"
function toggleText(button) {
  const hiddenText = button.nextElementSibling; // Найти текст рядом с кнопкой
  const isVisible = hiddenText.style.display === 'block'; // Проверить текущее состояние
  
  if (isVisible) {
    hiddenText.style.display = 'none'; // Скрыть текст
    button.textContent = 'Подробнее'; // Изменить текст кнопки
  } else {
    hiddenText.style.display = 'block'; // Показать текст
    button.textContent = 'Скрыть'; // Изменить текст кнопки
  }
}