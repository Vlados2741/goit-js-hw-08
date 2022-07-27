import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const _ = require('lodash');


const noteTime = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log(data.seconds)
};

player.on('timeupdate', _.throttle(noteTime, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});