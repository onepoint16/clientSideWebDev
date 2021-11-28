const musicPlayer = {

    songList : ['Pride and Joy', 'The Thrill is Gone', 'Crossroads'],

    play : function() {
        this.loadNextSong();
        console.log('Im playing the next song!');
        },
        pause : function() {
        console.log('Im paused!');
        },

        addTrackToMusicQueue : function(track) {
        songList.push(track);
        console.log('I added a song');
        },

        showNextTrack : function() {
        console.log('My next track is', this.songList[0]);
        },

        loadNextSong: function() {
        console.log('Next song is loaded');
        },
}

musicPlayer.play();
musicPlayer.pause();
musicPlayer.showNextTrack();
musicPlayer.loadNextSong();
console.log(musicPlayer.songList);