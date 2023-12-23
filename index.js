class Book{
    //define page 1 as default current page
        #page = 1;

    constructor(title,pages){
        this.title = title;
        this.pages = pages;
    }

    get page (){
        return this.#page
    }

    nextPage(){
        if(this.#page < this.pages){
            this.#page++
        }
    }

    close(){
        this.#page = 1
    }
}



class Library{
   
    #books = [];

    addBook(book){
        if(typeof(book) === "object"){
            this.#books.push(book)
        };
   };

   addBooks(booksArray){
        /*
            METHODE 1 :  
            this.#books = this.#books.concat(booksArray);
        */

        /*  METHODE 2 :
            for(let book of booksArray){
            this.addBook(book);
            }
        */ 
       
        /*  METHODE 3 :
        */ 
            booksArray.forEach( book => this.addBook(book))
   };

   findBooksByLetter(letter){
        return this.#books.filter( (book) => book.title.toLowerCase().includes(letter.toLowerCase()))
   };

}

//TEST CODE LINES
const b = new Book('Seigneur des anneaux', 200);
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

const l = new Library()
l.addBook(b)
console.log(l);
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])
console.log(l);
console.log(l.findBooksByLetter('S'))