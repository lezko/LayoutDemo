const headerMenu = document.querySelector('.header-menu');
const headerMenuBody = document.querySelector('.header-menu__body');

window.addEventListener('resize', () => {
   adaptView();
});
const adaptHeader = (w, h) => {
    const headerTop = document.querySelector('.header-top');
    const headerLang = document.querySelector('.header-top-lang');
    if (w <= 768) {
        if (!headerLang.classList.contains('done')) {
            headerLang.classList.add('done');
            headerMenuBody.append(headerLang);
        }
    } else {
        if (headerLang.classList.contains('done')) {
            headerLang.classList.remove('done');
            headerTop.prepend(headerLang);
        }
    }

    const headerBottomMenus = document.querySelectorAll('.header-bottom-menu');
    const headerBottomColumns = document.querySelectorAll('.header-bottom__column');
    if (w <= 768) {
        headerBottomMenus.forEach(menu => {
           if (!menu.classList.contains('done')) {
               menu.classList.add('done');
               headerMenuBody.append(menu);
           }
        });
    } else {
        headerBottomMenus.forEach(menu => {
           if (menu.classList.contains('done')) {
               menu.classList.remove('done');
               if (menu.classList.contains('header-bottom-menu_right')) {
                   headerBottomColumns[2].append(menu);
               } else {
                   headerBottomColumns[0].append(menu);
               }
           }
        });
    }
}
const adaptView = () => {
    const w = window.outerWidth;
    const h = window.outerHeight;
    adaptHeader(w, h);
}
adaptView();


const headerMenuIcon = document.querySelector('.header-menu__icon');
headerMenuIcon.addEventListener('click', () => {
    headerMenuIcon.classList.toggle('header-menu__icon_active');
    headerMenuBody.classList.toggle('header-menu__body_active');
    document.body.classList.toggle('lock');
});

const imageBackgrounds = document.querySelectorAll('.ibg');
imageBackgrounds.forEach(img => {
   const parent = img.parentElement;
   parent.style.background = `url('${img.getAttribute('src')}') center / cover no-repeat`;
});