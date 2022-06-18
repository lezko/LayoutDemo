import '@/components/header/header';
import '@/js/ibg';
import $ from 'jquery';

function hasTouch() {
    return 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0;
}

function removeHover() {
    try {
        for (let si in document.styleSheets) {
            let styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (let ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}

window.addEventListener('resize', () => {
    initHover();
});

function initHover() {
    if (hasTouch() || window.innerWidth < 768) {
        removeHover();
    }
}
initHover();

const pricing = $('.pricing__content');
// pricing.height(pricing.outerHeight(true) + 'px');

// $('.pricing-card').on('click', e => {
//     const card = $('.pricing-card');
//     card.removeClass('pricing-card--active');
//     e.currentTarget.classList.add('pricing-card--active');
//     card.find('.button').removeClass('button--dark').addClass('button--light');
//     $(e.currentTarget).find('.button').removeClass('button--light').addClass('button--dark');
// });