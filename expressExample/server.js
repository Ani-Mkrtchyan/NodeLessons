const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;
app.listen(port);
console.log('Server listening on port ' + port);


let books = [
    {  id:1, title: "Java Script" },
    {  id:2, title: "Node.js" },
    {  id:3, title: "Design patterns" }
  ];



  //  READ

app.get('/books',  (req, res) => {
    res.status(200).json(books);

});

 app.get('/books/:id', (req, res) => {
    
    let found = books.find((book) => {
        return book.id === Number(req.params.id);
    });

    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});


// CREATE  

 app.post('/books', (req, res) => {
    
    let bookIds = books.map(book => book.id);
    
    let bookId = bookIds.length > 0 ? Math.max.apply(Math, bookIds) + 1 : 1;
    
    let book = {
        id: bookId, 
        title: req.body.title, 
        
    };

    books.push(book);

    res.status(201).json(book);
});



// UPDATE

app.put('/books/:id', (req, res) => {
    
    let found = books.find((book) => {
        return book.id === Number(req.params.id);
    });

    if (found) {
        let updatedBook = {
            id: found.id,
            title: req.body.title, 
            
        };

        let updatedIndex = books.indexOf(found);
        books.splice(updatedIndex, 1, updatedBook);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});


     
// DELETE

app.delete('/books/:id', (req, res) => {
    
    let found = books.find((book) => {
        return book.id === Number(req.params.id);
    });

    if (found) {
        
        let bookIndex = books.indexOf(found);

        books.splice(bookIndex, 1);
    }

    res.sendStatus(204);
});
