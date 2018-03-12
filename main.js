$(document).ready(function(){
    $('.calc select').change(function(){
        $edition = $('select#card_edition').val();
        console.log($edition);
        $paper = $('select#card_paper').val();
        console.log($paper);
        $color = $('select#card_color').val();
        console.log($color);
        $color_variant = $('#card_color > option').attr('data-color');
        console.log($color_variant);
        if ($color_variant == 1) {
            $('.card-images img').hide();
            $('#card_1_0').show('slow');
        } else if ($color_variant == 2) {
            $('.card-images img').hide();
            $('#card_1_1').show('slow');
        } else if ($color_variant == 3) {
            $('.card-images img').hide();
            $('#card_4_0').show('slow');
        } else if ($color_variant == 4) {
            $('.card-images img').hide();
            $('#card_4_1').show('slow');
        } else if ($color_variant == 4) {
            $('.card-images img').hide();
            $('#card_4_4').show('slow');
        }
    })
});