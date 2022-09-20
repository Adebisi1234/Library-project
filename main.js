const newArr = []
const Ititle = document.querySelector('#title');
const Iauthor = document.querySelector('#author');
const Ipages = document.querySelector('#pages')
const grid = document.querySelector('.grid')
const Iread = document.querySelector('.read')
const addBook = document.querySelector('.new') 

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


Iread.addEventListener('click', () => {
    if(Iread.textContent === 'read'){
        Iread.textContent = 'not read'
        Iread.classList.add('blue')
    } else {
        Iread.textContent = 'read'
        Iread.classList.add('blue')
    }
})

addBook.addEventListener('click', addNew)

function addNew() {
    let newBook = new Book(Ititle.value, Iauthor.value, Ipages.value, Iread.value)

    newArr.push(newBook)
    let title = document.createElement('p')
    let author = document.createElement('p')
    let pages = document.createElement('p')
    let readBtn = document.createElement('button')
    let delBtn = document.createElement('button')
    let card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('color-white')
    
    readBtn.addEventListener('click', () => {
        if(readBtn.textContent === 'read'){
            readBtn.textContent = 'not read'
        } else {
            readBtn.textContent = 'read'
        }
    })

    delBtn.addEventListener('click', (e) => {
        grid.removeChild(e.target.parentNode)
    })
    
    title.textContent = Ititle.value
    author.textContent = Iauthor.value
    pages.textContent = Ipages.value
    readBtn.textContent = Iread.textContent
    delBtn.textContent = 'delete'
    
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(readBtn)
    card.appendChild(delBtn)
    grid.appendChild(card)
    console.log(newArr)
    closeModal()
}


newArr.forEach((x) => {
    let title = document.createElement('p')
    let author = document.createElement('p')
    let pages = document.createElement('p')
    let readBtn = document.createElement('button')
    let delBtn = document.createElement('button')
    let card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('color-white')
    
    readBtn.addEventListener('click', () => {
        if(readBtn.textContent === 'read'){
            readBtn.textContent = 'not read'
        } else {
            readBtn.textContent = 'read'
        }
    })

    delBtn.addEventListener('click', (e) => {
        grid.removeChild(e.target.parentNode)
    })
    
    title.textContent = x.title
    author.textContent = x.author
    pages.textContent = x.pages
    readBtn.textContent = x.read
    delBtn.textContent = 'delete'
    
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(readBtn)
    card.appendChild(delBtn)
    grid.appendChild(card)
})

console.log(newArr)