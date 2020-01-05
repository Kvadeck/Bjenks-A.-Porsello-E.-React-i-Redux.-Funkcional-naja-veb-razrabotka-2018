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

// Если вам уже приходилось пользоваться методами document.createElement или document.appendChild, значит, вы уже работали с API DOM. Обновлять или изменять отображаемые элементы DOM в JavaScript относительно легко. Но процесс вставки новых элементов идет крайне медленно.
// . Это значит следующее: если разработчики тщательно проработают все моменты внесения изменений в пользовательский интерфейс, то получат возможность повысить производительность приложений.

// React представляет собой библиотеку, разработанную для обновления за нас DOM браузера. Больше не придется переживать за сложности, сопряженные с созданием высокопроизводительных SPA, поскольку React может сделать все за нас. Используя React, мы не взаимодействуем с API DOM напрямую. Вместо этого мы имеем дело с виртуальной DOM или с набором инструкций, применяемых React для построения пользовательского интерфейса и организации взаимодействия с браузером. 

// Виртуальная DOM составлена из элементов React, которые концептуально очень похожи на элементы HTML, но фактически являются объектами JavaScript. Работать непосредственно с последними гораздо быстрее, чем работать с API DOM. Мы вносим изменения в объект JavaScript, в виртуальную DOM, и React отображает эти изменения для нас, используя API DOM наиболее эффективным образом.

// Элементы DOM и элементы React могут выглядеть одинаково, но на самом деле они совершенно разные. Последние являются описанием того, как должен выглядеть настоящий элемент DOM. Иными словами, элементы React представляют собой инструкции того,как должна быть создана DOM браузера. Элемент React для представления h1 можно создать, применив метод React.createElement: React.createElement("h1", null, "Baked Salmon")

// К новому элементу DOM свойства применяются аналогично: добавляются к тегу как атрибуты, а дочерний текст — как текст внутри элемента. Можно также заметить наличие атрибута data-reactroot, показывающего, что это корневой элемент вашего React-компонента
React.createElement("h1",
    { id: "recipe-0", 'data-type': "title" },
    "Baked Salmon"
)
    < h1 data - reactroot id = "recipe-0" data - type="title" > Baked Salmon</h1 >

    // Элемент data-reactroot всегда будет появляться в качестве атрибута корневого элемента вашего React-компонента.

    {
        $$typeof: Symbol(React.element),
        "type": "h1",
        "key": null,
        "ref": null,
        "props": { "children": "Baked Salmon" },
        "_owner": null,
        "_store": {}
    }

// Мы заглядываем в объект, возвращенный функцией React.createElement. Но создавать элементы подобного вида, набирая литералы вручную, вам никогда не придется. Создавать элементы React нужно всегда с помощью функции React.createElement или фабрик, речь о которых пойдет в конце данной главы.

// В библиотеке ReactDOM содержатся инструменты, необходимые для отображения элементов React в браузере. Именно в ReactDOM находится метод render, а также методы renderToString и renderToStaticMarkup, используемые на сервере.

// Отобразить элемент React, включая его дочерние элементы, в DOM можно с помощью метода ReactDOM.render. Элемент, который нужно отобразить, передается как первый аргумент, а в качестве второго используется целевой узел. В нем должен отобразиться элемент:

var dish = React.createElement("h1", null, "Baked Salmon")
ReactDOM.render(dish, document.getElementById('react-container'))

    // React добавляет элемент h1 к цели: react-container
    < body >
    <div id="react-container">
        <h1>Baked Salmon</h1>
    </div>
</body >

    // ReactDOM позволяет отображать в DOM единственный элемент. React помечает его как data-reactroot. Все остальные элементы React составляются внутри этого единственного элемента за счет использования вложенности элементов

    // Можно в качестве дочерних отобразить и другие элементы React, создавая тем самым дерево элементов. Именно поэтому мы используем такое понятие, как дерево компонентов. У дерева есть один корневой компонент, из которого произрастает множество ветвей.

    <ul>
        <li>1 lb Salmon</li>
        <li>1 cup Pine Nuts</li>
        <li>2 cups Butter Lettuce</li>
        <li>1 Yellow Squash</li>
        <li>1/2 cup Olive Oil</li>
        <li>3 cloves of Garlic</li>
    </ul>

// Неупорядоченный список в качестве элементов React
React.createElement(
    "ul",
    null,
    React.createElement("li", null, "1 lb Salmon"),
    React.createElement("li", null, "1 cup Pine Nuts"),
    React.createElement("li", null, "2 cups Butter Lettuce"),
    React.createElement("li", null, "1 Yellow Squash"),
    React.createElement("li", null, "1/2 cup Olive Oil"),
    React.createElement("li", null, "3 cloves of Garlic")
)

// Каждый дополнительный аргумент, отправляемый функции createElement, является еще одним дочерним элементом. React создает массив из таких элементов и устанавливает его в качестве значения для свойства props.children

// Получившийся в результате элемент React
{
    "type": "ul",
        "props": {
        "children": [
            { "type": "li", "props": { "children": "1 lb Salmon" } },
            { "type": "li", "props": { "children": "1 cup Pine Nuts" } },
            { "type": "li", "props": { "children": "2 cups Butter Lettuce" } },
            { "type": "li", "props": { "children": "1 Yellow Squash" } },
            { "type": "li", "props": { "children": "1/2 cup Olive Oil" } },
            { "type": "li", "props": { "children": "3 cloves of Garlic" } }
        ]
    }
}

// Дерево элементов React
React.createElement("section", { id: "baked-salmon" },
    React.createElement("h1", null, "Baked Salmon"),
    React.createElement("ul", { "className": "ingredients" },
        React.createElement("li", null, "1 lb Salmon"),
        React.createElement("li", null, "1 cup Pine Nuts"),
        React.createElement("li", null, "2 cups Butter Lettuce"),
        React.createElement("li", null, "1 Yellow Squash"),
        React.createElement("li", null, "1/2 cup Olive Oil"),
        React.createElement("li", null, "3 cloves of Garlic")
    ),

    React.createElement("section", { "className": "instructions" },
        React.createElement("h2", null, "Cooking Instructions"),
        React.createElement("p", null, "Preheat the oven to 350 degrees."),
        React.createElement("p", null,
            "Spread the olive oil around a glass baking dish."),
        React.createElement("p", null, "Add the salmon, garlic, and pine..."),
        React.createElement("p", null, "Bake for 15 minutes."),
        React.createElement("p", null, "Add the yellow squash and put..."),
        React.createElement("p", null, "Remove from oven and let cool for 15 ....")
    )
)

// В этом примере показано, как выглядит чистый код React. В конечном итоге в браузере запускается именно такой. Виртуальная DOM — древовидная структура из элементов React, берущих начало из единственного «корня». Элементы React являются инструкциями, которые библиотека React будет использовать, чтобы создать в браузере пользовательский интерфейс.

// Отображение элементов массива на элементы li
React.createElement(
    "ul",
    { className: "ingredients" },
    items.map(ingredient =>
        React.createElement("li", null, ingredient)
    )
)

// Добавление свойства key
React.createElement("ul", { className: "ingredients" },
    items.map((ingredient, i) =>
        React.createElement("li", { key: i }, ingredient)
    )
)

// В React каждая из этих частей описывается как компонент. Компоненты позволяют многократно применять одну и ту же структуру DOM для различных рецептов или наборов данных.

// Компонент React можно создать с помощью функции React.createClass, которая возвращает один элемент неупорядоченного списка, содержащий дочернюю запись списка для каждого ингредиента в массиве. Список ингредиентов в качестве компонента React
const IngredientsList = React.createClass({
    displayName: "IngredientsList",
    render() {
        return React.createElement("ul", { "className": "ingredients" },
            React.createElement("li", null, "1 lb Salmon"),
            React.createElement("li", null, "1 cup Pine Nuts"),
            React.createElement("li", null, "2 cups Butter Lettuce"),
            React.createElement("li", null, "1 Yellow Squash"),
            React.createElement("li", null, "1/2 cup Olive Oil"),
            React.createElement("li", null, "3 cloves of Garlic")
        )
    }
})
const list = React.createElement(IngredientsList, null, null)
ReactDOM.render(
    list,
    document.getElementById('react-container')
)

// Данные могут передаваться компонентам React в виде свойств. Многократно используемый список ингредиентов можно создать, передавая эти данные списку в виде массива:
const IngredientsList = React.createClass({
    displayName: "IngredientsList",
    render() {
        return React.createElement("ul", { className: "ingredients" },
            this.props.items.map((ingredient, i) =>
                React.createElement("li", { key: i }, ingredient)
            )
        )
    }
})
const items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
]
ReactDOM.render(
    React.createElement(IngredientsList, { items }, null),
    document.getElementById('react-container')
)

// Компоненты являются объектами. Они, как и классы, могут служить для инкапсуляции кода. Можно создать метод, отображающий одну запись списка, и воспользоваться им для построения всего списка.

// Применение специального метода
const IngredientsList = React.createClass({
    displayName: "IngredientsList",
    renderListItem(ingredient, i) {
        return React.createElement("li", { key: i }, ingredient)
    },
    render() {
        return React.createElement("ul", { className: "ingredients" },
            this.props.items.map(this.renderListItem)
        )
    }
})

// Одним из основных свойств, включенных в спецификацию ES6, является React.Component, абстрактный класс, который подходит для создания новых компонентов React. Специализированные компоненты могут создаваться путем наследования за счет расширения этого класса с помощью синтаксиса ES6.

// IngredientsList в качестве класса ES6
class IngredientsList extends React.Component {
    renderListItem(ingredient, i) {
        return React.createElement("li", { key: i }, ingredient)
    }
    render() {
        return React.createElement("ul", { className: "ingredients" },
            this.props.items.map(this.renderListItem)
        )
    }
}

// Функциональные компоненты, не имеющие состояния, являются функциями, а не объектами, так что у них нет области видимости this.

// Функциональные компоненты, не имеющие состояния, являются функциями, получающими свойства и возвращающими элемент DOM. Эти компоненты хорошо подходят для применения правил функционального программирования. Нужно стремиться сделать каждый такой компонент чистой функцией. Данные компоненты должны получать свойства и возвращать элемент DOM, не вызывая никаких побочных эффектов. Это позволяет добиваться простоты кода и существенно упрощает его тестирование.

// Но если нужно инкапсулировать функциональность или же получить область видимости, соответствующую применению this, то применить данные компоненты будет невозможно.

// Создание функционального компонента, не имеющего состояния
const IngredientsList = props =>
    React.createElement("ul", { className: "ingredients" },
        props.items.map((ingredient, i) =>
            React.createElement("li", { key: i }, ingredient)
        )
    )

// Деструктуризация аргумента свойств
const IngredientsList = ({ items }) =>
    React.createElement("ul", { className: "ingredients" },
        items.map((ingredient, i) =>
            React.createElement("li", { key: i }, ingredient)
        )
    )

// Функциональные компоненты, не имеющие состояния, делают синтаксис чище. Кроме того, специалисты Facebook намекнули, что в будущем эти компоненты могут обогнать по быстродействию код, в котором используется createClass или синтаксис класса ES6.