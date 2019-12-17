// Значение переменной, объявленной константой, переопределить нельзя, и при
// подобной попытке в консоль будет выдана ошибка
const pizza = true;
pizza = false;

// При создании переменной внутри блока if-else ее области видимости этим блоком
// не ограничиваются:
var topic = "JavaScript";
if (topic) {
  var topic = "React";
  console.log("block", topic); // block React
}
console.log("global", topic); // global React

// Используя ключевое слово let, можно ограничить области видимости переменной
// любым блоком кода. Применение let защищает значение глобальной переменной:
var topic = "JavaScript";
if (topic) {
  let topic = "React";
  console.log("block", topic); // React
}
console.log("global", topic); // JavaScript

// Применяя шаблон, можно создать одну строку и вставить значения переменных,
// заключив их в конструкцию ${ }:
console.log(`${lastName}, ${firstName} ${middleName}`);

// Если функции favoriteActivity не предоставить аргументы, то она отработает без
// сбоев, воспользовавшись значениями по умолчанию. Аргументы по умолчанию могут быть любого типа, а не просто строками:
var defaultPerson = {
  name: {
    first: "Shane",
    last: "McConkey"
  },
  favActivity: "skiing"
};
function logActivity(p = defaultPerson) {
  console.log(`${p.name.first} loves ${p.favActivity}`);
}

// Этот код выполняется правильно, и обращения можно объединить через запятые.
// Но об области видимости нужно помнить всегда. Стрелочные функции не изолируют область видимости this:
var tahoe = {
  resorts: ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"],
  print: (delay = 1000) => {
    setTimeout(() => {
      console.log(this.resorts.join(","));
    }, delay);
  }
};

// Транспиляцию JavaScript можно выполнить непосредственно в браузере, используя встраиваемый транспилятор Babel. Нужно просто включить файл browser.js,
// и любой сценарий, имеющий указание типа type="text/babel", будет преобразован
// (хотя текущая версия Babel имеет порядковый номер 6, работать будет только
// CDN-сеть для Babel):
<script
 src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.js">
</script>
<script src="script.js" type="text/babel"></script>

// Рассмотрим показанный ниже объект sandwich. У него четыре ключа, но нам нужно
// задействовать значения только двух из них. Для bread и meat можно задать область
// видимости для локального применения:
var sandwich = {
 bread: "dutch crunch",
 meat: "tuna",
 cheese: "swiss",
 toppings: ["lettuce", "tomato", "mustard"]
}
var {bread, meat} = sandwich

console.log(bread, meat) // dutch crunch tuna

// Деструктурировать можно также поступающие аргументы функций. Рассмотрим
// следующую функцию, которая будет регистрировать человека по имени, причисляя его к лордам:
var lordify = regularPerson => {
 console.log(`${regularPerson.firstname} of Canterbury`)
}
var regularPerson = {
 firstname: "Bill",
 lastname: "Wilson"
}
lordify(regularPerson) // Bill of Canterbury

// Вместо того чтобы использовать синтаксис точечной нотации для проникновения в объект, можно деструктурировать те значения, которые нам нужно извлечь
// из элемента regularPerson:
var lordify = ({firstname}) => {
 console.log(`${firstname} of Canterbury`)
}
lordify(regularPerson) // Bill of Canterbury

// Используя соответствие списку с применением запятых, можно также пропустить
// ненужные значения. Соответствие происходит, когда запятые ставятся вместо тех
// элементов, которые должны быть пропущены. Применяя тот же самый массив, можно получить доступ к последнему значению, заменив первые два значения запятыми:
var [,,thirdResort] = ["Kirkwood", "Squaw", "Alpine"]
console.log(thirdResort) // Alpine

// Расширение объектных литералов является противоположностью деструктурирования. Это процесс реструктурирования или воссоединения. С его помощью можно
// превратить в объект переменные из глобальной области видимости:
var name = "Tallac"
var elevation = 9738
var funHike = {name,elevation}
console.log(funHike) // {name: "Tallac", elevation: 9738}

// При определении методов объекта больше не нужно прибегать к ключевому слову
// function
const skier = {
    name,
    sound,
    powderYell() {
    let yell = this.sound.toUpperCase()
    console.log(`${yell} ${yell} ${yell}!!!`)
    },
    speed(mph) {
    this.speed = mph
    console.log('speed:', mph)
    }
}

// Во-первых, позволяет объединять содержимое массивов. Например, если есть два массива, то можно создать третий, объединяющий их в один:
var peaks = ["Tallac", "Ralston", "Rose"]
var canyons = ["Ward", "Blackwood"]
var tahoe = [...peaks, ...canyons]
console.log(tahoe.join(', ')) // Tallac, Ralston, Rose, Ward, Blackwood

// Поменять порядок следования
// элементов на обратный в сочетании с деструктурированием массива можно с помощью метода Array.reverse:
var peaks = ["Tallac", "Ralston", "Rose"]
var [last] = peaks.reverse()
console.log(last) // Rose
console.log(peaks.join(', ')) // Rose, Ralston, Tallac

// В мире, где используется оператор, не нужно заставлять мутировать исходный массив; можно создать копию, а затем применить к ней реверсирование:
var peaks = ["Tallac", "Ralston", "Rose"]
var [last] = [...peaks].reverse()
console.log(last) // Rose
console.log(peaks.join(', ')) // Tallac, Ralston, Rose

// Оператор распространения может применяться и для объектов. Действие аналогично его использованию с массивами. В следующем примере будет показан тот же способ, что и при объединении двух массивов в третий, но вместо массивов будут применяться объекты:
var morning = {
 breakfast: "oatmeal",
 lunch: "peanut butter and jelly"
}
var dinner = "mac and cheese"
var backpackingMeals = {
 ...morning,
 dinner
}
console.log(backpackingMeals) // {breakfast: "oatmeal", lunch: "peanut butter and jelly", dinner: "mac and cheese"}

// Функция getFakeMembers возвращает новый промис. Промис делает запрос к API.
// Если он завершается удачно, то данные будут загружены. В противном случае выдается ошибка:
const getFakeMembers = count => new Promise((resolves, rejects) => {
 const api = `https://api.randomuser.me/?nat=US&results=${count}`
 const request = new XMLHttpRequest()
 request.open('GET', api)
 request.onload = () =>
 (request.status === 200) ?
 resolves(JSON.parse(request.response).results) :
 reject(Error(request.statusText))
 request.onerror = (err) => rejects(err)
 request.send()
})

// Функция then может быть встроена в цепочку для выполнения каких-либо действий после выполнения промиса. Это называется композицией. Кроме того, для обработки ошибок служит дополнительная функция
// обратного вызова:
getFakeMembers(5).then(
 members => console.log(members),
 err => console.error(
 new Error("cannot load members from randomuser.me"))
)

// То новый синтаксис приобретает более определенный смысл:
class Vacation {
 constructor(destination, length) {
 this.destination = destination
 this.length = length
 }
 print() {
 console.log(`${this.destination} will take ${this.length} days.`)
 }
}
const trip = new Vacation("Santiago, Chile", 7);
console.log(trip.print()); // Chile will take 7 days.

// Например, чтобы добавить экипировку (gear), класс Vacation можно расширить классом Expedition:
class Expedition extends Vacation {
 constructor(destination, length, gear) {
 super(destination, length)
 this.gear = gear
 }
 print() {
 super.print()
 console.log(`Bring your ${this.gear.join(" and your ")}`)
 }
}

// Ключевое слово export может использоваться для экспортирования любого типа
// JavaScript, который будет применяться в другом модуле. В данном примере экспортируются функции print и log
export const print(message) => log(message, new Date());
export const log(message, timestamp) =>{console.log(`${timestamp.toString()}: ${message}`}

//  Иногда может потребоваться экспортировать из модуля только одну переменную.
//  В таких случаях можно воспользоваться инструкцией export default
const freel = new Expedition("Mt. Freel", 2, ["water", "snack"])
export default freel

// В модулях с несколькими экспортируемыми элементами можно обратиться
// к деструктурированию объектов. Модули, в которых применяется export default,
// импортируются в одну переменную:
import { print, log } from './text-helpers'
import freel from './mt-freel'
print('printing a message')
log('logging a message')
freel.print()

// Для переменных модуля можно задать локальную область видимости под другими
// именами переменных:
import { print as p, log as l } from './text-helpers'
p('printing a message')

// Кроме того, можно импортировать все в одну переменную с помощью знака *:
import * as fns from './text-helpers

// CommonJS не поддерживает инструкцию import. Вместо этого модули импортируются с помощью функции require:
const print(message) => log(message, new Date())
const log(message, timestamp) =>
console.log(`${timestamp.toString()}: ${message}`}
module.exports = {print, log}

const { log, print } = require('./txt-helpers')