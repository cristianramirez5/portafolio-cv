<<<<<<< HEAD
const d = document,
    w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    let breakPoint = w.matchMedia(mq);

    const responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileContent;
        }
        // console.log(e.matches);
    }
    breakPoint.addEventListener("change",responsive);
    responsive(breakPoint);

=======
const d = document,
    w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    let breakPoint = w.matchMedia(mq);

    const responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileContent;
        }
        // console.log(e.matches);
    }
    breakPoint.addEventListener("change",responsive);
    responsive(breakPoint);

>>>>>>> 9bfe6f96b883c5fb5a829c897e2a20955d4f14fe
}