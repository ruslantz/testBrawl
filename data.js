

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
    "упорство",
    "чемпион"
];

export const USED = [];
console.log(USED)

export const QUANTITY = POWER.length

const createPicture = (id) => {
    // Создает массив комментариев
    const power = POWER[id - 1]; // Получаем значение power из массива POWER
    return {
      id,
      power: power,
      url: (id === 13) ? `./images/${id}.gif` : ((power === "чемпион") ? './images/champ.png' : `./images/${id}.png`)
    };
  };
export const dailyExercises = [];

let repetitions = 8;
for (let day = 1; day <= QUANTITY; day++) {
  const tasks = [
    "Разминка, растяжка",
    `Отжимания от пола (${repetitions} раз)`,
    `Качаем пресс (${repetitions} раз)`,
    `Приседания (${repetitions} раз)`,
    `Прыжки на месте (${repetitions} раз)`,
  ];

  dailyExercises.push({
    day: day,
    tasks: tasks
  });

  repetitions ++;
  // if (day % 2 === 0) {
  // }
}

console.log(dailyExercises)

export const createPictures = (quantity) => Array.from({ length: quantity }, (_, pictureId) => createPicture(pictureId + 1));