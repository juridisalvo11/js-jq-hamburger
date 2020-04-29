//visualizzare l'hamburger menu su mobile
//Intercetto il click sul pulsante
$('.header-right > a').click(function() {
//Visualizzo il menu
    $('.hamburger-menu').addClass('active');
})
//Nascondo il menu
$('.hamburger-menu > a').click(function(){
    $('.hamburger-menu').removeClass('active');
})
