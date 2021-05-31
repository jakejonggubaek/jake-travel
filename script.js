const loading = document.querySelector(".loading");
const videoElementLeft = document.querySelector(".video-left");
const videoElementRight = document.querySelector(".video-right");
const videoElementBottom = document.querySelector(".video-bottom");
const videoKorea = document.querySelector(".korea-video");
const videoCanada = document.querySelector(".canada-video"); 
const videoAfrica = document.querySelector(".africa-video");

let video_count_left = 1;
let video_count_right = 1;
let video_count_bottom = 1;


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

const nextVideoForBottom = () => {

    video_count_bottom++;

    if (video_count_bottom === 3) {
        video_count_bottom = 1;
    }

    videoAfrica.setAttribute("src", "./assets/africa" + video_count_bottom + ".mp4");
    videoElementBottom.load();
}
