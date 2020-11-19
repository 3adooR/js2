/**
 * Поиск уникального селектора
 * @param elem - элемент
 * @returns {*[]}
 */
const getPath = (elem) => {
    let arr = [];
    while (elem.parentNode != null) {
        let name = elem.nodeName;
        let parent = elem.parentNode;
        let samesCount = 0, sameIndex = 0;
        for (let i = 0; i < parent.childNodes.length; i++) {
            let sib = parent.childNodes[i];
            if (sib.nodeName === name) {
                if (sib === elem) {
                    sameIndex = samesCount;
                }
                samesCount++;
            }
        }
        if (elem.hasAttribute('id') && elem.id !== '') {
            arr.unshift(name.toLowerCase() + '#' + elem.id);
        } else if (samesCount > 1) {
            arr.unshift(name.toLowerCase() + ':eq(' + sameIndex + ')');
        } else {
            arr.unshift(name.toLowerCase());
        }
        elem = parent;
    }
    return arr.slice(1).join(' > ');
};

module.exports = getPath;