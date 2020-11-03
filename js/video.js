// this function takes video ID and activated play/pause mechanism
function playVideo(id){
    var video = $(id)[0];
    $(id).click(function() {
        if( video.paused ) {
            video.play();
        }
        else {
            video.pause();
        }
    });
}
