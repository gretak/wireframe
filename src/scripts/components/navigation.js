export const showTopNav = () => {
    const nav = document.getElementById('Topnav');

    nav.addEventListener('click', function () {
        if (nav.className === 'topnav') {
            nav.className += ' responsive';
        } else {
            nav.className = 'topnav';
        }
    });
};
