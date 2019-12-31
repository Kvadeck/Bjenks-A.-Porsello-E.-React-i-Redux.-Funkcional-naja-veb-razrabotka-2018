// Написать Лехе задачу по создании функции для создании копии объекта с измененными данными.

// Умение разбираться в основных понятиях функционального программирования будет способствовать
// повышению ваших знаний по структурированию React-приложений.

// Поскольку функции являются переменными, их можно добавлять к объектам:
const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message)
    }
}
obj.log(obj.message)
// Они, как и переменные, могут добавляться к объектам

// Функции в JavaScript можно также добавлять к массивам:
const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
]
messages[1](messages[0]) // Они могут вставляться в массивы
messages[3](messages[2]) // как переменные

// Функции, подобно всем другим переменным, могут отправляться другим функциям в качестве аргументов:
const insideFn = logger =>
    logger("They can be sent to other functions as arguments");
insideFn(message => console.log(message))
// Они могут отправляться другим функциям в качестве аргументов

// Используя синтаксис ES6, можно дать описание точно такой же функции высшего порядка createScream с помощью стрелок:
const createScream = logger => message =>
    logger(message.toUpperCase() + "!!!")

// Функциональное программирование является частью более обширной парадигмы: декларативного программирования. Оно представляет собой отдельный стиль программирования. При его соблюдении приложения структурированы таким образом: описание того, что должно случиться, приоритетнее определения того, как это должно случиться.

// Императивный подход к решению этой задачи:
var string = "This is the midday show with Cheryl Waters";
var urlFriendly = "";
for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
        urlFriendly += "-";
    } else {
        urlFriendly += string[i];
    }
}
console.log(urlFriendly);

// Декларативный подход к решению той же самой задачи:
const string = "This is the mid day show with Cheryl Waters"
const urlFriendly = string.replace(/ /g, "-")
console.log(urlFriendly)

// В декларативных программах то, что должно произойти, описывается
// самим синтаксисом, а подробности (как это должно произойти) абстрагируются.

// Изменяемость предполагает возможность внесения изменений, следовательно, неизменяемость такую возможность не предоставляет. В функциональной программе данные являются неизменяемыми. Они никогда не изменяются.

// Для понимания сути работы неизменяемости посмотрим, что означает изменение данных. Рассмотрим объект, представляющий цвет lawn (зеленая лужайка):

let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
}

// Можно создать функцию, оценивающую цвета, и использовать ее для изменения рейтинга объекта color:

function rateColor(color, rating) {
    color.rating = rating
    return color
}
console.log(rateColor(color_lawn, 5).rating) // 5
console.log(color_lawn.rating) // 5

// Функцию rateColor можно переписать, чтобы она не наносила вред оригиналу (объекту color):
var rateColor = function (color, rating) {
    return Object.assign({}, color, { rating: rating })
}
console.log(rateColor(color_lawn, 5).rating) // 5
console.log(color_lawn.rating) // 4

// Здесь для изменения рейтинга цвета использовался метод Object.assign. Это «копировальная машина». Метод получает пустой объект, копирует в него цвет и переписывает рейтинг, применяя копию.

// Точно такую же функцию можно создать с помощью стрелочной функции ES6 и оператора распространения объекта ES7.
const rateColor = (color, rating) =>
    ({
        ...color,
        rating
    })

// Рассмотрим массив названий цветов:
let list = [
    { title: "Rad Red" },
    { title: "Lawn" },
    { title: "Party Pink" }
]
// Можно создать функцию, которая будет добавлять цвета к массиву, используя
// Array.push:
var addColor = function (title, colors) {
    colors.push({ title: title })
    return colors;
}
console.log(addColor("Glam Green", list).length) // 4
console.log(list.length) // 4

// Но Array.push не является неизменяемой функцией. Это функция addColor изменяет исходный массив путем добавления к нему еще одного элемента.

// Чтобы сохранить неизменяемость массива colors, нужно воспользоваться функцией Array.concat:
const addColor = (title, array) => array.concat({ title })
console.log(addColor("Glam Green", list).length) // 4
console.log(list.length) // 3

// Функция Array.concat объединяет массивы. В данном случае она получает новый
// объект с новым названием цвета и добавляет его к копии исходного массива

// Вот как выглядит новый JavaScript эквивалент предыдущей функции addColor:
const addColor = (title, list) => [...list, { title }]

// Чистой функцией называют функцию, которая возвращает значение, вычисляемое на основе ее аргументов. Чистые функции получают как минимум один аргумент и всегда возвращают значение или другую функцию. Эти функции не имеют побочных эффектов не устанавливают значений глобальных переменных и не изменяют ничего, что относится к состоянию приложения.

// Для понимания того, что такое чистые функции, сначала посмотрим на функцию с побочным эффектом:
var frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
}
function selfEducate() {
    frederick.canRead = true
    frederick.canWrite = true
    return frederick
}
selfEducate()
console.log(frederick)
// {name: "Frederick Douglass", canRead: true, canWrite: true}
// Функцию selfEducate нельзя считать чистой.

// Чистая функция получается только в том случае, если передаваемые ей аргументы можно считать неизменяемыми.
// Дадим этой функции аргумент:
const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
}
const selfEducate = person =>
    ({
        ...person,
        canRead: true,
        canWrite: true
    })
console.log(selfEducate(frederick))
console.log(frederick)
// {name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: false, canWrite: false}

// В React пользовательский интерфейс (UI) выражается с помощью чистых функций.
const Header = (props) => <h1>{props.title}</h1>

// При написании функций старайтесь следовать трем правилам.
// 1. Функция должна получать как минимум один аргумент.
// 2. Функция должна возвращать значение или другую функцию.
// 3. Функция не должна вносить какие-либо изменения в переданные ей аргументы

// Функциональное программирование построено на преобразовании данных из одной формы в другую. Преобразованные копии будут создаваться с помощью функций. Эти функции снизят степень императивности кода, сделав его более простым.

// Для профессионального овладения функциональным JavaScript нужно освоить две ключевые функции: Array.map
// и Array.reduce.

// Если нужна функция, создающая новый массив из названий гимназий, начинающихся на букву W, то можно воспользоваться методом Array.filter:
const schools = [
    "Yorktown",
    "Washington & Lee",
    "Wakefield"
]
const wSchools = schools.filter(school => school[0] === "W")
console.log(wSchools)
// ["Washington & Lee", "Wakefield"]

// Функция Array.filter встроена в JavaScript и создает новый массив из массиваисточника. В качестве своего единственного аргумента она получает предикат. Так называется функция, которая всегда возвращает булево значение: true или false. Функция Array.filter вызывает этот предикат по одному разу для каждого элемента массива.

// В следующем фрагменте кода функция cutSchool возвращает новый массив, не пропуская через фильтр указанные названия гимназий:
const cutSchool = (cut, list) =>
    list.filter(school => school !== cut)
console.log(cutSchool("Washington & Lee", schools).join(" * "))
// "Yorktown * Wakefield"
console.log(schools.join("\n"))
// Yorktown
// Washington & Lee
// Wakefield

// Еще одной функцией для работы с массивами, имеющей большое значение для функционального программирования, является Array.map. Вместо предиката метод Array.map получает в качестве своего аргумента функцию. Эта функция будет вызываться по одному разу для каждого элемента массива, и то, что она возвращает, будет добавлено к новому массиву:

const highSchools = schools.map(school => `${school} High School`)
console.log(highSchools.join("\n"))
// Yorktown High School
// Washington & Lee High School
// Wakefield High School
console.log(schools.join("\n"))
// Yorktown
// Washington & Lee
// Wakefield

// Если нужно создать чистую функцию, изменяющую один объект в массив объектов, то для этого также может использоваться функция map.

const editName = (oldName, name, arr) =>
    arr.map(item => {
        if (item.name === oldName) {
            return {
                ...item,
                name
            }
        } else {
            return item
        }
    })
// Short version
const editName = (oldName, name, arr) =>
    arr.map(item => (item.name === oldName) ?
        ({ ...item, name }) :
        item
    )

// Если нужно преобразовать массив в объект, можно воспользоваться методом Array.map в сочетании с Object.keys. Последний может использоваться для возвращения из объекта массива ключей. Предположим, что нужно преобразовать объект schools в массив schools:
const schools = {
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
}
const schoolArray = Object.keys(schools).map(key =>
    ({
        name: key,
        wins: schools[key]
    })
)

// Для преобразования массива в любое значение, включая число, строку, булево значение, объект или даже функцию, могут использоваться функции reduce и reduceRight. Предположим, что в массиве из чисел нужно найти самое большое число. Массив нужно преобразовать в число, для чего можно воспользоваться функцией reduce:
const ages = [21, 18, 42, 40, 64, 63, 34];
const maxAge = ages.reduce((max, age) => {
    console.log(`${age} > ${max} = ${age > max}`);
    if (age > max) {
        return age
    } else {
        return max
    }
}, 0)
console.log('maxAge', maxAge);

// Short version
const max = ages.reduce(
    (max, value) => (value > max) ? value : max,
    0
)

// Иногда нам нужно превратить массив в объект. В следующем примере функция reduce используется для преобразования массива, содержащего названия цветов, в хеш:
const colors = [
    {
        id: '-xekare',
        title: "rad red",
        rating: 3
    },
    {
        id: '-jbwsof',
        title: "big blue",
        rating: 2
    },
    {
        id: '-prigbj',
        title: "grizzly grey",
        rating: 5
    },
    {
        id: '-ryhbhsl',
        title: "banana",
        rating: 1
    }
]

const hashColors = colors.reduce(
    (hash, { id, title, rating }) => {
        hash[id] = { title, rating }
        return hash
    },
    {}
)

// Рассмотрим сведение массива с несколькими экземплярами одного и того же значения в массив различных значений. Для выполнения этой задачи можно воспользоваться методом reduce:
const colors = ["red", "red", "green", "blue", "green"];
const distinctColors = colors.reduce(
    (distinct, color) =>
        (distinct.indexOf(color) !== -1)
            ? distinct
            : [...distinct, color],
    []
)
console.log(distinctColors)
// ["red", "green", "blue"]

// Использование функций высшего порядка также играет важную роль для функционального программирования. Эти функции уже упоминались и даже кое-где применялись в данной главе. Они способны манипулировать другими функциями и могут получать функции в качестве аргументов, или возвращать функции, или делать и то и другое.

// Посмотрим на способ реализации функции высшего порядка. В следующем примере будет создана функция обратного вызова invokeIf, проверяющая условие и вызывающая функцию обратного вызова, когда условие вычисляется в true, и другую функцию обратного вызова, когда это условие вычисляется в false:

const invokeIf = (condition, fnTrue, fnFalse) =>
    (condition) ? fnTrue() : fnFalse()
const showWelcome = () =>
    console.log("Welcome!!!")
const showUnauthorized = () =>
    console.log("Unauthorized!!!")
invokeIf(true, showWelcome, showUnauthorized) // "Welcome"
invokeIf(false, showWelcome, showUnauthorized) // "Unauthorized"

// Каррирование — функциональная технология, для которой привлекается использование функций высшего порядка. При каррировании практикуется удержание отдельных значений, необходимых для завершения операции, до тех пор пока чуть позже не сможет быть предоставлено все остальное. Это достигается путем применения функции, возвращающей другую функцию, называемую каррированной.

// Пример каррирования. Функция userLogs зависит от некой информации (от имени пользователя) и возвращает функцию,
// которая может использоваться однократно и повторно, при доступности всей остальной информации (сообщения). В данном примере все регистрационные сообщения будут предваряться связанным с ними именем пользователя.

// Рекурсией называется технология создания функций, вызывающих самих себя. Зачастую, сталкиваясь с трудностями, связанными с циклами, можно вместо цикла воспользоваться рекурсивной функцией.

// Функция обратного отсчета countdown является рекурсивной:

const countdown = (value, fn) => {
    fn(value)
    return (value > 0) ? countdown(value - 1, fn) : value
}

// Эта модифицированная версия функции countdown может использоваться для создания таймера с обратным отсчетом:
const countdown = (value, fn, delay = 1000) => {
    fn(value)
    return (value > 0) ?
        setTimeout(() => countdown(value - 1, fn), delay) :
        value
}
const log = value => console.log(value)
countdown(10, log);

// Рекурсия применена для глубокого обхода объекта с целью извлечения вложенного значения:
var dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullname: {
                first: "Dan",
                last: "Deacon"
            }
        }
    }
}
deepPick("type", dan); // "person"
deepPick("data.info.fullname.first", dan); // "Dan"

const deepPick = (fields, object = {}) => {
    const [first, ...remaining] = fields.split(".")
    return (remaining.length) ?
        deepPick(remaining.join("."), object[first]) :
        object[first]
}

// Функция deepPick собирается либо возвратить значение, либо вызвать саму себя, пока в конце концов не возвратит значение. Сначала эта функция разбивает записанные с применением точек поля на массив и для отделения первого значения от оставшихся использует деструктуризацию массива. Если значения остались, то deepPick вызывает саму себя со слегка отличающимися данными, позволяя углубиться еще на один уровень. Эта функция продолжает вызывать саму себя, пока в строке полей не останется точек; это будет означать, что полей больше не осталось. В следующем фрагменте кода можно увидеть, как по мере итераций, выполняемых функцией deepPick, изменяются значения для first, remaining и object[first]:

deepPick("data.info.fullname.first", dan); // "Deacon"
// Первая итерация
// first = "data"
// remaining.join(".") = "info.fullname.first"
// object[first] = { gender: "male", {info} }
// Вторая итерация
// first = "info"
// remaining.join(".") = "fullname.first"
// object[first] = {id: 22, {fullname}}
// Третья итерация
// first = "fullname"
// remaining.join("." = "first"
// object[first] = {first: "Dan", last: "Deacon" }
// Наконец...
// first = "first"
// remaining.length = 0
// object[first] = "Deacon

// В функциональных программах логика разбивается на небольшие чистые функции, нацеленные на решение конкретных задач. Со временем эти небольшие функции требуется собрать воедино. В частности, может понадобиться объединить их, вызвать последовательно или параллельно, скомпоновать в более крупные функции, пока в конечном итоге не получится приложение.

// При составлении композиций используется множество различных реализаций, шаблонов и технологий. Одним из, возможно, уже известных вам приемов является выстраивание цепочки. Функции в JavaScript могут быть составлены в цепочку с помощью системы записи, применяющей точки, чтобы действие выполнялось над значением, возвращенным предыдущей функцией.

// Следовательно, для преобразования строки методы replace можно выстроить в цепочку с применением точечной нотации.
const template = "hh:mm:ss tt"
const clockTime = template.replace("hh", "03")
    .replace("mm", "33")
    .replace("ss", "33")
    .replace("tt", "PM")
console.log(clockTime)
// "03:33:33 PM"

// Составление в цепочку — один из методов создания композиции, но наряду с ним
// существуют и другие. Целью составления композиции является «создание функции более высокого порядка путем объединения более простых функций».

const both = date => appendAMPM(civilianHours(date))
// Функция both относится к функциям, пропускающим значение по конвейеру через две отдельные функции. Данные на выходе civilianHours становятся входом для appendAMPM, и отсчет времени можно изменить, используя обе эти функции,
// объединенные в одну. Но в этом синтаксисе трудно разобраться, а следовательно, могут возникнуть осложнения с его поддержкой и масштабированием.

// Более рациональный подход предусматривает создание функции высшего порядка, чем можно воспользоваться для составления композиций из функций и помещения их в более крупные функции.
const both = compose(
    civilianHours,
    appendAMPM
)
both(new Date())

// Функция-композиция относится к функциям высшего порядка. Она получает функции в качестве аргументов, а возвращает одно значение.

// Функция compose получает в качестве аргументов функции и возвращает одну функцию. В этой реализации оператор распространения использован для превращения этих функций-аргументов в массив по имени fns. Затем возвращается функция, ожидающая один аргумент, arg. Когда вызывается эта функция, массив fns выстраивается в конвейер, начинающийся с аргумента, который нужно пропустить через функции. Аргумент становится исходным значением для composed, а затем при каждой итерации возвращается урезанная функция обратного вызова. Обратите внимание на то, что функция обратного вызова получает два аргумента: composed и функцию f. Каждая функция вызывается с аргументом composed, являющимся результатом, полученным на выходе предыдущей функции. В конечном итоге будет вызвана последняя функция и возвращен последний результат.
const compose = (...fns) =>
    (arg) =>
        fns.reduce(
            (composed, f) => f(composed),
            arg
        )

// Деклоративная версия тикающих через консоль часов.
const compose = (...fns) =>
 (arg) =>
 fns.reduce(
 (composed, f) => f(composed),
 arg
 )

const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

const serializeClockTime = date =>
 ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
 })

 const civilianHours = clockTime =>
 ({
    ...clockTime,
    hours: (clockTime.hours > 12) ?
    clockTime.hours - 12 :
    clockTime.hours
 })

 const appendAMPM = clockTime =>
 ({
 ...clockTime,
 ampm: (clockTime.hours >= 12) ? "PM" : "AM"
 })

 const display = target => time => target(time)

 const formatClock = format =>
    time =>
        format.replace("hh", time.hours)
                .replace("mm", time.minutes)
                .replace("ss", time.seconds)
                .replace("tt", time.ampm)

const prependZero = key => clockTime =>
({
    ...clockTime,
    [key]: (clockTime[key] < 10) ?
    "0" + clockTime[key] :
    clockTime[key]
})

const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime)

const doubleDigits = civilianTime =>
 compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
 )(civilianTime)

const startTicking = () =>
    setInterval(
    compose(
        clear,
        getCurrentTime,
        serializeClockTime,
        convertToCivilianTime,
        doubleDigits,
        formatClock("hh:mm:ss tt"),
        display(log)
    ),
    oneSecond()
 )
startTicking()