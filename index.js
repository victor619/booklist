// variables
const book = document.getElementById('book')
const url = document.getElementById('url')
const button = document.getElementById('btn')
const output = document.getElementById('list')
const body = document.getElementsByTagName('body')
// const regEx = 
let list = []
let index = 0
// =======================================================

button.addEventListener('click', addToList)


// =======================================================

// store books
function addToList(){
let library ={
    name:book.value,
    url:url.value
}

let string = list.push(library)
localStorage.setItem('books',JSON.stringify(list))
display()

}

function display(){
    let books = localStorage.getItem('books')
    let data = JSON.parse(books)
    
         let ourHTML = `
         <div class='book'> 
         <p><a href =${url.value}>${book.value}</a></p>
         <button id = 'del' onclick='expel(this,${url.value})'>delete</button>
         </div>
         `
         output.insertAdjacentHTML('beforeend',ourHTML)
       
}

function getBooks(){
    let books = localStorage.getItem('books')
    let data = JSON.parse(books)

    for (let i = 0; i < data.length; i++) {
        let ourHTML = `
        <div class='book'> 
        <p><a href =${data[i].url}>${data[i].name}</a></p>
        <button id = 'del' onclick='expel(this,${url.value})'>delete</button>
        </div>
        `
        output.insertAdjacentHTML('beforeend',ourHTML)
    }
}

function expel(element,url){
     element.parentElement.remove()
     console.log(element)
     removeFromStorage(url)
    }

    function removeFromStorage(url){
     let books = localStorage.getItem('books')
     let data = JSON.parse(books)
     for (let i = 0; i < data.length; i++){
          if(books[i].url == url)
          data.splice(i,1)
          console.log(data)
         }   

     localStorage.setItem('books',JSON.stringify(data))

    }