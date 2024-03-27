const musicAlbum = {
    singer: 'Amjad',
    genre: 'Romantic',
    albumName: 'Love in the Air',
    release: 2024
}
// console.log(musicAlbum)

function makeAlbum (musicAlbum: string){
    console.log(`The music sung by ${musicAlbum.singer}, released in the year ${musicAlbum.release} is heartmelting. `)
    console.log(`The music album of ${musicAlbum.genre} Genre, named as ${musicAlbum.albumName} is awesome.`)
}
makeAlbum(musicAlbum);

