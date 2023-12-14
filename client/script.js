$(document).ready( () => { 
    // generate a song
    $('#generate-btn').click(function generateSong(){
        $('#generate-screen').css('display', 'none');
        $('#song-screen').css('display', 'block');
        // get option values from HTML
        const popularity = $('#popularity').val();
        const mood = $('#mood').val();
        const type = $('#type').val();
        // determine min popularity 
        function min_pop(popularity){
            if (popularity === "very-pop"){
                return 75;
            } 
            else if (popularity === "pop"){
                return 50;
            }
            else if (popularity === "obs"){
                return 25;
            }
            else if (popularity === "very-obs"){
                return 0;
            }
        };
        const min_popularity = min_pop(popularity);
        // determine max popularity
        function max_pop(popularity){
            if (popularity === "very-pop"){
                return 100;
            } 
            else if (popularity === "pop"){
                return 74;
            }
            else if (popularity === "obs"){
                return 49;
            }
            else if (popularity === "very-obs"){
                return 24
            }
        };
        const max_popularity = max_pop(popularity);
        // determine min tempo
        function det_min_tempo(mood){
            if (mood === "sad"){
                return 0;
            } 
            else if (mood === "chill"){
                return 101;
            }
            else if (mood === "happy"){
                return 121;
            }
            else if (mood === "energetic"){
                return 131;
            }
        };
        const min_tempo = det_min_tempo(mood);
        // det max tempo
        function det_max_tempo(mood){
            if (mood === "sad"){
                return 100;
            } 
            else if (mood === "chill"){
                return 120;
            }
            else if (mood === "happy"){
                return 130;
            }
            else if (mood === "energetic"){
                return 400;
            }
        };
        const max_tempo = det_max_tempo(mood);
        // set type
        const seed_genres = "k-pop";
        // determine seed_artist
        function det_artist(type){
            if (type === "boy-group"){
                return "7nqOGRxlXj7N2JYbgNEjYH";
            } 
            else if (type === "girl-group"){
                return "7n2Ycct7Beij7Dj7meI4X0";
            }
            else if (type === "no-group"){
                return "7nqOGRxlXj7N2JYbgNEjYH";
            }
        };
        const seed_artists = det_artist(type);
        //// generate song using spotify web api
        const clientId = "8b7c5a58bfee4ee78ed61eb904fb6326";
        const clientSecret = "acb511b2d9894a92a44e6d40209c5c44";
        // spotify API endpoints
        const tokenUrl = "https://accounts.spotify.com/api/token";
        const apiUrl = "https://api.spotify.com/v1/";
        // base64 encode the client ID and client secret
        const authString = `${clientId}:${clientSecret}`;
        const base64AuthHeader = `Basic ${btoa(authString)}`;
        // access token
        fetch(tokenUrl, {
        method: "POST",
        headers: {
            "Authorization": base64AuthHeader,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
        })
        .then(response => response.json())
        .then(tokenData => {
            const accessToken = tokenData.access_token;
            const reccUrl = `${apiUrl}recommendations?limit=1&seed_artists=${seed_artists}&seed_genres=${seed_genres}&min_popularity=${min_popularity}&max_popularity=${max_popularity}&min_tempo=${min_tempo}&max_tempo=${max_tempo}`;
            fetch(reccUrl, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
            })
            .then(response => response.json())
            .then(recommendations => {
                recommendations.tracks.forEach(track => {
                    $('#song-name').text(track.name);
                    $('#song-artist').text(track.artists.map(artist => artist.name).join(", "));
                    $('#song-link').attr('href', track.external_urls.spotify);
                })
            })
            .catch(error => console.error("Error:", error));
        })
        .catch(error => console.error("Error:", error));
    })
    // generate another song
    $('#generate-btn2').click(function generateSong(){
        $('#generate-screen').css('display', 'none');
        $('#song-screen').css('display', 'block');
        // get option values from HTML
        const popularity = $('#popularity').val();
        const mood = $('#mood').val();
        const type = $('#type').val();
        // determine min popularity 
        function min_pop(popularity){
            if (popularity === "very-pop"){
                return 75;
            } 
            else if (popularity === "pop"){
                return 50;
            }
            else if (popularity === "obs"){
                return 25;
            }
            else if (popularity === "very-obs"){
                return 0;
            }
        };
        const min_popularity = min_pop(popularity);
        // determine max popularity
        function max_pop(popularity){
            if (popularity === "very-pop"){
                return 100;
            } 
            else if (popularity === "pop"){
                return 74;
            }
            else if (popularity === "obs"){
                return 49;
            }
            else if (popularity === "very-obs"){
                return 24
            }
        };
        const max_popularity = max_pop(popularity);
        // determine min tempo
        function det_min_tempo(mood){
            if (mood === "sad"){
                return 0;
            } 
            else if (mood === "chill"){
                return 101;
            }
            else if (mood === "happy"){
                return 121;
            }
            else if (mood === "energetic"){
                return 131;
            }
        };
        const min_tempo = det_min_tempo(mood);
        // det max tempo
        function det_max_tempo(mood){
            if (mood === "sad"){
                return 100;
            } 
            else if (mood === "chill"){
                return 120;
            }
            else if (mood === "happy"){
                return 130;
            }
            else if (mood === "energetic"){
                return 400;
            }
        };
        const max_tempo = det_max_tempo(mood);
        // set type
        const seed_genres = "k-pop";
        // determine seed_artist
        function det_artist(type){
            if (type === "boy-group"){
                return "7nqOGRxlXj7N2JYbgNEjYH";
            } 
            else if (type === "girl-group"){
                return "7n2Ycct7Beij7Dj7meI4X0";
            }
            else if (type === "no-group"){
                return "7nqOGRxlXj7N2JYbgNEjYH";
            }
        };
        const seed_artists = det_artist(type);
        //// generate song using spotify web api
        const clientId = "8b7c5a58bfee4ee78ed61eb904fb6326";
        const clientSecret = "acb511b2d9894a92a44e6d40209c5c44";
        const tokenUrl = "https://accounts.spotify.com/api/token";
        const apiUrl = "https://api.spotify.com/v1/";
        const authString = `${clientId}:${clientSecret}`;
        const base64AuthHeader = `Basic ${btoa(authString)}`;
        fetch(tokenUrl, {
        method: "POST",
        headers: {
            "Authorization": base64AuthHeader,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
        })
        .then(response => response.json())
        .then(tokenData => {
            const accessToken = tokenData.access_token;
            const reccUrl = `${apiUrl}recommendations?limit=1&seed_artists=${seed_artists}&seed_genres=${seed_genres}&min_popularity=${min_popularity}&max_popularity=${max_popularity}&min_tempo=${min_tempo}&max_tempo=${max_tempo}`;
            fetch(reccUrl, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
            })
            .then(response => response.json())
            .then(recommendations => {
                recommendations.tracks.forEach(track => {
                    $('#song-name').text(track.name);
                    $('#song-artist').text(track.artists.map(artist => artist.name).join(", "));
                    $('#song-link').attr('href', track.external_urls.spotify);
                })
            })
            .catch(error => console.error("Error:", error));
        })
        .catch(error => console.error("Error:", error));
    })

});

const baseURL = 'http://localhost:3001/songs';

// display list songs
const editBtn = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" style="margin-left:1%" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></svg>'
const delBtn = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" style="margin-left:1%" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/></svg>'

function getAllSongs() {
    fetch(baseURL)
    .then(response => response.json())
    .then(data => {
      // Clear the existing list
      const songList = document.getElementById('song-list');
      songList.innerHTML = '';

      // populate list with songs
      data.forEach((song, id) => {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const divEdit = document.createElement('div');
        const divDel = document.createElement('div');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        h3.textContent = `${song.title} by ${song.artist}`;
        divEdit.setAttribute('data-id', id);
        divEdit.setAttribute('class', 'edit-btn');
        divEdit.appendChild(span1);
        span1.insertAdjacentHTML('afterend', editBtn);
        divDel.setAttribute('data-id', id);
        divDel.setAttribute('class', 'del-btn');
        divDel.appendChild(span2);
        span2.insertAdjacentHTML('afterend', delBtn);
        div.appendChild(h3);
        div.appendChild(divEdit);
        div.appendChild(divDel);
        div.setAttribute('class', 'song-list')
        songList.appendChild(div);
      });

    })
    .catch(error => console.error('Error fetching songs:', error));
}
document.addEventListener('DOMContentLoaded', getAllSongs());


// add song to my list
$('#addsong-btn').click(function addToList(){
    let title = $('#song-name').text();
    let artist = $('#song-artist').text();
    console.log(title, artist)
    if (title && artist) {
        fetch(baseURL, { // Replace with your API endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title, artist})
        })
        .catch(error => console.error('Error adding song:', error));
    }
});

// edit song
$(document).on('click', '.edit-btn', function() {
    let dataId = $(this).data('id');
    console.log('Button clicked with data-id:', dataId);
    const newTitle = prompt('Enter new song name:', '');
    const newArtist = prompt('Enter new artist name:', '');
    if (newTitle && newArtist) {
        fetch(`${baseURL}/${dataId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: newTitle, artist: newArtist })
        })
        .catch(error => console.error('Error editing song:', error));
    }
});

// delete song
$(document).on('click', '.del-btn', function() {
    let dataId = $(this).data('id');
    console.log('Button clicked with data-id:', dataId);
    const confirmation = confirm('Are you sure you want to remove this song from your list?');
    if (confirmation) {
        fetch(`${baseURL}/${dataId}`, { // Replace with your API endpoint
          method: 'DELETE'
        })
        .catch(error => console.error('Error deleting song:', error));
      }
});
