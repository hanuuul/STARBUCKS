/*
IFrame Player API  구글검색
https://developers.google.com/youtube/iframe_api_reference?hl=ko
*/

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { //자체적으로 찾는거라 이름 바꾸면 안됨
//<div id="player"></div>
new YT.Player('player', { //# 안붙여도 알아서 id값 찾음
    videoId: 'An6LvWQuj_8', //어떤 id값을 가진 비디오를 출력해줄건지 유튜브 주소의 v=뒤에있는거 복사해오기
    playerVars: { //재생하기 위한 여러가지 변수 옵션
        start: 3,
        end: 10,
        autoplay: true,
        loop: 1, //반복재생
        playlist: 'An6LvWQuj_8',//반복재생한건 유튜브 영상 id값을 다시 넣어줘야함
    },
    events: {
        onReady: function(event){ //위에 영상이 준비가 되면 
            event.target.mute()  // target-지금 재생되고있는거 mute-음소거
        }
    }
});
}

