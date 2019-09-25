require('dotenv').config()
var keys = require('./keys')
var Spotify = require('node-spotify-api')

var spotify = new Spotify({
  id: keys.spotify.clientId,
  secret: keys.spotify.secret
})

// get user command
var command = process.argv[2]

// get query from user
var userSearch = process.argv.slice(3).join(' ')

// if command is lookup-song
if (command === 'lookup-song') {
  // then query spotify
  // print first 5 results
  searchSpotifyForSong(userSearch)

  // if command is lookup-movie
} else if (command === 'lookup-movie') {
  // then query omdb api
  // print the movie title, rating, plot
  searchOmdbApiForMovieTitle(userSearch)
}

// Takes a string: spotifyQuery and searches spotify
// tracks for the given string
function searchSpotifyForSong(spotifyQuery) {
  spotify
    .search({ type: 'track', query: spotifyQuery })
    .then(function(response) {
      // print the first 5 results
      if (response.tracks.items.length === 0) {
        console.log('\nNo matching songs.\n')
      }
      for (var i = 0; i < 5 && i < response.tracks.items.length; i++) {
        printTrack(response.tracks.items[i])
      }
    })
    .catch(function(err) {
      console.log(err)
    })
}

// accepts a track object from spotify api and prints the info
function printTrack(track) {
  var albumName = track.album.name
  var song = track.name
  var spotifyUrl = track.external_urls.spotify
  var artist = track.artists[0].name
  console.log('Song: ' + song)
  console.log('Album: ' + albumName)
  console.log('Url: ' + spotifyUrl)
  console.log('Artist: ' + artist)
  console.log('\n--------------------\n')
}

function searchOmdbApiForMovieTitle(search) {
  // TODO: need to import axios
  // TODO: use axios to query omdb api
  // TODO: print results from omdb api query
  console.log('TODO: This feature will be coming soon!')
}
