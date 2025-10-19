const DESCRIPTIONS = [
  'Моё лучшее фото!',
  'Закат над морем',
  'Утренний кофе',
  'Вид из окна',
  'День, который запомнится надолго',
  'Счастливые моменты',
  'Новая камера — новые кадры',
  'Природа лучше любого фильтра',
  'Мой кот снова в кадре',
  'Поймал идеальный момент!',
  'Это было неожиданно!',
  'Когда просто гуляешь и вдруг…',
  'Фотография с души',
  'Немного уюта',
  'Мечты становятся реальностью',
  'Поймал свет как надо',
  'Люблю такие вечера',
  'Мгновение лета',
  'Город спит, а я снимаю',
  'Фотография без фильтров',
  'Только что снято!',
  'Тёплый день и хорошее настроение',
  'Мой лучший кадр за сегодня',
  'Солнце и свежий воздух',
  'Пусть день будет таким же ярким!'
];

const NAMES = [
  'John Doe',
  'Michael December',
  'Olivia Rodrigue',
  'Kevin Parker',
  'November October',
  'David Joseph',
  'Joseph Davis',
  'Anaconda Jackson'
]

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArrayElement(array) {
  return array[getRandomInt(0, array.length - 1)];
}

// Генерация текста комментария из 1–2 случайных предложений
function generateMessage() {
  const count = getRandomInt(1, 2);
  const shuffled = [...MESSAGES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).join(' ');
}

// Генерация одного комментария
function generateComment(id) {
  return {
    id,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: generateMessage(),
    name: getRandomArrayElement(NAMES)
  };
}

// Генерация массива комментариев (от 0 до 30)
function generateComments() {
  const comments = [];
  const count = getRandomInt(0, 30);

  for (let i = 0; i < count; i++) {
    comments.push(generateComment(Date.now() + i + Math.random())); // уникальный id
  }

  return comments;
}

// Генерация одного объекта описания фото
function generatePhoto(id) {
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: generateComments()
  };
}

// Генерация массива из 25 фотографий
function generatePhotos() {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push(generatePhoto(i));
  }
  return photos;
}

const photoDescriptions = generatePhotos();
console.log(photoDescriptions);
