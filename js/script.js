function shareFacebook() {
    var url = window.location.origin + window.location.pathname.replace('index.html', '');
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank');
}

function shareTwitter() {
    var url = window.location.origin + window.location.pathname.replace('index.html', '');
    var text = 'Confira este projeto incrível sobre a Formula E: ';
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url), '_blank');
}
