const parents = document.querySelectorAll('.ibg');

parents.forEach(parent => {
    for (const img of parent.children) {
        parent.style.background = `url('${img.getAttribute('src')}') center / cover no-repeat`;
        img.style.display = 'none';
    }
})