'use strict';

// const result = confirm('are u here?');
// console.log(result);

// const answer  = +prompt('Вам есть 18?', '10');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?','');
// answers[1] = prompt('Как ваша фамилия?','');
// answers[2] = +prompt('Сколько вам лет?','');


// document.write(typeof(null));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5/`);

// const user = 'ivan';

// alert(`Привет, ${user}`)

console.log('arr' + ' - obj');
console.log(4 + ' - obj');


let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);


console.log(5 % 2);

console.log(2 + 2 * 2 !== '6');


const isCheked = false,
    isClose = false;

// console.log(!isCheked && !isClose );


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из просмотренных фильмов', 'Терминатор');
let b = +prompt('На сколько оцените его?', '7');
let c = prompt('Один из просмотренных фильмов', 'Властелин колец');
let d = +prompt('На сколько оцените его?', '9.6');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);