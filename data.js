

export const POWER = [
    "сила",
    "скорость",
    "гибкость",
    "выносливость",
    "смелость",
    "равновесие",
    "координация",
    "цель",
    "ум",
    "смекалка",
    "хитрость",
    "помощь",
    "техника",
    "упорство"
];

export const USED = [];
console.log(USED)

export const QUANTITY = POWER.length

const createPicture = (id) => {
    // Создает массив комментариев
    return {
        id,
        url: (id === 13) ? `./images/${id}.gif` : `./images/${id}.webp`,
        power: POWER[id-1]
    };
};
export const dailyExercises = [];

let repetitions = 8;
for (let day = 1; day <= QUANTITY; day++) {
  const tasks = [
    "Растяжка",
    `Отжимания от пола (${repetitions} раз)`,
    `Качаем пресс (${repetitions} раз)`,
    `Приседания (${repetitions} раз)`,
    `Прыжки на месте (${repetitions} раз)`,
    `Касание пальцами ног (${repetitions} раз)`
  ];

  dailyExercises.push({
    day: day,
    tasks: tasks
  });

  if (day % 2 === 0) {
    repetitions += 1;
  }
}

console.log(dailyExercises)

export const createPictures = (quantity) => Array.from({ length: quantity }, (_, pictureId) => createPicture(pictureId + 1));