
$('.flipcard').click(function (e) {
var $card = $(this);
if ($card.hasClass("flipped")) {
$card.removeClass('flipped');
} else {
$card.addClass('flipped');
}
});