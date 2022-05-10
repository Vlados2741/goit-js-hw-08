import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


const noteTime = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};
player.on('timeupdate', noteTime);

const updateTime = function () {
    const time = localStorage.getItem("videoplayer-current-time");
    player.setCurrentTime(time).then(function (seconds) {
        // console.log(seconds)
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });
};
player.on('timeupdate', throttle(noteTime, 1000));
player.on('play', updateTime);
