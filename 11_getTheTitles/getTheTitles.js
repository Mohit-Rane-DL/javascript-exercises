const getTheTitles = function(array) {
    let titleOfBooks = [];
    for(i = 0; i < array.length; i++){
        titleOfBooks.push((array[i]).title);
    }
    return titleOfBooks;
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
];
console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
