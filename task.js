const getPath = () => {
    /*$0 // HTMLElement
    getPath($0) // =&gt; "body div.someclass ul li:first-child"*/
};


// При загрузке страницы выполняем задачу
document.addEventListener(
    "DOMContentLoaded",
    getPath()
);