<<<<<<< HEAD
const d = document,
    w = window;
export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 600) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
        // console.log(w.pageYOffset, document.documentElement.scrollTop);
    })
    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }
    })
=======
const d = document,
    w = window;
export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 600) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
        // console.log(w.pageYOffset, document.documentElement.scrollTop);
    })
    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }
    })
>>>>>>> 9bfe6f96b883c5fb5a829c897e2a20955d4f14fe
}