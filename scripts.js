/*---- miniature ---*/
const liste_miniatures_plus_ecoute = [
    'image/miniature/MartyMcFly.jpg',
    'image/miniature/speak.png',
    'image/miniature/capo.jfif',
    'image/miniature/lose again.jfif',
    'image/miniature/thousand miles.jpg',
    'image/miniature/blue.png',
    'image/miniature/je m appelle.jpg',
    'image/miniature/noir meilleur.png',
    'image/miniature/summer nights.jpg',
    'image/miniature/xo tour life 3.jpg'
]

/*---- song ---*/
const song_list_plus_ecoute = [
    'musique/Marty Mcfly.mp3',
    'musique/Speak.mp3',
    'musique/Capo.mp3',
    'musique/Love again.mp3',
    'musique/Thousand Miles.mp3',
    'musique/Blue.mp3',
    'musique/Je Mappelle.mp3',
    'musique/Noir meilleur.mp3',
    'musique/Summer Nights.mp3',
    'musique/XO Tour Llif3.mp3'
]

var song = document.querySelectorAll("i[id='taille-play']");
var titre = document.querySelectorAll('p[id="titre"]');
var chanteur = document.querySelectorAll('p[id="songer"]');
let seek_slider = document.querySelector(".seek_slider");

/*--- Evenement au click ---*/ 
$(document).ready(function() {
    var audioElement = document.createElement('audio');
    var inplay = true;

    for (let i = 0; i < song.length; i++) {

       $(song[i]).click(function() {

       
            if(song[i].getAttribute('class') == "bi bi-play-fill"){
            
                audioElement.setAttribute('src',song_list_plus_ecoute[i]);
                audioElement.play();
                

                song[i].setAttribute('class','bi bi-pause-fill');

                document.getElementById('img-miniature').setAttribute('src',liste_miniatures_plus_ecoute[i]);
                document.getElementById('titre-play').hidden = false;
                document.getElementById('titre-play').innerHTML  = titre[i].innerHTML;
                document.getElementById('artist').hidden = false;
                document.getElementById('artist').innerHTML = chanteur[i].innerHTML;

                var cat = audioElement.duration *(seek_slider.value/100);
                audioElement.currentTime = cat;
            }else if(song[i].getAttribute('class') == "bi bi-pause-fill"){

                audioElement.pause();
                song[i].setAttribute('class','bi bi-play-fill');
              
            }

       });
    }

});


/* timer */


function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function seekUpdate() {
    let seekPosition = 0;
    
    // Check if the current track duration is a legible number
    if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;
    
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
    
    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
    
    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
    }