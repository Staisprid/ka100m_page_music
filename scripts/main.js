import Header from './Header.js';

new Header();

import { students } from './students.js';

const tbody = document.querySelector('#studentsTable tbody');

// function createRow(student, index) {
//   const tr = document.createElement('tr');
//   tr.dataset.index = index;
//   tr.style.cursor = 'pointer';

//   tr.innerHTML = `
//         <td class="table-person-name ">${student.name} </td>
//         <td class="table-person-rating">${student.level}</td>
//         <td class="table-person-role">${student.rating}</td>
//         <td class="table-person-progress">${student.achievements}</td>
//   `;

//   //   <td>${student.name}</td>
//   //     <td>${student.level}</td>
//   //     <td>${student.rating}</td>
//   //     <td>${student.achievements}</td>

//   // Эффект при наведении
//   tr.addEventListener('mouseenter', () => {
//     tr.style.transform = 'scaleY(${$hover-scale})';
//     tr.style.transition = 'transform ${$transition-duration}';
//   });
//   tr.addEventListener('mouseleave', () => {
//     tr.style.transform = 'scaleY(1)';
//   });

//   // Переход на страницу деталей
//   tr.addEventListener('click', () => {
//     localStorage.setItem('selectedStudentId', student.id);
//     window.location.href = 'progress.html';
//   });

//   return tr;
// }

function createRow(student, index) {
  const tr = document.createElement('tr');
  tr.dataset.index = index;
  tr.style.cursor = 'pointer';

  tr.innerHTML = `
        <td class="table-person-name ">${student.name} </td>
        <td class="table-person-rating">${student.level}</td>
        <td class="table-person-role">${student.rating}</td>
        <td class="table-person-progress">${student.achievements}</td>      
  `;
  // Эффект при наведении
  tr.addEventListener('mouseenter', () => {
    tr.style.transform = 'scaleY(${$hover-scale})';
    tr.style.transition = 'transform ${$transition-duration}';
  });
  tr.addEventListener('mouseleave', () => {
    tr.style.transform = 'scaleY(1)';
  });

  // Переход на страницу деталей
  tr.addEventListener('click', () => {
    localStorage.setItem('selectedStudentId', student.id);
    window.location.href = 'progress.html';
  });

  return tr;
}

// Заполняем таблицу
students.forEach((student, index) => {
  const row = createRow(student, index);
  tbody.appendChild(row);
});
