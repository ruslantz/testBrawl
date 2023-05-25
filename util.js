export const getRandomIntInclusive = (a, b) => {
    if (!Number(a || b) || (a || b) < 0 || a >= b) {
      return NaN;
    }
  
    const min = Math.ceil(Math.min(a, b));
    const max = Math.floor(Math.max(a, b));
  
    return Math.round(Math.random() * (max - min + 1)) + min;
  };
  
  export const getRandomElement = (element) => element[getRandomIntInclusive(0, element.length - 1)];