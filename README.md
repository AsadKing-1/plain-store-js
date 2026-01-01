# plain-store-js

plain-store-js — простой и предсказуемый глобальный store состояния
для vanilla JavaScript и TypeScript без фреймворков и зависимостей.

---

## Назначение

plain-store-js предназначен для управления состоянием в небольших проектах,
где не нужны React, Vue и сложные state-менеджеры.

Особенности:

- без фреймворков
- без зависимостей
- без middleware
- минимальный и явный API
- предсказуемое поведение

Подходит для:

- обычных HTML / CSS / JS проектов
- виджетов
- браузерных расширений
- учебных целей

## Быстрый старт

```ts
import { createStore } from "plain-store";

const store = createStore({ count: 0 });

store.subscribe((state) => {
  console.log(state.count);
});

store.set({ count: 1 });
```

---

## Основная идея

Состояние — это обычный объект JavaScript.

```ts
{
  count: 0,
  theme: "dark"
}
```

Каждое обновление:

- создаёт новый объект состояния
- не мутирует старое состояние
- уведомляет всех подписчиков

---

## API

---

## createStore(initialState)

Создаёт новое глобальное хранилище состояния.

```ts
const store = createStore({ count: 0 });
```

initialState — объект с начальным состоянием.

Метод возвращает объект store с методами управления состоянием.

---

## store.getState()

Возвращает текущее состояние.

```ts
const state = store.getState();
console.log(state.count);
```

Используется, когда нужно:

- получить актуальное состояние
- прочитать данные вне подписки
- подготовить новое состояние перед обновлением

---

## store.set(partialState)

Частично обновляет состояние.

```ts
store.set({ count: 5 });
```

Если текущее состояние было:

```ts
{ count: 0, theme: "dark" }
```

После обновления станет:

```ts
{ count: 5, theme: "dark" }
```

Правила:

- обновляются только переданные поля
- остальные поля сохраняются
- создаётся новый объект состояния
- вызываются все подписчики

---

## store.subscribe(listener)

Подписывает функцию на изменения состояния.

```ts
const unsubscribe = store.subscribe((state) => {
  console.log("Новое состояние:", state);
});
```

listener:

- вызывается при каждом изменении состояния
- получает новое состояние аргументом

Метод возвращает функцию отписки.

---

## Отписка от изменений

```ts
unsubscribe();
```

После вызова:

- listener больше не вызывается
- store продолжает работать

---

## store.select(selector)

Позволяет выбрать часть состояния.

```ts
const count = store.select((state) => state.count);
```

selector:

- функция, принимающая состояние
- возвращает выбранное значение
- не создаёт подписку
- используется для удобного чтения данных

---

## Пример с UI (кликер)

```ts
const store = createStore({ count: 0 });

const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");

store.subscribe((state) => {
  countEl.textContent = state.count;
});

incBtn.onclick = () => {
  store.set({ count: store.getState().count + 1 });
};

decBtn.onclick = () => {
  store.set({ count: store.getState().count - 1 });
};
```

---

## Ограничения

plain-store-js не содержит:

- middleware
- async логики
- persistence
- devtools

Библиотека является минимальным ядром для управления состоянием.

## Статус проекта

Версия: v0.1.1  
API минимальный и стабильный.

---

## Лицензия

MIT
