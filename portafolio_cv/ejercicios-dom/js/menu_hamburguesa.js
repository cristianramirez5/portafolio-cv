<<<<<<< HEAD
export default function hamburguerMenu(panelBtn,panel,menuLink) {
    const d = document;
    d.addEventListener("click",e =>{
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
=======
export default function hamburguerMenu(panelBtn,panel,menuLink) {
    const d = document;
    d.addEventListener("click",e =>{
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
>>>>>>> 9bfe6f96b883c5fb5a829c897e2a20955d4f14fe
}