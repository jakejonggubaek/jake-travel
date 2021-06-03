const loading = document.querySelector(".loading");

//background video
const videoElementLeft = document.querySelector(".video-asia");
const videoElementRight = document.querySelector(".video-carib");
const videoElementBottom = document.querySelector(".video-bottom");
const videoElementAmerica = document.querySelector(".video-america");
const videoAsia = document.querySelector(".asia-video");
const videoCarib = document.querySelector(".carib-video"); 
const videoAfrica = document.querySelector(".africa-video");
const videoAmerica = document.querySelector(".america-video");

//section2 intro photos
const gridContainer = document.querySelectorAll(".grid-container");


let video_count_left = 1;
let video_count_right = 1;
let video_count_bottom = 1;
let video_count_america = 1;


setTimeout(() => {
    loading.style.display = 'none';

}, 2000);

const nextVideoForLeft = () => {

    video_count_left++;

    if (video_count_left === 5) {
        video_count_left = 1;
    }

    videoAsia.setAttribute("src", "./assets/korea" + video_count_left + ".mp4");
    videoElementLeft.load();
}

const nextVideoForRight = () => {

    video_count_right++;

    if (video_count_right === 3) {
        video_count_right = 1;
    }

    videoCarib.setAttribute("src", "./assets/beach" + video_count_right + ".mp4");
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

const nextVideoForAmerica= () => {

    video_count_america++;

    if (video_count_america === 5) {
        video_count_america = 1;
    }

    videoAmerica.setAttribute("src", "./assets/canada" + video_count_america + ".mp4");
    videoElementAmerica.load();
}