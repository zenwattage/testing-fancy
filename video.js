function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('YouTubeBackgroundVideoPlayer', {
      videoId: 'cJbNLPofP10', // YouTube Video ID
      width: 1680,               // Player width (in px)
      height: 1050,              // Player height (in px)
      playerVars: {
        playlist: 'cJbNLPofP10',
          start: 60, //starts playhead at 18 seconds

          autoplay: 1,        // Auto-play the video on load
          autohide: 1,
          disablekb: 1, 
          controls: 0,        // Hide pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 1,  // Hide the Youtube Logo
          loop: 1,            // Run the video in a loop
          fs: 0,              // Hide the full screen button
          autohide: 0,         // Hide video controls when playing
          rel: 0,
          enablejsapi: 1
      },
      events: {
        onReady: function(e) {
            e.target.mute();
            e.target.setPlaybackQuality('hd1080'||'hd720');
        },
        onStateChange: function(e) {
          if(e && e.data === 1){
              var videoHolder = document.getElementById('home-banner-box');
              if(videoHolder && videoHolder.id){
                videoHolder.classList.remove('loading');
              }
          }else if(e && e.data === 0){
            e.target.playVideo()
          }
        }
      }
  });
}