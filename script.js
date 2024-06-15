function shareFacebook() {
    var url = window.location.origin + window.location.pathname.replace('index.html', 'pagina2.html');
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank');
}

function shareTwitter() {
    var url = window.location.origin + window.location.pathname.replace('index.html', 'pagina2.html');
    var text = 'Confira este site incrível: ';
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url), '_blank');
}
