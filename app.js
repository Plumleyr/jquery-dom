console.log("Let's get ready to party with jQuery!")
$('article img').addClass('image-center');
$('p').last().remove();
let random = (Math.random()*101);
$('#title').css('font-size', random + 'px');
$('ol').append('<li>chicken</li>');
$('aside').html("<p>sorry for the silly list's existence.</p>");
let $input = $('input');
$input.on('keyup', function(){
    $('body').css('background-color', 'rgb('+ $input.eq(0).val() + ',' + $input.eq(1).val() + ',' +$input.eq(2).val() +')');
})
$('img').on('click', function(){
    $(this).remove();
})