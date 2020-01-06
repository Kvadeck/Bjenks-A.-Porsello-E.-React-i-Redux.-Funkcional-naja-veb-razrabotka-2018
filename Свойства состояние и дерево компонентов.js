// TODO: Сделать перебор свойств и положить разные свойства в разные массивы.

// Одним из основных преимуществ работы с React является обработка данных в деревьях компонентов. Методы которыми можно воспользоваться при этом, позволяют существенно облегчить вашу жизнь в долгосрочной перспективе.

// В React имеется автоматическая встроенная проверка свойств (https://facebook.github.io/react/docs typechecking-with-proptypes.html) на типы переменных, сведения о которой

// Проверка свойств React
// Массивы React.PropTypes.array
// Булевы значения React.PropTypes.bool
// Функции React.PropTypes.func
// Числа React.PropTypes.number
// Объекты React.PropTypes.object
// Строки React.PropTypes.string

// Способ реализации проверки свойств зависит от того, как созданы компоненты. Для функциональных компонентов, не имеющих состояния, и для классов ES6 используются разные реализации проверки свойств.

// Вместо правильного количества действий и ингредиентов мы видим длину каждой строки в символах. Подобную ошибку можно просто не заметить. Но если при создании компонента Summary применить проверку, то React отловит эту ошибку за нас:

const Summary = createClass({
    displayName: "Summary",
    propTypes: {
        ingredients: PropTypes.array,
        steps: PropTypes.array,
        title: PropTypes.string
    },
    render() {
        const { ingredients, steps, title } = this.props
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients.length} Ingredients | </span>
                    <span>{steps.length} Steps</span>
                </p>
            </div>
        )
    }
})

// В React есть способ указания требуемых свойств. Когда такие свойства не предоставлены, библиотека выводит в консоль предупреждение:
const Summary = createClass({
    displayName: "Summary",
    propTypes: {
        ingredients: PropTypes.array.isRequired,
        steps: PropTypes.array.isRequired,
        title: PropTypes.string
    },
    render() {
        <div></div>
    }
})
// Теперь при отображении компонента Summary без свойств React обращает наше внимание на эту проблему, выводя предупреждение в консоль непосредственно перед возникновением ошибки. Благодаря этому нам проще будет выяснить причину сбоя.

// Используя createClass, можно добавить метод getDefaultProps, возвращающий значения по умолчанию для тех свойств, которым не присвоены никакие другие значения:

const Summary = createClass({
    displayName: "Summary",
    propTypes: {
        ingredients: PropTypes.number,
        steps: PropTypes.number,
        title: PropTypes.string
    },
    getDefaultProps() {
        return {
            ingredients: 0,
            steps: 0,
            title: "[recipe]"
        }
    },
    render() {

        const { ingredients, steps, title } = this.props
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} Ingredients | </span>
                    <span>{steps} Steps</span>
                </p>
            </div>
        )
    }
})
// Теперь при попытке отобразить этот компонент без свойств вместо него будут показаны данные, установленные по умолчанию.

// Используя базовую проверку типов, можно только проанализировать свойство на основании одного условия. А настраиваемая проверка позволяет тестировать свойство многими разнообразными способами. Благодаря применяемой в ней настраиваемой функции сначала убедимся, что значением свойства является строка. Затем наложим на ее длину ограничение в 20 символов.

const propTypes: {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
    title: (props, propName) =>
        (typeof props[propName] !== 'string') ?
new Error("A title must be a string") :
(props[propName].length > 20) ?
    new Error(`title is over 20 characters`) :
    null
}

// Все средства проверки типов свойств являются функциями. Для реализации нашей настраиваемой проверки введем значение свойства title объекта propTypes в функцию обратного вызова. При отображении компонента React внедрит объект props и имя текущего свойства в функцию в качестве аргументов. Эти аргументы будут использоваться для проверки конкретного значения указанного свойства.

// https://codepen.io/Kvadeck/pen/zYxpEmd (тут PropTypes не работает)
// https://codepen.io/golgtwins/pen/JvMzqW (А тут PropTypes работает)

// При работе с классами ES6 объявления propTypes и defaultProps определяются в экземпляре класса, за пределами тела класса. После этого можно установить литералы объектов propTypes и defaultProps. 

// Кроме того, с помощью функционального компонента, не имеющего состояния, можно установить для свойств значения, применяемые по умолчанию, непосредственно в аргументы функции. Для ingredients, steps и title это делается при деструктуризации объекта свойств в аргументах функции:

const Summary = ({ ingredients = 0, steps = 0, title = '[recipe]' }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{ingredients} Ingredients | {steps} Steps</p>
        </div>
    )
}

// В каждом компоненте должны быть реализованы проверка свойств, настраиваемая проверка свойств и возможность устанавливать для них значения по умолчанию. Это облегчит повторное использование компонента, поскольку любые проблемы, связанные с его свойствами, будут отображены на консоли в виде предупреждений.

// Статические свойства класса
// В предыдущем разделе были показаны способы определения defaultProps и propTypes за пределами класса. В последних предложениях по спецификации ECMAScript появилась еще одна альтернативная возможность: поля классов и статические свойства (сlass fields & static properties). Статические свойства класса позволяют инкапсулировать propTypes и defaultProps внутри объявления класса. Инициализаторы свойств также предоставляют возможность инкапсуляции и более понятный синтаксис:

class Summary extends React.Component {
    static propTypes = {
        ingredients: PropTypes.number,
        steps: PropTypes.number,
        title: (props, propName) =>
            (typeof props[propName] !== 'string') ?
                new Error("A title must be a string") :
                (props[propName].length > 20) ?
                    new Error(`title is over 20 characters`) :
                    null
    }
    static defaultProps = {
        ingredients: 0,
        steps: 0,
        title: "[recipe]"
    }
    render() {
        const { ingredients, steps, title } = this.props
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} Ingredients | </span>
                    <span>{steps} Steps</span>
                </p>
            </div>
        )
    }
}

// Ссылки (refs) представляют собой функциональную возможность, позволяющую компонентам React взаимодействовать с дочерними элементами. Чаще всего используются для взаимодействия с элементами пользовательского интерфейса, собирающими вводимые пользователем данные. 

// Привязка области видимости this.
// При создании компонентов с помощью метода React.createClass привязка
// области видимости this к методам компонента не нужна. Данный метод автоматически привязывает this за вас.

// Устоявшимся решением для сбора данных из компонента React является использование обратного потока данных1. Действие похоже на двустороннюю привязку данных, которая иногда и фигурирует в описаниях.

// Дополнительные функциональные свойства
// Чтобы сделать двустороннюю привязку данных необязательной, перед попыткой вызова функционального свойства нужно проверить факт его существования. Если в последнем примере функциональное свойство onNewColor не предоставить, то это приведет к ошибке JavaScript, поскольку компонент будет пытаться вызвать неопределенное значение. Подобного исхода можно избежать, предварительно проверив, существует ли свойство функции:

if (this.props.onNewColor) {
    this.props.onNewColor(_title.value, _color.value)
}

// Еще разумнее будет определить функциональное свойство в принадлежащих компоненту propTypes и defaultProps:
AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}
AddColorForm.defaultProps = {
    onNewColor: f => f
}
// Теперь, когда у предоставляемого свойства будет тип, отличный от функции, React выдаст возражение. Если свойство onNewColor предоставлено не будет, то по умолчанию будет использоваться следующая подставная функция: f=>f. Это просто функция-заместитель, возвращающая первый переданный ей аргумент. Хотя она ничего не делает, JavaScript может ее вызвать без выдачи сообщений об ошибках.

// https://codepen.io/Kvadeck/pen/gObovyJ?editors=1010

// Ссылки можно задействовать и в функциональных компонентах, не имеющих состояния. В этих компонентах нет ключевого слова this,поэтому применить выражение this.refs не получится.

// Реструктурируем компонент AddColorForm в функциональный, не имеющий состояния:
const AddColorForm = ({ onNewColor = f => f }) => {
    let _title, _color
    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }
    return (
        <form onSubmit={submit}>
            <input ref={input => _title = input}
                type="text"
                placeholder="color title..." required />
            <input ref={input => _color = input}
                type="color" required />
            <button>ADD</button>
        </form>
    )
}