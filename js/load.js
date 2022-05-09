const loadSnip = document.querySelector('.load');
const play = document.querySelector('.play');
const main = document.querySelector('main');
window.onbeforeunload = function() {
    main.style.display='none';
    play.style.display='block';
    loadSnip.style.display='block';
}