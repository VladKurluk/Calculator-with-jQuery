$(document).ready(function(){
    /*Подвешиваем на событие(изменение селекта) и записываем в переменные значения опшинов*/
    $('.calc select').change(function(){
        //Получаем значения data-атрибутов
        $edition = $('select#card_edition').val();
        $paper = $('select#card_paper').val();
        $paper_ratio = $('select#card_paper option:selected').attr('data-paper-ratio');
        $color = $('select#card_color').val();
        $print_file = $('select#card_color option:selected').attr('data-print-file');
        $print = $('select#card_color option:selected').attr('data-print');

        /*Логика калькулятора*/
        $division = 30; //Тиражирование
        $final_edition = $edition / $division;
        $price = $final_edition * $paper_ratio + parseInt($print_file) +  $final_edition * $print;
        $('#final_price').text($price);//Вывод цены
    });


    $('select#card_color').change(function(){
        /*Получаем значение data-атрибута и меняем в зависимости от этого картинку выбранной визитки*/
        $color_variant = $('select#card_color option:selected').attr('data-number');
        if ($color_variant == 1) {
            $('.card-images img').hide();
            $('#card_1_0').show('slow');
        }
        if ($color_variant == 2) {
            $('.card-images img').hide();
            $('#card_1_1').show('slow');
        }
        if ($color_variant == 3) {
            $('.card-images img').hide();
            $('#card_4_0').show('slow');
        }
        if ($color_variant == 4) {
            $('.card-images img').hide();
            $('#card_4_1').show('slow');
        }
        if ($color_variant == 5) {
            $('.card-images img').hide();
            $('#card_4_4').show('slow');
        }
    });

    
});