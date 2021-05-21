const loading = document.querySelector(".loading");
const videoElementLeft = document.querySelector(".video-left");
const videoElementRight = document.querySelector(".video-right");
const videoKorea = document.querySelector(".korea-video");
const videoCanada = document.querySelector(".canada-video");

let video_count_left = 1;
let video_count_right = 1;

setTimeout(() => {
    loading.style.display = 'none';

}, 2000);

const nextVideoForLeft = () => {

    video_count_left++;

    if (video_count_left === 5) {
        video_count_left = 1;
    }

    videoKorea.setAttribute("src", "./assets/korea" + video_count_left + ".mp4");
    videoElementLeft.load();
}

const nextVideoForRight = () => {

    video_count_right++;

    if (video_count_right === 3) {
        video_count_right = 1;
    }

    videoCanada.setAttribute("src", "./assets/beach" + video_count_right + ".mp4");
    videoElementRight.load();
}