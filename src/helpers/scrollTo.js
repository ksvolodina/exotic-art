export function scrollToBlock(el) {
    const blockTop = el.offsetTop
    window.scrollTo({
        top: blockTop - 20,
        behavior: 'smooth'
    });
}