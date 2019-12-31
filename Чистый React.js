// Чтобы работать с React в браузере, нужно включить две библиотеки: React и ReactDOM. Первая представляет собой библиотеку для создания представлений, а вторая — библиотеку для фактического отображения пользовательского интерфейса в браузере.

// Пример 4.1. Настройка HTML-документа с использованием React
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8">
// <title>Pure React Samples</title>
// </head>
// <body>
//     <!-- Целевой контейнер -->
//     <div class="react-container"></div>
//     <!-- Библиотеки React и ReactDOM -->
//     <script src="https://unpkg.com/react@15.4.2/dist/react.js"></script>
//     <script src="https://unpkg.com/react-dom@15.4.2/dist/react-dom.js"></script>
//  <script>
//     // Чистый код React и JavaScript
//  </script>
// </body>
// </html>

//  Одностраничное приложение (англ. single page application, SPA) — это веб-приложение или веб-сайт, использующий единственный HTML-документ как оболочку для всех веб-страниц и организующий взаимодействие с пользователем через динамически подгружаемые HTML, CSS, JavaScript[1], обычно посредством AJAX.

// Если вам уже приходилось пользоваться методами document.createElement или document.appendChild, значит, вы уже работали с API DOM. Обновлять или изменять отображаемые элементы DOM в JavaScript относительно легко. Но процесс вставки новых элементов идет крайне медленно2
// . Это значит следующее: если разработчики тщательно проработают все моменты внесения изменений в пользовательский интерфейс, то получат возможность повысить производительность приложений.

// React представляет собой библиотеку, разработанную для обновления за нас DOM браузера. Больше не придется переживать за сложности, сопряженные с созданием высокопроизводительных SPA, поскольку React может сделать все за нас. Используя React, мы не взаимодействуем с API DOM напрямую. Вместо этого мы имеем дело с виртуальной DOM или с набором инструкций, применяемых React для построения пользовательского интерфейса и организации взаимодействия с браузером. 

// Виртуальная DOM составлена из элементов React, которые концептуально очень похожи на элементы HTML, но фактически являются объектами JavaScript. Работать непосредственно с последними гораздо быстрее, чем работать с API DOM. Мы вносим изменения в объект JavaScript, в виртуальную DOM, и React отображает эти изменения для нас, используя API DOM наиболее эффективным образом.

// Элементы DOM и элементы React могут выглядеть одинаково, но на самом деле они совершенно разные. Последние являются описанием того, как должен выглядеть настоящий элемент DOM. Иными словами, элементы React представляют собой инструкции того, как
// должна быть создана DOM браузера. Элемент React для представления h1 можно создать, применив метод React.createElement:
// React.createElement("h1", null, "Baked Salmon")

// К новому элементу DOM свойства применяются аналогично: добавляются к тегу как атрибуты, а дочерний текст — как текст внутри элемента. Можно также заметить наличие атрибута data-reactroot, показывающего, что это корневой элемент вашего React-компонента
React.createElement("h1",
 {id: "recipe-0", 'data-type': "title"},
 "Baked Salmon"
)
<h1 data-reactroot id="recipe-0" data-type="title">Baked Salmon</h1>

