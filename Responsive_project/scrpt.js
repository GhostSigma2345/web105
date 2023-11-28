function changeText(imageSrc, newText) {
    document.getElementById('large').src = imageSrc;
    document.getElementById('main-image').getElementsByTagName('p')[0].innerText = newText;
}