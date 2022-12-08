function solve(band, album, song) {
    const songDuration = (album.length * band.length) * song.length / 2;
    const replays = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${replays} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');
solve('Rammstein', 'Sehnsucht', 'Engel');