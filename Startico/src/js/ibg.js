const parents = document.querySelectorAll('.ibg');

parents.forEach(parent => {
    for (const elem of parent.children) {
        if (elem.tagName.toLowerCase() === 'img') {
            parent.style.background = `url('${elem.getAttribute('src')}') center / cover no-repeat`;
            elem.style.display = 'none';
        }
    }
});