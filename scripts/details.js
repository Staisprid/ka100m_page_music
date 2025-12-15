import { students } from './students.js';

const container = document.getElementById('student-details');

function renderStudentDetails(student) {
  container.innerHTML = `
    <h2 class="table-name">${student.name}</h2>


    <div class="card-profile">
                        <div class="card-foto">
                            <div class="card-foto-img"><img class="foto-img" src="svg/card-avatar.svg" alt=""></div>

                        </div>
                        <div class="card-level">
                            <div class="card-level-title">УРОВЕНЬ</div>
                            <div class="card-level-number">180/1000</div>
                            <div class="card-level-scale"></div>
                        </div>
                        <div class="card-level-name">ДЖЕДАЙ</div>
                        <div class="card-bonus">
                            <img class="bonus-guitar" src="svg/Guitarr.svg" alt="Bonus picter">
                        </div>
                    </div>
                    <div class="table-content-user">
                        <div class="header-user">
                            <div class="header-name-lesson">ПРОХОЖДЕНИЕ</div>
                            <div class="header-rating-lesson">LvL</div>
                            <div class="header-progress-lesson">Достижения</div>
                        </div>
                        <div class="person-lesson">
                            <div class="person-name-lesson "><a href="lessons.html#basics" data-tab="basics">Основы</a></div>
                            <div class="person-rating-lesson">${student.level}</div>
                            <div class="person-progress-lesson">
                                <img class="person-progress-guitara" src="svg/guitarfire.png" alt="">
                                <img class="person-progress-shadow" src="svg/shadowpink.svg" alt="">
                            </div>
                        </div>
                        <div class="person-lesson">
                            <div class="person-name-lesson "> <a href="lessons.html#practice">Практика</a></div>
                            <div class="person-rating-lesson">${student.practiceLesson}</div>
                            <div class="person-progress-lesson">
                                <img class="person-progress-guitara" src="svg/guitarblue.png" alt="">
                                <img class="person-progress-shadow" src="svg/shadowblue.svg" alt="">
                            </div>
                        </div>
                        <div class="person-lesson">
                            <div class="person-name-lesson "><a href="lessons.html#theory">Теория</a></div>
                            <div class="person-rating-lesson">${student.theory}</div>
                            <div class="person-progress-lesson">
                                <img class="person-progress-guitara" src="svg/violet.png" alt="">
                                <img class="person-progress-shadow" src="svg/shadowviolet.svg" alt="">
                            </div>
                        </div>
                        <div class="person-lesson">
                            <div class="person-name-lesson person-improvisation"><a href="lessons.html#improvisation">Импровизация</a></div>
                            <div class="person-rating-lesson">${student.improvisation}</div>
                            <div class="person-progress-lesson">
                                <img class="person-progress-guitara" src="svg/guitargreen.png" alt="">
                                <img class="person-progress-shadow" src="svg/shadowgreen.svg" alt="">
                            </div>
                        </div>
                        <div class="person-lesson">
                            <div class="person-name-lesson ">Техника </div>
                            <div class="person-rating-lesson">${student.thechnic}</div>
                            <div class="person-progress-lesson">
                                <img class="person-progress-guitara" src="svg/guitarsea.png" alt="">
                                <img class="person-progress-shadow" src="svg/shadowpink.svg" alt="">
                            </div>
                        </div>
                        <div class="table-song">
                            <div class="header-song">
                                <div class="header-song-name">ПЕСНИ</div>
                                <div class="header-song-stage">ЭТАПЫ</div>
                                <div class="header-song-genre">ЖАНР</div>
                                <div class="header-song-scores">БАЛЛЫ</div>
                            </div>
                            <div class="person-song">
                                <div class="person-song-name">1. Гуль </div>
                                <div class="person-song-stage">2</div>
                                <div class="person-song-genre">ОСТ</div>
                                <div class="person-song-scores">50</div>
                            </div>
                            <div class="person-song">
                                <div class="person-song-name ">1. Гуль </div>
                                <div class="person-song-stage">2</div>
                                <div class="person-song-genre">ОСТ</div>
                                <div class="person-song-scores">50</div>
                            </div>
                        </div>
                    </div>

    
    
  `;
}

// {/* <img src="${student.photo}" alt="${student.name}" style="width:150px;height:auto;border-radius:8px;">
//     <p><strong>Уровень:</strong> ${student.level}</p>
//     <p><strong>Рейтинг:</strong> <img src="${student.ratingImage}" alt="Рейтинг ${student.rating}"></p>
//     <p><strong>Достижения:</strong> ${student.achievements}</p>
//     <p><strong>Пройденные уроки:</strong> ${student.lessonsPassed}</p>
//     <p><strong>Созданные песни:</strong> ${student.songsCreated}</p> */}
//<h2>${student.name}</h2>//

function goBack() {
  window.location.href = 'index.html';
}

// Получить ID выбранного ученика
const studentId = parseInt(localStorage.getItem('selectedStudentId'), 10);
const student = students.find((s) => s.id === studentId);

if (student) {
  renderStudentDetails(student);
} else {
  container.innerHTML = '<p>Информация о студенте не найдена.</p>';
}

// Экспортируем функцию для кнопки
window.goBack = goBack;
