/*

Part I 
create a music player app

your app should display a list of artist that have albums 

your app should hold a list of albums for each artist

your app should display all the songs for one album 

you app should keep track of how many times a song is played


create an album class 
properties 
title : string;
artist : string;
songs : [Song, Song, Song];

Create a Song class 
properties
title : string;
artist : string;
plays : number;
playSong: boolean;


Play Song function 
increases the 'plays' properties by +1 on the songs class

BONUS 
Your app should account for artist that only have individual songs
your app has playSong boolean that turns a song on or off 


Part II
your app should display the most popular songs from an artist discography list 
*/


class App {
	artistList = [];

	constructor() {

	}

	addArtist (artist) {
		return this.artistList.push(artist);
	}

}

class Artist {
	
	albumList = [];

	constructor(name) {
		this.name = name;
	}

	addAlbum (album) {
		this.albumList.push(album);
	}

}

class Song {
	plays = 0; 

	constructor(artist, title) {
		this.title = title; 
		this.artist = artist;
	}

	songPlayed() {
		this.plays +=1;
		console.log('the song', this)
		return this;
	}

}

class Album {
	songList = [];
	newSong; 
	constructor(artist, title) {
		this.title = title;
		this.artist = artist;
	}


	addSong (artist, title) {
		this.newSong = new Song(artist, title);
		console.log('the new song', this.newSong)
		this.songList.push(this.newSong);
	}

}

let newApp = new App();

let album1 = new Album('carine', 'got to be great');
album1.addSong('carine', 'she\'s the greatest')
album1.addSong('carine', 'two can play that game');

let newArtist = new Artist('carine');
newArtist.addAlbum(album1);

newApp.addArtist(newArtist); 

album1.songList[0].songPlayed();

console.log(`this is the ${newArtist.name} discography now`, newArtist)



