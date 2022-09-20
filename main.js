const newArr = []
const Ititle = document.querySelector('#title');
const Iauthor = document.querySelector('#author');
const Ipages = document.querySelector('#pages')
const grid = document.querySelector('.grid')
const Iread = document.querySelector('.read')

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read

    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

const theHobbit = new Book('The Hobbit', "J.R.R Tolkien", 295, 'not read yet')

newArr.push(theHobbit)


// modal

const modal = document.querySelector('.modal-container');
const modalContent = document.querySelector('.modal-content');
const add = document.querySelector('.add');
const cancel = document.querySelector('.cancel');

add.addEventListener('click', showModal)
cancel.addEventListener('click', closeModal)

function showModal() {
    modal.classList.add('top-0')
    modalContent.classList.add('top-0')
}

function closeModal() {
    modal.classList.remove('top-0')
    modalContent.classList.remove('top-0')
}


let title = document.createElement('p')
let author = document.createElement('p')
let pages = document.createElement('p')
let readBtn = document.createElement('button')
let delBtn = document.createElement('button')
let card = document.createElement('div')
card.classList.add('card')

title.textContent = Ititle.value
author.textContent = Iauthor.value
pages.textContent = Ipages.value

card.appendChild(title)
card.appendChild(author)
card.appendChild(pages)
card.appendChild(readBtn)

grid.appendChild(card)