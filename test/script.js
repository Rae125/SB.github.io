document.getElementById('sound1').addEventListener('click', function() {
    playSound('/Sounds/Shi peter.mp3');
});

document.getElementById('sound2').addEventListener('click', function() {
    playSound('/Sounds/En je speelt een spelletje.mp3');
});

document.getElementById('sound3').addEventListener('click', function() {
    playSound('/Sounds/Gebruik je verstand.mp3');
});

document.getElementById('sound4').addEventListener('click', function() {
    playSound('/Sounds/Goed, houdoe.mp3');
});

document.getElementById('sound5').addEventListener('click', function() {
    playSound('/Sounds/Jij kan niet tegen jouw verlies.mp3');
});

document.getElementById('sound6').addEventListener('click', function() {
    playSound('/Sounds/Joeh Houdoe he.mp3');
});

document.getElementById('sound7').addEventListener('click', function() {
    playSound('/Sounds/Lijkt em een uitstekend idee.mp3');
});

document.getElementById('sound8').addEventListener('click', function() {
    playSound('/NSB.mp3');
});

document.getElementById('sound9').addEventListener('click', function() {
    playSound('/Sounds/Pack de gell.mp3');
});

document.getElementById('sound10').addEventListener('click', function() {
    playSound('/Sounds/Rienie.mp3');
});

document.getElementById('sound11').addEventListener('click', function() {
    playSound('/Sounds/Robbie de kip.mp3');
});

document.getElementById('sound12').addEventListener('click', function() {
    playSound('/Sounds/Wat zit jij nou te lachen Trek pop.mp3');
});

document.getElementById('sound13').addEventListener('click', function() {
    playSound('/Sounds/Weird lach.mp3');
});

document.getElementById('sound14').addEventListener('click', function() {
    playSound('/Sounds/Zo sukkel.mp3');
});


function playSound(url) {
    new Audio(url).play();
}
