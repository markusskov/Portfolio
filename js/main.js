document.querySelector('.fa-user').onclick = function () {
  document.querySelector('.fa-user').style.color = 'var(--primary-color)';
  document.querySelector('.fa-graduation-cap').style.color = '#868686';
  document.querySelector('.fa-briefcase').style.color = '#868686';
  document.querySelector('.work').style.display = 'none';
  document.querySelector('.education').style.display = 'none';
  document.querySelector('.blueprofile__image').style.display = 'block';
  document.querySelector('.profile').style.display = 'flex';
  document.querySelector('.red__image').style.display = 'none';
};

document.querySelector('.fa-graduation-cap').onclick = function () {
  document.querySelector('.fa-graduation-cap').style.color =
    'var(--primary-color)';
  document.querySelector('.fa-user').style.color = '#868686';
  document.querySelector('.fa-briefcase').style.color = '#868686';
  document.querySelector('.profile').style.display = 'none';
  document.querySelector('.work').style.display = 'none';
  document.querySelector('.blueprofile__image').style.display = 'none';
  document.querySelector('.education').style.display = 'flex';
  document.querySelector('.red__image').style.display = 'block';
};

document.querySelector('.fa-briefcase').onclick = function () {
  document.querySelector('.fa-briefcase').style.color = 'var(--primary-color)';
  document.querySelector('.fa-graduation-cap').style.color = '#868686';
  document.querySelector('.fa-user').style.color = '#868686';
  document.querySelector('.profile').style.display = 'none';
  document.querySelector('.education').style.display = 'none';
  document.querySelector('.blueprofile__image').style.display = 'none';
  document.querySelector('.work').style.display = 'flex';
  document.querySelector('.red__image').style.display = 'none';
};
