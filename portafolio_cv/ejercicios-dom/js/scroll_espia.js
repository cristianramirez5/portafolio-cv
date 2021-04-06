<<<<<<< HEAD
const d = document;

export default function scrollSpy() {
    const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    console.log("entries", entries);
  };

  const observer = new IntersectionObserver(cb, {});
  $sections.forEach(el => observer.observe(el));
}
=======
const d = document;

export default function scrollSpy() {
    const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    console.log("entries", entries);
  };

  const observer = new IntersectionObserver(cb, {});
  $sections.forEach(el => observer.observe(el));
}
>>>>>>> 9bfe6f96b883c5fb5a829c897e2a20955d4f14fe
