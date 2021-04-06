<<<<<<< HEAD
const d = document;
export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;
    d.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault();
            // alert("hola")
            tester = window.open(
                $form.direccion.value,
                "tester",
                `innerWidth = ${$form.ancho.value},
                innerHeight = ${$form.alto.value}`
            );
        }
    });

    d.addEventListener("click", e => {
        if (e.target === $form.cerrar) tester.close();
    })
=======
const d = document;
export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;
    d.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault();
            // alert("hola")
            tester = window.open(
                $form.direccion.value,
                "tester",
                `innerWidth = ${$form.ancho.value},
                innerHeight = ${$form.alto.value}`
            );
        }
    });

    d.addEventListener("click", e => {
        if (e.target === $form.cerrar) tester.close();
    })
>>>>>>> 9bfe6f96b883c5fb5a829c897e2a20955d4f14fe
}