import { createStore } from "../../dist/index.js";

// Создаем Хранилище с начальными Данными

const store = createStore({ count: 0 });

// Получаем Элементы из DOM
const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");

// Подписываемся на Изменения в Хранилище и Обновляем UI
store.subscribe((state) => {
  countEl.textContent = state.count;
});

// Обработчики Кнопок для Изменения Состояния
incBtn.addEventListener("click", () => {
  store.set({ count: store.getState().count + 1 });
});
decBtn.addEventListener("click", () => {
  store.set({ count: store.getState().count - 1 });
});
