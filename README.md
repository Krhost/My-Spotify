
# My top artist

This is a mini project 
that I did alone in order to improve
myself in web development

## Description

this project is inspired by the design:

* [design](https://dribbble.com/shots/16894605-Music-Player-Web-App).

in this mini project,
we have the possibility to play
music using a function specific to JQuery.

```Javascript
$(document).ready(function() {
    var audioElement = document.createElement('audio');
    var inplay = true;

    for (let i = 0; i < song.length; i++) {

       $(song[i]).click(function() {

       
            if(song[i].getAttribute('class') == "bi bi-play-fill"){
            
                audioElement.setAttribute('src',song_list_plus_ecoute[i]);
               audioElement.play();
```
---
despite many efforts, I did not manage to make many thing work correctly

* the Slide bar

```Javascript
      var cat = audioElement.duration *(seek_slider.value/100);
                audioElement.currentTime = cat;
```

* when you change music, the other music stops but does not pause

```Javascript

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
```

## 🛠 Skills

HTML, CSS, JavaScript

## CompletionDate

15 December 2020