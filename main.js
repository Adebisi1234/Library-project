const newArr = []
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages')
const grid = document.querySelector('.grid')




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
const Isread = document.querySelector('.read')
const newBook = document.querySelector('.new')

Isread.addEventListener('click', readOrNot)
add.addEventListener('click', showModal)
cancel.addEventListener('click', closeModal)
newBook.addEventListener('click', addBookToLibrary)


function addBookToLibrary() {
    let obj = new Book(title.value, author.value, pages.valueAsNumber, Isread.textContent)
    newArr.push(obj)
    console.log(newArr)
    console.log(obj)
}

function readOrNot() {
    if(this.innerText.toLowerCase() === 'read') {
        this.innerText = 'not read yet'
        this.classList.add('blue')
    }else {
        this.innerText = 'read'
        this.classList.add('blue')
    }
}

function showModal() {
    modal.classList.add('top-0')
    modalContent.classList.add('top-0')
}

function closeModal() {
    modal.classList.remove('top-0')
    modalContent.classList.remove('top-0')
}




