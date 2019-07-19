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
	}
}

function addAlbum(albumList){
	const Album = new artist(albumList);
	console.log('This an new album:', albumList);
	artistAlbum.push(Album);
	return artistAlbum;
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
\\\\\\\\\\\\\\\\\\\\\\\\\\\

\\\\\\\\\\\\\\\\\\\\\\\\\\\
Create a Song class 
properties
title : string;
artist : string;
plays : number;

method
play song
\\\\\\\\\\\\\\\\\\\\\\\\\\\

Play Song function 
increases the 'plays' properties by +1 on the songs class

BONUS 
Your app should account for artist that only have individual songs
your app has playSong boolean that turns a song on or off 


Part II
your app should display the most popular songs from an artist discography list 
*/