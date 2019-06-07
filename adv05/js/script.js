function getData(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', url);

        req.onreadystatechange = function(event) {
            if(this.readyState === 4) {
                if (this.status === 200) {
                    const data = JSON.parse(this.response);
                    resolve(data);
                } else {
                    reject('cannot get data');
                }
            }
        };
        req.send();
    });
}

function getCharsByFilm(filmUrl) {
    return new Promise((resolve, reject) => {
        getData(filmUrl).then(film => {
            return Promise.all(film.characters.map(link => getData(link)));
        }).then(chars => {
            resolve(chars.map(item => item.name));
        });
    });
}

getCharsByFilm('https://swapi.co/api/films/1/').then(result => console.log(result));

getData('https://swapi.co/api/people/1/')
    .then(character=>{
        return Promise.all(character.films.map(item => getData(item)))
    }).then(films=>{
        const filmsElement = document.getElementById('films');

        films.forEach(film => {
            const h3Element = document.createElement('h3');
            h3Element.textContent = film.title;
            filmsElement.append(h3Element);

            const ulElement = document.createElement('ul');
            h3Element.append(ulElement);

            film.characters.forEach(character => {
                const liElement = document.createElement('li');
                liElement.textContent = character;
                ulElement.append(liElement);
            });
        });
    });

