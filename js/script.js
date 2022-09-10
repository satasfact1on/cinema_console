/* 1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {
            
        },
        actors: {

        },
        genres: [],
        privat: false
    };

function rememberMyFilms() {
    let i = 0;
    while (i < 2) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 10) {
            console.log ('done');
        } else {
            console.log ('ERROR');
            i--;
        }

        personalMovieDB.movies[a] = b;
        i++;
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        alert('Ты норм?');
    }
}

//detectPersonalLevel();

function writeYourGenres() {
    let a;
    for (let i = 1; i <= 3; i++) {
        a = prompt(`Ваш любимый жанр под номером ${i}`, '');
        console.log(a);
        personalMovieDB.genres[i - 1] = a;
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();
