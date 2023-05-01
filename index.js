'use strict';

// function getMainActorProfileFromMovie(id) {
//     return fetch(`https://swapi.dev/api/films/${id}/`)
//         .then((movieResponse) => {
//             return movieResponse.json();
//         })
//         .then((movie) => {
//             console.log('movie --> ', movie);
//             const promises = movie.characters.map((url) => {
//                 return fetch(url).then(resp => resp.json());
//             });
//             return Promise.all(promises)
//         })
//         .then((characters) => {
//             return characters.map(({name}) => name);
//         })
//         .catch((err) => {
//             console.error("Помилка - ", err);
//         })
// }
//
// getMainActorProfileFromMovie(2)
//     .then((characters) => {
//         console.log('characters --> ', characters);
//     });

// Async/Await

async function f1(id) {
    const movieResponse = await fetch(`https://swapi.dev/api/films/${id}/`);
    const movie = await movieResponse.json();
    const promises = movie.characters.map((url) => {
        return fetch(url).then(resp => resp.json());
    });
    const characters = await Promise.all(promises);
    return characters.map(({name}) => name);
}


const f2 = async () => {
    const names = await f1(1);
    console.log(names);
}


f1(1)
    .then((result) => console.log(result));


