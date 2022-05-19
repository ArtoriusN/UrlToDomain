let data = `Саяхов Артур  Наилевич,  Frontend developer    
         
Саяхов Эдуард Дамирович , middle Frontend     

`;
function transformationString(dat) {
   return dat
   //делим - разделитель новая строка
   .split('\n')
   //фильтруем. line это строка отсекаем пробелы вначале и в конце через trim и проверяем чтобы длина была больше 0. Тем самым избавляемся от пустых строк
   .filter(line => line.trim().length > 0)
   //преобразуем строку в объект
   .map(line =>  {
       const [fullName, occupation] = line
       //делим через запятую на fullName, occupation
       .split(',')
       //убираем у строк пробелы в начале и в конце
       .map(str => str.trim())
       //убираем пустые строки
       .filter(text => text.length > 0)
       const [name, surname, midlename] = fullName
       .split(' ')
       .filter(text => text.length > 0);
       return {
           surname, name, midlename, occupation
       };
   })
}
console.log(transformationString(data));