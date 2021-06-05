document.querySelector('.fa-graduation-cap').onclick = function () {
  document.querySelector('.fa-graduation-cap').style.color =
    'var(--primary-color)';
  document.querySelector('.fa-user').style.color = '#868686';
  document.querySelector('.fa-briefcase').style.color = '#868686';
};

document.querySelector('.fa-user').onclick = function () {
  document.querySelector('.fa-user').style.color = 'var(--primary-color)';
  document.querySelector('.fa-graduation-cap').style.color = '#868686';
  document.querySelector('.fa-briefcase').style.color = '#868686';
};

document.querySelector('.fa-briefcase').onclick = function () {
  document.querySelector('.fa-briefcase').style.color = 'var(--primary-color)';
  document.querySelector('.fa-graduation-cap').style.color = '#868686';
  document.querySelector('.fa-user').style.color = '#868686';
};
