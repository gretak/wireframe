export const showTopNav = () => {
    let nav = document.getElementById('Topnav');

    nav.addEventListener('click', function () {
        if (nav.className === 'topnav') {
            nav.className += ' responsive';
        } else {
            nav.className = 'topnav';
        }
    });
};
