/**
 * Отображение ошибки
 * @param message
 */
const error = (message) => console.error(message);

/**
 * Определение элемента из input на странице и поиск его пути
 */
const run = () => {
    let elem = document.querySelector('#elem-name');
    if (!elem.nodeName.length) {
        error('Нет поля ввода для указания искомого элемента.');
    } else {
        let elemVal = elem.value;
        if (!elemVal.length) {
            error('Не указан искомый элемент.');
        } else {
            let findElem = document.querySelector(elemVal);
            let path = getPath(findElem);
            console.log(findElem, findElem);
            console.log(path, path);
        }
    }
};

/**
 * Запуск определения элемента по клику на кнопку "RUN"
 */
document.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault();
    run();
});

/**
 * Запуск определения элемента при загрузке страницы выполняем задачу
 */
document.addEventListener("DOMContentLoaded", run);