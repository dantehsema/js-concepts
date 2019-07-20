
/*
Part I 
create a music player app []

your app should display a list of artist that have albums 

your app should hold a list of albums for each artist 

your app should display all the songs for one album 

you app should keep track of how many times a song is played


\\\\\\\\\\\\\\\\\\\\\\\\\\\
create an app class 
properties 
artistList
 
methods
add artist
*/
var musicPlayer = [];

class app{

	constructor(artistName){
		this.artistName = artistName;
	}

	// Album(artistName,newAlbum){
	// 	for(var i=0; i<musicPlayer.length; i++){
	// 		if(musicPlayer[i].artistName === artistName){
	// 			console.log('these are the artists in this playlist:',musicPlayer[i].artistName)
	// 			musicPlayer[i].artistName = new app(newAlbum);
	// 		return musicPlayer;
	// 		}
	// 	}	
	// }
}

function addArtist(artistName){
	const Artist = new app(artistName);
	console.log('this is the new Artist added:',Artist);
	musicPlayer.push(Artist);
	return musicPlayer;
}

/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\


\\\\\\\\\\\\\\\\\\\\\\\\\\\
create an artist class 
properties
albumList: [Albums, Albums, Albums]
name: string;

methods
add albums

*/

var artistAlbum = [];

class artist{
	constructor(albumList, name){
		this.albumList = albumList;
		this.name = name;
	}
}

function addAlbum(albumList, name){
	const Album = new artist([albumList],name);
	console.log('This an new album:', albumList);
	artistAlbum.push(Album);
	return artistAlbum;
}

function newAlbumForName(addAlbum, name){
	for(var i=0; i<artistAlbum.length; i++){
		if(artistAlbum[i].name === name){
			console.log('this is the current album for', artistAlbum[i].name,': ',artistAlbum[i].albumList);
			const newAl = artistAlbum[i].albumList.push(addAlbum);
			console.log('here is the updated album list for:', artistAlbum[i].albumList);
		}else{
			const Album = new artist([addAlbum],name);
			console.log('This an new album:', addAlbum);
			artistAlbum.push(Album);
		}
			return artistAlbum;
	}
}

/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\



\\\\\\\\\\\\\\\\\\\\\\\\\\\
create an album class 
properties 
title : string;
artist : string;
songsList : [Song, Song, Song];

method
add song
*/
var completeAlbums = [];

class Album{
	constructor(title, artist, song){
		this.title = title;
		this.artist = artist;
		this.song = song;
	}
}

function song(title, artist, song){
	const music = new Album(title, artist, [song]);
	console.log('this is a new album, artist, and song:', music);
	completeAlbums.push(music);
	return completeAlbums;
}

function newSong(title, artist, song){
	for(var i=0; i<completeAlbums.length; i++){
		if((completeAlbums[i].artist === artist)&&(completeAlbums[i].title === title)&&(completeAlbums[i].song !== song)){
			completeAlbums[i].song.push(song);
			console.log('this is a new song to current album and artist:', song)
			return completeAlbums;
		}
	}
}

/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\

\\\\\\\\\\\\\\\\\\\\\\\\\\\
Create a Song class 
properties
title : string;
artist : string;
plays : number;

method
play song
*/
var songPlays = [];

class Song{
	constructor(title,artist,plays){
		this.title = title;
		this.artist = artist;
		this.plays = plays;
	}
}

function addSong(title, artist, plays){
	const music = new Song(title,artist,plays);
		plays = 0;
		songPlays.push(music);
		console.log(music);
		return songPlays;
}

function playSong(title, artist, plays){
	for(var i=0; i<songPlays.length; i++){
		if((songPlays[i].title === title) && (songPlays[i].artist === artist)){
			console.log('title and artist already exist');
			songPlays[i].plays = songPlays[i].plays + 1;
			console.log('this song is played:',songPlays[i].plays, 'times');
		}else{
			console.log('please addSong');
			
		}
	}
	return songPlays;
}

/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\

Play Song function 
increases the 'plays' properties by +1 on the songs class

BONUS 
Your app should account for artist that only have individual songs
your app has playSong boolean that turns a song on or off 


Part II
your app should display the most popular songs from an artist discography list 
*/