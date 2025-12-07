// big-picture.js
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsCounter = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const body = document.body;

function renderComments(comments) {
  commentsList.innerHTML = '';

  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const li = document.createElement('li');
    li.classList.add('social__comment');

    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.src = comment.avatar;
    img.alt = comment.name;
    img.width = 35;
    img.height = 35;

    const text = document.createElement('p');
    text.classList.add('social__text');
    text.textContent = comment.message;

    li.appendChild(img);
    li.appendChild(text);

    fragment.appendChild(li);
  });

  commentsList.appendChild(fragment);
}

function onEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

export function openBigPicture(photo) {
  // заполняем данные
  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;

  // рисуем комментарии
  renderComments(photo.comments);

  // скрываем счётчик и кнопку подгрузки
  commentsCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  // показываем модалку
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onEscKeydown);
}

export function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
}

// закрытие по крестику
closeButton.addEventListener('click', () => {
  closeBigPicture();
});
