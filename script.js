function upDate(previewPic) {
    console.log(previewPic.alt, previewPic.src); // Проверка
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = "Наведи на изображение ниже, чтобы отобразить здесь.";
    imageDiv.style.backgroundImage = "url('')";
}
