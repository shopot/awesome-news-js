# News-JS Example 🍰 Feature-Sliced Design

## Описание

Архитектурная методология для фронтенд проектов

https://feature-sliced.design/ru/

Минимальный пример на JavaScript без использования фреймворков и библиотек, на примере проекта [Migration: News API to TS](https://github.com/rolling-scopes-school/news-JS/) из RS School.

## Структура проекта

### Layers - Слои

Слои - это первый уровень организационной иерархии в Feature-Sliced Design.

Приложение состоит из 6-ти слоёв, организованных вертикально, расположенных от наибольшей ответственности и зависимости
к наименьшей:

```shell
src/
|
+-- app       # Приложение
|
+-- pages     # Страницы
|
+-- widgets   # Виджеты 
|
+-- features  # Фичи/функции
|
+-- entities  # Сущности 
|
+-- shared    # Общий 
```

| Layer    | Description                                                                                                                                             |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| app      | Приложение - Всё, что касается всего приложения, как в техническом смысле (например, провайдеры контекста), так и в бизнес-смысле (например, аналитика) |
| pages    | Страницы - Полноценные страницы                                                                                                                         |
| widgets  | Виджеты - Самодостаточные блоки пользовательского интерфейса возникли из композиции единиц более низкого уровня, таких как сущности и функции           |
| features | Фичи/функции - Действия, которые пользователь может совершать в приложении для взаимодействия с бизнес-сущностями                                       |
| entities | Сущности - Понятия из реального мира, которые вместе образуют суть проекта.                                                                             |
| shared   | Общий - Изолированные модули, компоненты и абстракции, отдельные от специфики проекта или бизнеса.                                                      |

Слои состоят из слайсов — сильно сцепленных групп модулей. Feature-Sliced Design поддерживает низкую связанность, поэтому зависимости между слайсами регулируются правилом импортов для слоёв:

📌 Модуль в слайсе может импортировать другие слайсы только в том случае, если они расположены на слоях строго ниже.

### Slices - Слайсы

Слайсы - это второй уровень в организационной иерархии Feature-Sliced Design. Их основное назначение - группировать код
по его значению для продукта, бизнеса или просто приложения.

Имена слайсов не стандартизированы, поскольку они напрямую определяются бизнес-областью вашего приложения.

```shell
src/entities/
|
+-- news    # Определение статических элементов UI, хранилища данных и операций CRUD
|
+-- source  # Определение статических элементов UI, хранилища данных и операций CRUD

src/features
|
+-- source  # Интерактивные элементы UI, локальные состояния или запросы к API,
            # которые позволяют выполнять действия
```

Слои `shared` и `app` не могут содержать слайсов.

📌 Каждый слайс (и сегмент на слоях, не имеющих слайсов) должен содержать определение публичного API.

📌 Модули вне этого слайса/сегмента могут ссылаться только на публичный API, а не на внутреннюю файловую структуру этого слайса/сегмента.

### Segments - Сегменты

Сегменты - это третий и последний уровень в организационной иерархии, их цель - группировать код по его технической
природе.

Существует несколько стандартизированных названий сегментов:

- `ui` - компоненты пользовательского интерфейса, функции форматирования данных
- `model` - бизнес-логика и хранилища данных, функции для обработки этих данных
- `lib` - вспомогательный инфраструктурный код
- `api` - взаимодействие с внешними API, API-методы бэкенда

```shell
src/entities/news/
|
+-- api       # API-методы, в том числе использующие API-клиент из shared
|
+-- model     # Хранилище объектов этой сущности и функции для обработки. 
|
+-- ui        # Скелет бизнес-сущности со слотами для интерактивных элементов
|
+-- index.ts  # Public API
```

Другие сегменты допускаются, но должны создаваться только по необходимости. Наиболее распространенными местами для
других сегментов являются слои App и Shared, где срезы не имеют смысла.

### Общее

Точка входа (entry point), вместо main.ts

```shell
src/
|
+-- app/index.ts
````

## Установка

```shell
git clone https://github.com/shopot/awesome-news-js.git

cd awesome-news-js

git checkout fsd

npm install
```

## Запуск приложения

```shell
npm run dev
```
