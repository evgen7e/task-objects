/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
  const result = { ...data };

  if (result.gender === 'female') {
    delete result.age;
  } else if (result.gender === 'male') {
    if (result.income === undefined) {
      result.income = 100000;
    }
  }

  return result;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
  const allKeys = [
    ...Object.keys(obj1 || {}),
    ...Object.keys(obj2 || {}),
    ...Object.keys(obj3 || {})
  ];

  const uniqueSortedKeys = [...new Set(allKeys)].sort();
  
  return uniqueSortedKeys;
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
  const result = [];

  for (let i = 1; i <= count; i++) {
    const clone = { ...obj, id: i };
    result.push(clone);
  }

  return result;
}