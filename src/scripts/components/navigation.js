export const showTopNav = () => {
  const nav = document.getElementById('Topnav');
  const icon = document.querySelector('.topnav__icon');

  icon.addEventListener('click', function () {
    if (nav.className === 'topnav') {
      nav.className += ' responsive';
    } else {
      nav.className = 'topnav';
    }
  });
};
