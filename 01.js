// # Завдання 1

// Створіть масив об'єктів "студентів", який містить властивості "ім'я", "вік" та
// "рейтинг". Додайте до масиву метод "вітатися", який буде повертати рядок з
// привітанням зі зазначенням імені студента.

// Використовуючи метод "map()", створіть новий масив, який містить привітання з
// кожним студентом з масиву "студентів". Використовуючи метод "filter()", створіть
// новий масив, який містить тільки ті об'єкти типу "студент", які мають рейтинг
// вище заданого значення.

// Створіть функцію "додати*рейтинг", яка приймає один аргумент - кількість балів,
// на яку потрібно збільшити рейтинг студента. Викличте функцію "додати*рейтинг" на
// кожному елементі масиву "студентів". Перевірте, що в контексті функції
// "додати_рейтинг" значення "this" вказує на конкретний об'єкт "студент". Виведіть
// новий масив зі зміненими рейтингами в консоль.

const students = [
  { name: "Тоня", age: 20, rating: 5 },
  { name: "Андрій", age: 22, rating: 3 },
  { name: "Анна", age: 21, rating: 4 },
];

const greeting = students.map((student) => {
  return `${student.name}, привіт!`;
});
console.log(greeting);

const filtered = students.filter((student) => {
  return student.rating > 2;
});
console.table(filtered);

function addRating(num) {
  const addRatingStudents = this.map((student) => {
    return {
      ...student,
      rating: student.rating + num,
    };
  });
  console.table(addRatingStudents);
}
addRating.call(students, 7);