In this exercise, we aim to manage a library of books. We will start by creating a class that represents a book (the object will be constructed with a title and a number of pages). Then, we will have several useful properties/methods:

page: Returns the current page of the book (default is 1).
nextPage(): Allows you to turn the page and increments the current page.
close(): Allows you to close a book (return to the first page).
Next, we will create a Library class to organize our books:

addBook(): Adds a book to the library.
addBooks([]): Adds multiple books at once (passing an array).
findBooksByLetter('s'): Lists all books with a title containing the letter 's'.
