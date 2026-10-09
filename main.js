



let num = prompt('Введите ваш возраст');

switch (true) {
    case isNaN(Number(num)) || num.trim() === '':
        console.log('Введите число');
        break;

    case Number(num) < 18:
        console.log('Вам доступ запрещён');
        break;

    case Number(num) >= 18 && Number(num) <= 60:
        console.log('Добро пожаловать');
        break;

    case Number(num) > 60:
        console.log('Вы слишком взрослый для этого сайта');
        break;
}

