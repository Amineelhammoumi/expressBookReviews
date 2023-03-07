let books = {
      1: {"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": [{"username" : "user1" , "review" : "good book"} , {"username" : "user2" , "review" : "good read"} ] },
      2: {"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} },
      3: {"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} },
      4: {"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} },
      5: {"author": "Unknown","title": "The Book Of Job", "reviews": {} },
      6: {"author": "Unknown","title": "One Thousand and One Nights", "reviews": {} },
      7: {"author": "Unknown","title": "Nj\u00e1l's Saga", "reviews": {} },
      8: {"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} },
      9: {"author": "Honor\u00e9 de Balzac","title": "Le P\u00e8re Goriot", "reviews": {} },
      10: {"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} }
}

module.exports=books;



const books1 = await fetch(books).then(response => response.json());

let titlePromises = [];
books1.forEach(book => {
      titlePromises.push(
       fetch(books.title)
       .then(response => response.json())
       .then(title => { return {author: book.author, title : title, reviews : book.reviews}})
   );
});