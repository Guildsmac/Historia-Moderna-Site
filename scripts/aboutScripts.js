const ABOUT_US_CARD = $('#about-us .card');
const ABOUT_PROJECT_CARD = $('#about-project .card');

function toggleAboutUs(caller) {
    if (ABOUT_US_CARD.is(':visible'))
        ABOUT_US_CARD.fadeOut(200);

    else
        ABOUT_US_CARD.fadeIn(200);

    if (caller === 'html') {
        if (ABOUT_PROJECT_CARD.is(':visible'))
            toggleAboutProject('script');
    }
    window.scrollTo(0, 0);
}

function toggleAboutProject(caller) {
    if (ABOUT_PROJECT_CARD.is(':visible'))
        ABOUT_PROJECT_CARD.fadeOut(200);
    else
        ABOUT_PROJECT_CARD.fadeIn(200);

    if (caller === 'html') {
        if (ABOUT_US_CARD.is(':visible'))
            toggleAboutUs('script');
    }
    window.scrollTo(0, 0);
}