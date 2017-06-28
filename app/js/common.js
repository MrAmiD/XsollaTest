function addVal(opt, operator) { //Добавление значений в input
    var currentVal = $('#result').val();
    if($('#result').hasClass('res-val')){
        if(!operator){
            $('#result').val('');
            currentVal = '';
        }
        $('#result').removeClass('res-val');
    }
    currentVal += opt;
    $('#result').val(currentVal);
}

function resCalc() {// Вычисление результата
    //обработчик ошибок
    try {
        $('#result').val(parseFloat(eval($('#result').val()).toFixed(6)));
        $('#result').addClass('res-val');
    } catch (err) { //Если ошибка при вводе, то выводим соответствующее сообщение
        $('#result').val('Ошибка');
        $('#result').addClass('res-val');
    }
}

$( ".btn-opt" ).on( "click", function() { //Обработчик события клика по кнопкам
    var optVal = $(this).val();
    switch (optVal) {
        case '=':
            resCalc();
            break;
        case 'CE':
            $('#result').val('0');
            $('#result').addClass('res-val');
            break;
        default:
            addVal(optVal, $(this).hasClass('operator'));
    }
});

$(document).keypress(function(e) {// Обработчик нажатия клавиш на клавиатуре
    switch (e.which) {
        case 13://enter
            resCalc();
            break;
        case 48://"0"
            addVal('0', false);
            break;
        case 49://"1"
            addVal('1', false);
            break;
        case 50://"2"
            addVal('2', false);
            break;
        case 51://"3"
            addVal('3', false);
            break;
        case 52://"4"
            addVal('4', false);
            break;
        case 53://"5"
            addVal('5', false);
            break;
        case 54://"6"
            addVal('6', false);
            break;
        case 55://"7"
            addVal('7', false);
            break;
        case 56://"8"
            addVal('8', false);
            break;
        case 57://"9"
            addVal('9', false);
            break;
        case 40://"("
            addVal('(', true);
            break;
        case 41://")"
            addVal(')', true);
            break;
        case 37://"%"
            addVal('%', true);
            break;
        case 42://"*"
            addVal('*', true);
            break;
        case 47:// "/"
            addVal('/', true);
            break;
        case 43:// "+"
            addVal('+', true);
            break;
        case 45:// "-"
            addVal('-', true);
            break;
        case 46:// "."
            addVal('.', false);
            break;
        case 44:// ","
            addVal('.', false);
            break;
        default:
            console.log('default');
    }
});

$(function() {
	
});



