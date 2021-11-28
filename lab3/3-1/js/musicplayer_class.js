class MusicPlayer {

    constructor(){
        this.playList = ['Juicy', 'Sweet Child Of Mine', 'I Believe In A Thing Called Love'];
    }

    play() {
        this.loadNextSong();
        console.log('Playing next song')
    }

    pause() {
        console.log('Paused')
    }

    addTrackToMusicQueue(track) {
        this.playList.push(track);
        console.log('I added a song');
    }

    showNextTrack() {
        console.log('The next song is', this.playList[0]);
    }

    loadNextSong() {
        console.log('The next song is loaded');
    }
}

const mp = new MusicPlayer();
mp.play();
mp.pause();
mp.showNextTrack();
mp.loadNextSong();
console.log(mp.playList);
