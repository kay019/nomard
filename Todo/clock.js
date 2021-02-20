const clockContainer = document.querySelector(".js-clock"),
                    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    let time;
    if(hours > 0 && hours <= 11){
        time = "A.M"
    } else {
        time = "P.M"
    }


    clockTitle.innerText =  `${time} ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes }:${seconds < 10 ? `0${seconds}` : seconds }`; //``backtick을 사용
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();