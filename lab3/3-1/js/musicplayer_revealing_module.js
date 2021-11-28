const musicPlayer = (function () {

    const playList = ['Juicy', 'Sweet Child Of Mine', 'I Believe In A Thing Called Love'];  

    function play () {
    loadNextSong();
    console.log('Im playing the next song!');
    }

    function pause () {
    console.log('Im paused!');
    }

    function addTrack (track) {
    playList.push(track);
    console.log('I added a song');
    }

    function showNextTrack () {
    console.log('My next track is', playList[0]);
    }

    function loadNextSong() {
    console.log('Next song is loaded');
    }

    return {
    playMusic: play,
    pauseMusic: pause,
    showNextTrack: showNextTrack,
    addTrack: addTrack
    }
})();

musicPlayer.playMusic(); 
musicPlayer.pauseMusic(); 
musicPlayer.showNextTrack(); 
// musicPlayer.loadNextSong();
console.log(musicPlayer.playList);