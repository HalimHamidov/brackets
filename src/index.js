  module.exports = function check(str, bracketsConfig) {
    let j = 0;
    let len = bracketsConfig.length;
    let temp = "";
    let brackets = "";
    while (j != len) {
        j = 0;
        let i = 0;
        while (i < len) {
            brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
            temp = str.replace(brackets, "");
            if (str === temp) {
                j++;
            }
            str = temp;
            i++;
        }
    }
    return str.length === 0;
}

//про модули неплохо написано: https://flaviocopes.com/es-modules/
// первым параметром передается строка, 
// вторым - массив массивов из скобок, которые встречаются в строке.
// заменяет в строке str все подстроки brackets на пустую строку

// check('|()|(||)||', [['(', ')'], ['|', '|']])
// рассмотрим этот пример. Сначала в переменную brackets сохраним первую пару скобок () и заменим эту подстроку на пустую. Получим:
// check('||(||)||', [['(', ')'], ['|', '|']])
// str !== comparisor  
// поэтому count остается 0. Перезапишем str новой строкой и увеличим i.
// Теперь составим новую подстроку || и заменим ее. Получим:
// comparisor = '||(||)||'.replace('||', ""); comparisor === '()'
// Снова сравнимаем str и comparisor, они не совпадают, count остается 0. Увеличиваем i до 2, перезапишем str = '()'  и 
// выходим из внутреннего цикла, тк i == len.
// обнулим i, начнем заново. Заменим (), получим пустую строку. Снова увеличим i, ищем || и на этой итерации после замены str === comparisor 
// (обе пустые).  
// Увеличиваем count, увеличиваем i, выходим из внутреннего цикла. Обнуляем переменные i и count, пытаемся заменить () в пустой строке. 
//  Не найдем,  получаем str === comparisor и увеличиваем count. Переходим к следующей паре строк, пытаемся заменить || и также не находим,
//   увеличиваем count и i. Выходим из внутреннего цикла (count == 2, i == 2). Также выходим из внешнего цикла, смотрим, 
//   что str пустая и возвращаем true

// alternative solution
// module.exports = function check(str, bracketsConfig) {
//     let bc = str.split('');
//     for (let i = 0; i < bc.length; i++) {
//       for (let j = 0; j < bracketsConfig.length; j++) {
//         if ( bc[i] === bracketsConfig[j][0] && bc[i + 1] === bracketsConfig[j][1] ) {
//           bc.splice (i, 2);
//           i = -1;
//           continue; 
//         }
//       }
//     }
//     if (bc.length === 0) {
            // return true;
            // }
//     else {
    // return false;
    // }
// }