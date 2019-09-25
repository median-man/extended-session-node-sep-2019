require('dotenv').config()
var keys = require('./keys')
var Spotify = require('node-spotify-api')

var spotify = new Spotify({
  id: keys.spotify.clientId,
  secret: keys.spotify.secret
})

// get user command
// get query from user
// if command is lookup-song
// then query spotify
// print first 5 results

// TODO: what if there are no results from spotify?

var spotifyQuery = 'All the Small Things'
// searches spotify
spotify
  .search({ type: 'track', query: spotifyQuery })
  .then(function(response) {
    // print the first 5 results
    for (var i = 0; i < 5; i++) {
      printTrack(response.tracks.items[i])
    }
  })
  .catch(function(err) {
    console.log(err)
  })

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
