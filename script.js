const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
let myLi = ''

function showAll() {
    menuOptions.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p><strong>${product.name}</strong></p>
            <p>${product.price}</p>
        </li>
    `
    })

    list.innerHTML = myLi
}


buttonShowAll.addEventListener('click', showAll)