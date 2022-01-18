$(document).ready(function () {
    let firstElement = $('input')[0];
    $(firstElement).keypress(function (event) {
        let symbol = parseInt(event.key);
        if (isNaN(symbol)) {
            console.log(event.key);
        } else {
            event.preventDefault();
        }
    })
    let secondElement = $('input')[1];
    $(secondElement).keypress(function (event) {
        if (event.key === '.' || event.key === ',') {
            event.preventDefault();
        } else {
            console.log(event.key);
        }
    })
    $('#agree_checkbox').change(function (event) {
        if (event.currentTarget.checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    })
    $('.block__btn').click(function (event) {
        let inputFirst = $('input')[0];
        let inputSecond = $('input')[1];
        let inputThird = $('input')[2];
        let inputFourth = $('input')[3];
        let inputFifth = $('input')[4];
        let inputSixth = $('input')[5];
        if ($(inputFirst).val() === '') {
            alert("Заполните поле" + ' ' + inputFirst.name);
        }
        else if ($(inputSecond).val() === '') {
            alert("Заполните поле" + ' ' + inputSecond.name);
        }
        else if ($(inputThird).val() === '') {
            alert("Заполните поле" + ' ' + inputThird.name);
        }
        else if ($(inputFourth).val() === '') {
            alert("Заполните поле" + ' ' + inputFourth.name);
        }
        else if ($(inputFifth).val() === '') {
            alert("Заполните поле" + ' ' + inputFifth.name);
        }
        else if ($(inputFourth).val() !== $(inputFifth).val()) {
            alert("Пароли не совпадают");
        }
        else if ($(inputSixth).is(':checked') === false) {
            alert("Чебокбокс не выбран!");
        }
        else {
            alert("OKAY");
        }
    })
    $('.block__href').click(function (event) {
        $('h1').text('Log in to the system')
        console.log($('h1').text())
        $('.first__form__title').remove();
        $('.firstInput').remove()
        $('.second__form__title').remove();
        $('.secondInput').remove();
        $('.third__form__title').remove();
        $('.thirdInput').remove();
        $('label').remove();
        $('.block__btn').text('Sign In');
        console.log($('.block__btn').text());
        $('.href').remove();
    })
})