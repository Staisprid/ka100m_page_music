// export default function initTabs() {
//   const tabsLinks = document.querySelectorAll('[data-tab]');
//   const sections = document.querySelectorAll('.tab-content');
//   // const videos = ['../img/VID20220604173045.mp4', '../img/VID_20240723_113042.mp4'];

//   // let currentVideoIndex = 0;

//   // const videoPlayer = document.querySelector('#video-player');

//   function switchActiveTab(targetId) {
//     tabsLinks.forEach((link) => link.classList.toggle('active', link.dataset.tab === targetId));
//     sections.forEach((section) => section.classList.toggle('active', section.id === targetId));
//   }

//   function playNextVideo() {
//     currentVideoIndex++;
//     if (currentVideoIndex >= videos.length) {
//       currentVideoIndex = 0;
//     }
//     videoPlayer.src = videos[currentVideoIndex];
//     videoPlayer.load();
//     videoPlayer.play();
//   }
//   // switchActiveTab('basics');
//   tabsLinks.forEach((link) => {
//     link.addEventListener('click', (event) => {
//       event.preventDefault();
//       const targetId = link.dataset.tab;
//       switchActiveTab(targetId);
//     });
//   });
//   document.querySelector('.btn-next-video').addEventListener('click', playNextVideo);
// }
// initTabs();

// document.addEventListener('DOMContentLoaded', () => {
//   // Обработчик события hashchange
//   window.addEventListener('hashchange', handleHashChange);

//   // Инициализировать состояние при первой загрузке страницы
//   handleHashChange();
// });

// function handleHashChange() {
//   // Получаем значение хэш-фрагмента из URL
//   let hash = location.hash.slice(1); // Удаляем '#' в начале

//   // Если в URL есть хэш, делаем соответствующий элемент активным
//   if (hash !== '') {
//     let element = document.getElementById(hash);
//     if (element) {
//       // Активируем элемент (добавляем класс active)
//       element.classList.add('active');

//       // Остальные элементы очищаем от класса active
//       const elements = document.querySelectorAll('.content-items');
//       elements.forEach((el) => {
//         if (el.id !== hash && el.classList.contains('active')) {
//           el.classList.remove('active');
//         }
//       });
//     }
//   }
// }

// Выбор элементов DOM
const menuCircles = document.querySelectorAll('.circle');
const images = document.querySelectorAll('.images img');
const questions = document.querySelectorAll('.question');

// Начальная инициализация
setActiveCircleAndImage(0);

// Установка активной картинки, вопроса и кружочка
function setActiveCircleAndImage(index) {
  images.forEach((img) => img.classList.remove('active'));
  questions.forEach((q) => q.classList.remove('active'));
  menuCircles.forEach((circle) => circle.classList.remove('selected'));

  images[index].classList.add('active');
  questions[index].classList.add('active');
  menuCircles[index].classList.add('selected');
}

// Обработка кликов по кружочкам
menuCircles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    setActiveCircleAndImage(index);
  });
});

const cards = document.querySelectorAll('.card');
const contents = document.querySelectorAll('.content');

// Определим начальную активную карточку
let activeTarget = null;

// Проверим, если есть хеш в URL
if (location.hash) {
  activeTarget = location.hash.substr(1); // удаляем знак "#"
} else {
  activeTarget = 'basics'; // по умолчанию открываем "Основы"
}

// Сначала найдём и раскроем нужную карточку
const startCard = Array.from(cards).find(
  (card) => card.getAttribute('data-target') === activeTarget,
);
if (startCard) {
  const targetContent = document.querySelector(`.${activeTarget}`);
  if (targetContent) {
    startCard.classList.add('active');
    targetContent.classList.add('active');
  }
}

// Обрабатываем клики на карточки
cards.forEach((card) => {
  card.addEventListener('click', () => {
    // Закрываем предыдущий открытый контент
    contents.forEach((content) => content.classList.remove('active'));
    cards.forEach((cardItem) => cardItem.classList.remove('active'));

    // Открываем новый контент
    const targetClass = card.getAttribute('data-target');
    const targetContent = document.querySelector(`.${targetClass}`);
    targetContent.classList.add('active');
    card.classList.add('active');

    // Обновляем URL с новым хешем
    history.replaceState(null, '', `#${targetClass}`);
  });
});
