function solve(input) {
    let songs = [];
    let numberOfSongs = Number(input.shift());
    const typeOfSong = input.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let index = 0; index < numberOfSongs; index++) {
        const [type, name, time] = input[index].split('_');
        const currentSong = new Song(type, name, time);
        songs.push(currentSong);
    }

    if (typeOfSong === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        const filteredSongs = songs.filter(x => x.type === typeOfSong);
        filteredSongs.forEach(song => { console.log(song.name); });
    }
}

solve([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
console.log('---');
solve([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
console.log('---');
solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']); 