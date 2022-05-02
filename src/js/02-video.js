import Player from '@vimeo/player';
import _ from 'lodash';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";
player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const onPlay = function(data) {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem(STORAGE_KEY, seconds);
    });
};

player.on('play', onPlay);

const updateTime = function () {
    const time = localStorage.getItem(STORAGE_KEY);
    player.setCurrentTime(time).then(function (seconds) {
        console.log(seconds)
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;

            default:
                // some other error occurred
                break;
        }
    });
};
player.on('play', updateTime);

player.on('play', _.throttle(updateTime, 1000));