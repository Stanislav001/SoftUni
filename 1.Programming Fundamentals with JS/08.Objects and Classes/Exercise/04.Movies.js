function solve(input) {
    let moviesList = [];
    for (const row of input) {
        if (row.includes('addMovie ')) {
            let name = row.split('addMovie ')[1];
            moviesList.push({ name });
        } else if (row.includes('directedBy')) {
            let [name, director] = row.split(' directedBy ');
            const movie = moviesList.find(el => el.name === name);

            if (movie) {
                movie.director = director;
            }
        } else if (row.includes('onDate')) {
            let [name, date] = row.split(' onDate ');
            const movie = moviesList.find(el => el.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    }

    for (const movie of moviesList) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

solve(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);